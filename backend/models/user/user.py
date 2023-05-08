from models.db import db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    password = db.Column(db.String(15))
    email = db.Column(db.String(255))
    
def __init__(self,name,password,email):
    self.name = name
    self.password = password
    self.email = email
