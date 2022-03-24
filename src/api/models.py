from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    todos = db.relationship('Todos', backref='user_todo', lazy=True)
    nomadvanplace = db.relationship('NomadVanPlace', backref='user_place', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class KindOfPlace(db.Model):
    __tablename__ = 'kindofplace'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    icon = db.Column(db.String(80), unique=True, nullable=False)

    nomadvanplace = db.relationship('NomadVanPlace', backref='kind_place', lazy=True)

    def __repr__(self):
        return '<Services %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon,
            # do not serialize the password, its a security breach
        }

class NomadVanPlace(db.Model):
    __tablename__ = 'nomadvanplace'
    id = db.Column(db.Integer, primary_key=True)
    
    services = db.Column(db.String(20), unique=True, nullable=False)
    title = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(2500), unique=False, nullable=True)
    description = db.Column(db.String(500), unique=False, nullable=False)
    rating = db.Column(db.Float, unique=False, nullable=True)
    date = db.Column(db.Date, unique=False, nullable=False)

    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    location = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    kindofplace = db.Column(db.Integer, db.ForeignKey('kindofplace.id'), nullable=False)
    services = db.relationship('ServicesRelationship', backref='services_place', lazy=True)
    
    

    def __repr__(self):
        return '<NomadVanPlace %r>' % self.title

    # Aquí ponemos lo que se va a mostrar
    def serialize(self):
        return {
            "id": self.id,
            "user": self.user,
            "kind_of_place": self.kind_place.serialize(),
            # "image": "https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg",
            "image": self.image,
            # serialize() nos da toda la info del modelo al que hace referencia
            # .name nos da sólo la info que le ponemos después del punto
            # .id
            "services": [item.nomadvanplace_place.serialize() for item in self.services], #recorremos todos los services de este NomadVanPlace y para cada uno de ellos mostramos el objeto con su información del Servicio
            "title": self.title,
            "description": self.description,
            "location": self.location_place.serialize(),
            "rating": self.rating,
            "date": self.date.strftime("%d/%m/%Y"),

            # do not serialize the password, its a security breach
        }

class ServicesRelationship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    services_id = db.Column(db.Integer, db.ForeignKey('services.id'), nullable=False)
    nomadvanplace_id = db.Column(db.Integer, db.ForeignKey('nomadvanplace.id'), nullable=False)

class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    icon = db.Column(db.String(80), unique=True, nullable=False)
    # nomadvanplace = db.Column(db.Integer, db.ForeignKey('nomadvanplace.id'), nullable=True) #Tenemos que cambiar esto a False
                                                                             #!!!!!!!!!!!!!!!!!!!!!!!!!
    # nomadvanplace = db.relationship('NomadVanPlace', backref='services_place', lazy=True)
    nomadvanplace = db.relationship('ServicesRelationship', backref='nomadvanplace_place', lazy=True)

    def __repr__(self):
        return '<Services %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon,
            # do not serialize the password, its a security breach
        }

class Locations(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float, unique=True, nullable=False)
    lng = db.Column(db.Float, unique=True, nullable=False)

    todos = db.relationship('Todos', backref='locations', lazy=True)
    nomadvanplace = db.relationship('NomadVanPlace', backref='location_place', lazy=True)

    def __repr__(self):
        return '<Locations %r>' % self.id #¿Aquí qué ponemos?

    def serialize(self):
        return {
            "id": self.id,
            "lat": self.lat,
            "lng": self.lng,
            # do not serialize the password, its a security breach
        }

class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #user = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    done = db.Column(db.Boolean, unique=False, nullable=False)
    #location = db.Column(db.String(120), unique=False, nullable=False)

    location = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return '<Services %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.id,
            "name": self.name,
            "done": self.done,
            "location": self.location.id,
            # do not serialize the password, its a security breach
        }