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
    #user = db.Column(db.String(120), unique=True, nullable=False)
    #kind_of_place = db.Column(db.String(20), unique=True, nullable=False)
    #location = db.Column(db.String(120), unique=False, nullable=False)
    services = db.Column(db.String(20), unique=True, nullable=False)
    title = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    rating = db.Column(db.Float, unique=False, nullable=True)
    date = db.Column(db.Date, unique=False, nullable=False)

    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    location = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    kindofplace = db.Column(db.Integer, db.ForeignKey('kindofplace.id'), nullable=False)
    services = db.Column(db.Integer, db.ForeignKey('services.id'), nullable=False)


    def __repr__(self):
        return '<NomadVanPlace %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.id,
            # "kind_of_place": self.kind_of_place.id,
            "services": self.services.id,
            "title": self.title,
            "description": self.description,
            "location": self.location.id,
            "rating": self.rating,
            "date": self.date,

            # do not serialize the password, its a security breach
        }



class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    icon = db.Column(db.String(80), unique=True, nullable=False)

    nomadvanplace = db.relationship('NomadVanPlace', backref='services_place', lazy=True)

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

    location = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
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