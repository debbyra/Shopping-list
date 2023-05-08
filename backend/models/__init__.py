from flask import Flask
from config import config
from models.db import db


def create_app(config_name): #Application Factory Funciton
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.from_pyfile("../config.py")


    db.init_app(app)

# import the blueprints
    from models.user.controller import all_users
    from models.auth.controller import auth 
# register the blueprints
    app.register_blueprint(all_users)
    app.register_blueprint(auth)