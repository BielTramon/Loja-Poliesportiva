# from database.db import db #.db porque é o arquivo dentro da pasta database
# from sqlalchemy import ForeignKey
# from sqlalchemy.orm import relationship

# class clientes(db.Model):

#     def to_dict(self):
#         return {
#             'nome': self.nome,
#             'senha': self.senha,
#             'cargos_id': self.cargos_id
#             }  
#     id = db.Column(db.Integer, primary_key = True)
#     nome = db.Column(db.String(100))
#     senha = db.Column(db.String(100))
#     cargos_id = db.Column(ForeignKey('cargos.id'))

#     cargo = relationship('Cargos', backref='clientes')

#     def __init__(self, nome, senha, cargos_id):
#         self.nome = nome
#         self.senha= senha
#         self.cargos_id = cargos_id