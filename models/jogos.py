from database.db import db

class Jogos(db.Model):
    def to_dict(self):
        return {
            'codigo': self.codigo,
            'data': self.data.isoformat() if self.data else None,
        }
    
    codigo = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    data = db.Column(db.DateTime, nullable=False)

    def __init__(self, codigo, data):
        self.codigo = codigo
        self.data = data
