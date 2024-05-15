from database.db import db

class Jogos(db.Model):
    def to_dict(self):
        return {
            'codigo': self.codigo,
            'data': self.data,
        }
    
    codigo = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    data = db.Column(db.DateTime(dt_format='iso8601'))

    def __init__(self,codigo, data):
        self.codigo = codigo
        self.data = data