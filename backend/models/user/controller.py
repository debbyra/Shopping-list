from flask import jsonify, request, Blueprint
from models.user.user import User
from models.db import db

all_users = Blueprint('users', __name__, url_prefix='/users')

@all_users.route('/')
def users():
    users = User.query.all()
    results = [
        {
            "name":user.name,
            "email":user.email,
            "password":user.password
        }for user in users]
    
    return { "count":len(users), "user":results}

@all_users.route('/create', methods =['POST'])
def new_user():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    if not name:
        return jsonify({'error':"name is required"})
    
    if not email:
        return jsonify({'error':"email is required"})
    
    if len(password) <8:
        return jsonify({"error":'password characters must be more than 8'})
    

    new_user = User(name=name,email=email,password=password)
    db.session.add(new_user)
    db.session.commit({'message':'you have successfully registered user'})