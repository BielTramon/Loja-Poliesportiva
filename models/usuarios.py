from database.db import db

class Usuarios(db.Model):
    def to_dict(self):
        return {
            'nome': self.nome,
            'senha': self.senha,
            'email': self.email
        }
    
    senha = db.Column(db.String, primary_key = True, unique= True, nullable = False) 
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100), unique = True, nullable = False)

    def __init__(self,nome, senha, email):
        self.nome = nome
        self.senha = senha
        self.email = email