"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, NomadVanPlace
from api.utils import generate_sitemap, APIException

# --------------------------------------------------------------------------
# Vamos importando las librerias necesarias y también lo que necesitamos de la DB (models)
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

# --------------------------------------------------------------------------

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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
    # Access the identity of the current user with get_jwt_identity
    # current_user_id = get_jwt_identity()
    nomadvanplace = NomadVanPlace.query.all() #Seleccionamos todos los elementos del modelo NomadVanPlace
    data = [item.serialize() for item in nomadvanplace] #Ver clase (y texto) de front-back para entenderlo bien
    
    return jsonify(data), 200