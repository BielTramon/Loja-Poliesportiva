from database.db import db

class Usuarios(db.Model):
    def to_dict(self):
        return {
            'codigo': self.codigo,
            'nome': self.nome,
            'email': self.email,
            'senha': self.senha,
            'role': self.role,
        }
    
    codigo = db.Column(db.Integer, primary_key = True)
    senha = db.Column(db.String(100), nullable = False) 
    nome = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), unique = True, nullable = False)
    role = db.Column(db.String(100), nullable = False)

    def __init__(self,nome, email, senha, role):
        self.nome = nome
        self.email = email
        self.senha = senha
        self.role = role