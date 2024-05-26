from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Itens(db.Model):

    def to_dict(self):
        return {
            'codigo': self.codigo,
            'nome': self.nome,
            'cor': self.cor,
            'preco': self.preco,
            }  
    codigo = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    nome = db.Column(db.String(100))
    categoria_codigo = db.Column(ForeignKey('categoria.codigo'))
    marca_codigo = db.Column(ForeignKey('marca.codigo'))

    categoria = relationship('Categoria', backref='Itens')
    marca = relationship('Marca', backref='Itens')

    def __init__(self, codigo, nome, categoria_codigo, marca_codigo, cor, preco):
        self.codigo = codigo
        self.nome= nome
        self.categoria_codigo = categoria_codigo
        self.marca_codigo = marca_codigo
        self.cor = cor
        self.preco = preco