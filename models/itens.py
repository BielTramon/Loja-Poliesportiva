from database.db import db #.db porque é o arquivo dentro da pasta database
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Itens(db.Model):

    def to_dict(self):
        return {
            'codigo': self.codigo,
            'nome': self.nome
            }  
    codigo = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    nome = db.Column(db.String(100))
    categoria_codigo = db.Column(ForeignKey('categoria.codigo'))

    categoria = relationship('Categoria', backref='Itens')

    def __init__(self, codigo, nome, categoria_codigo):
        self.codigo = codigo
        self.nome= nome
        self.categoria_codigo = categoria_codigo