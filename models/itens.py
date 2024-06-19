from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Itens(db.Model):
    

    codigo = db.Column(db.Integer, primary_key = True)
    nome = db.Column(db.String(100), nullable = False)
    codcategoria = db.Column(db.Integer, ForeignKey('categoria.codigo'), nullable=False)
    codmarca = db.Column(db.Integer, ForeignKey('marca.codigo'), nullable = False)
    cor = db.Column(db.String(100), nullable = False)
    preco = db.Column(db.Integer, nullable = False)

    categoria = relationship('Categoria', backref='itens')
    marca = relationship('Marca', backref='itens')


    def to_dict(self):
        return {
            'codigo': self.codigo,
            'nome': self.nome,
            'codcategoria': self.codcategoria,
            'codmarca': self.codmarca,
            'cor': self.cor,
            'preco': self.preco,
            }

    def __init__(self, nome, codcategoria, codmarca, cor, preco):
        self.nome= nome
        self.codcategoria = codcategoria
        self.codmarca = codmarca
        self.cor = cor
        self.preco = preco