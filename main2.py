from flask import Flask, render_template, request
from database.db import db
from routes.routeIndex import routeIndex

class Myserver():
    def __init__(self):
        self.app = Flask(__name__)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/lojapoliesportiva'
        db.init_app(self.app)
        routeIndex(self.app)

    def run(self):
        return self.app.run(port = 3000, debug = True, host = 'localhost')

app = Myserver()
app.run()

#controller
#duas rotas