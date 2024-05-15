from database.db import db #.db porque é o arquivo dentro da pasta database

class home(db.Model):

    def to_dict(self):
        return {
            'nome': self.nome,
            'senha': self.senha
        }  
    id = db.Column(db.Integer, primary_key = True)
    nome = db.Column(db.String(100))
    senha = db.Column(db.String(100))

    def __init__(self, nome, senha):
        self.nome = nome
        self.senha= senha