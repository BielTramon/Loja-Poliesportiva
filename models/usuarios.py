from database.db import db

class Usuarios(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'senha': self.senha,
            'role': self.role,
        }
    
    senha = db.Column(db.String, primary_key = True, unique= True, nullable = False) 
    nome = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), unique = True, nullable = False)

    def __init__(self,id, nome, email, senha, role):
        self.id = id
        self.nome = nome
        self.email = email
        self.senha = senha
        self.role = role