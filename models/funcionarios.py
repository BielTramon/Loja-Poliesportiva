from database.db import db

class Funcionarios(db.Model):
    def to_dict(self):
        return {
            'nome': self.nome,
            'senha': self.senha
        }
    
    senha = db.Column(db.Integer, primary_key = True, unique= True, nullable = False) 
    nome = db.Column(db.String(100))

    def __init__(self,nome):
        self.nome = nome