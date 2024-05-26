from flask import request
from database.db import db
from models.marca import Marca
from flask import render_template

def marcasHtmlController():
    if request.method == 'GET':
        return render_template('marcasHTML.html')

def marcasController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = Marca(data['codigo'],data['nome'])
            db.session.add(user)
            db.session.commit()
            return 'Marca criada com sucesso',200
        except Exception as e: 
            return 'A marca nao foi criada. Erro: {}'.format(str(e)),405
    elif request.method == 'GET': 
        try:
            data = Marca.query.all()
            print([marca.to_dict() for marca in data ])
            return render_template('marcas.html', data = {'marcas':[marca.to_dict() for marca in data ]})
        except Exception as e:
            return 'A marca nao foi encontrada. Erro: {}'.format(str(e)),405
    elif request.method == "PUT":
        try:
            data = request.get_json()
            put_marca_codigo = data["codigo"]
            marca = Marca.query.get(put_marca_codigo)
            if marca is None:
                return{'Error marca não encontrada'}, 404
            marca.codigo = data.get('codigo', marca.codigo)
            marca.nome = data.get('nome', marca.nome)
            db.session.commit()
            return 'vvsd',202
        except Exception as e:
            return 'Não foi possivel atualizar a marca {}'.format(str(e))
    elif request.method == "DELETE":
        try:
            data = request.get_json()
            delete_marca_codigo = data["codigo"]
            marca = Marca.query.get(delete_marca_codigo)
            if marca is None:
                return {'error':'Marca nao encontrada'}, 404
            db.session.delete(marca)
            db.session.commit()
            return 'Marca deletada com sucesso',202
        except Exception as e:
            return 'Não foi possivel deletar a marca'