"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, NomadVanPlace, Locations, Services, ServicesRelationship, KindOfPlace
from api.utils import generate_sitemap, APIException
import json
import datetime

# --------------------------------------------------------------------------
# Vamos importando las librerias necesarias y también lo que necesitamos de la DB (models)
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import os
# --------------------------------------------------------------------------

# Create flask app
api = Blueprint('api', __name__)

# api.config["JWT_SECRET_KEY"] = os.eviron.get('JWT_SECRET')  # Change this!
# jwt = JWTManager(api)
# # SAMPLE DOC TOKEN GENERATOR
# # Create a route to authenticate your users and return JWTs. The
# # create_access_token() function is used to actually generate the JWT.
# @app.route("/login", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token)
# ----------------------------------------------------------------------

# --------------------------------------------------------------------------------
# Vamos a crear el servicio de CREAR un TOKEN asociado a un usuario
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })
    # --------------------------------------------------------------------------------
# Vamos a crear el servicio de CREAR un nuevo NomadVanPlace
@api.route("/newNomadVanPlace", methods=["POST"])
@jwt_required()
def create_nomadvanplace():
    user = get_jwt_identity()
    body = json.loads(request.data) # con request.data recibimos los datos y con json.loads cargamos los datos en formato original
    print(body)
    newLocation = Locations(lat=body.get('location')[0],lng=body.get('location')[1])
    db.session.add(newLocation)
    db.session.commit()
    nomadvanplace = NomadVanPlace(
        user = user,
        title = body.get('title'),
        # image = body.get('picture'), la dejamos comentada porque no la hemos añadido en la db models.py
        location = newLocation.id,
        kindofplace = body.get('kindOfPlace'),
        # services = body.get('services'),
        description = body.get('description'),
        rating = body.get('rating'),
        date = datetime.datetime.now()
    )
    db.session.add(nomadvanplace)
    db.session.commit()
    for service in body.get('services'):
        newPlaceServices = ServicesRelationship(nomadvanplace_id = nomadvanplace.id, services_id = service)
        db.session.add(newPlaceServices)
        db.session.commit()
    print(nomadvanplace)
    print(nomadvanplace.serialize())

    if nomadvanplace is None:
        # the nomadvanplace was not found on the database
        return jsonify({"msg": "The new NomadVanPlace was not created"}), 401
    
    return jsonify(nomadvanplace.serialize())
# --------------------------------------------------------------------------------
# Creamos un servicio para endpoints privados con jwt_required
@api.route("/area-privada", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200
# --------------------------------------------------------------------------------
# Creamos un servicio para recibir una lista de todos los Nomad Val Places
@api.route("/places-list", methods=["GET"])
# @jwt_required()
def places_list():
    nomadvanplace = NomadVanPlace.query.all() #Seleccionamos todos los elementos del modelo NomadVanPlace
    data = [item.serialize() for item in nomadvanplace] #Ver clase (y texto) de front-back para entenderlo bien
    
    return jsonify(data), 200
# --------------------------------------------------------------------------------
# Creamos un servicio para recibir toda la información de un Nomad Van Place
@api.route("/places-list/<int:placeId>", methods=["GET"])
# @jwt_required()
def getNomadVanPlace(placeId): # Le pasamos a nuestra función el ID del Nomad Van Place que queremos mostrar
    nomadvanplace = NomadVanPlace.query.get(placeId) #Seleccionamos la info del NOmad Van Place con ID = a la que hemos seleccionado en la ruta
    data = nomadvanplace.serialize() #Ver clase (y texto) de front-back para entenderlo bien
    
    return jsonify(data), 200

# --------------------------------------------------------------------------------
# endpoint hello example with authenticated request
@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():

    email = get_jwt_identity()
    dictionary = {
        "message" : "this is the message from the authenticated request from user "+str(email)+ "... YES!"
        # Question: why get_jwt_identity() its giving back the id but not the email?
    }

    return jsonify(dictionary)
# --------------------------------------------------------------------------------