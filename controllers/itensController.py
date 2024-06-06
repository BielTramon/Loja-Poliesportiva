from flask import request
from database.db import db
from models.itens import Itens
from flask import render_template

def itensHtmlController():
    if request.method == 'GET':
        return render_template('itensHTML.html')

def itensController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = Itens(data['codigo'], data['nome'], data['categoria_codigo'], data['marca_codigo'], data['tamanho'], data['cor'], data['preco'])
            db.session.add(user)
            db.session.commit()
            return 'Item criado com sucesso',200
        except Exception as e: 
            return 'O item nao foi criado. Erro: {}'.format(str(e)),405
    elif request.method == 'GET': 
        try:
            data = Itens.query.all()
            print([item.to_dict() for item in data ])
            teste = {'itens':[item.to_dict() for item in data ]}
            teste, 200
            return render_template('itens.html', data = {'itens':[item.to_dict() for item in data ]})
        except Exception as e:
            return 'O item nao foi encontrado. Erro: {}'.format(str(e)),405
    elif request.method == "PUT":
        try:
            data = request.get_json()
            put_item_codigo = data["codigo"]
            item = Itens.query.get(put_item_codigo)
            if item is None:
                return{'Error item não encontrado'}, 404
            item.codigo = data.get('codigo', item.codigo)
            item.nome = data.get('nome', item.nome)
            item.categoria = data.get('cod_categoria', item.catergoria)
            item.marca = data.get('cod_marca', item.marca)
            item.tamango = data.get('tamanho', item.tamanho)
            item.cor = data.get('cor', item.cor)
            item.preco = data.get('preco', item.preco)
            db.session.commit()
            return 'vvsd',202
        except Exception as e:
            return 'Não foi possivel atualizar o item {}'.format(str(e))
    elif request.method == "DELETE":
        try:
            data = request.get_json()
            delete_item_codigo = data["id"]
            item = Itens.query.get(delete_item_codigo)
            if item is None:
                return {'error':'Item nao encontrado'}, 404
            db.session.delete(item)
            db.session.commit()
            return 'cliente deletado com sucesso',202
        except Exception as e:
            return 'Não foi possivel deletar o item'