from flask import request, jsonify
from database.db import db
from models.itens import Itens
from models.categoria import Categoria
from models.marca import Marca
from flask import render_template

def itensHtmlController():
    if request.method == 'GET':
        return render_template('itensHTML.html')

def itensController():
    if request.method == 'POST':
        try:
            data = request.get_json()

            # Check if category and brand codes exist (assuming you have retrieval functions)
            categoria_exists = db.session.query(Categoria).filter_by(codigo=data['codcategoria']).first()
            marca_exists = db.session.query(Marca).filter_by(codigo=data['codmarca']).first()
            if categoria_exists and marca_exists:
                user = Itens(data['nome'], data['codcategoria'], data['codmarca'], data['cor'], data['preco'])
                db.session.add(user)
                db.session.commit()
                print(user.to_dict())
                return 'Item criado com sucesso', 200
            else:
                error = Exception
                return {'Item not created. Category or brand code does not exist. Erro: {}'.format(error)}, 400  # Adjust status code as needed

        except Exception as e:
            return 'O item nao foi criado. Erro: {}'.format(str(e)), 405
    elif request.method == 'GET': 
        try:
            codcategoria = request.args.to_dict().get('codcategoria')
            if codcategoria:
                data = Itens.query.filter(Itens.codcategoria == codcategoria).all()
                itens = [item.to_dict() for item in data ]
                return {"itens": itens}, 200

            data = Itens.query.all()
            print([item.to_dict() for item in data ])
            teste = {'itens':[item.to_dict() for item in data ]}
            return teste, 200
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
            data = request.args.to_dict().get('codigo')#pega todos os dados do Bruno
            print(data)
            item = Itens.query.get(data) # vai procurar usuarios NO BANCO com esse id

            if item is None:
                return{'error': 'Item não encontrado.'}, 405
            
            db.session.delete(item)
            db.session.commit()
            return "Item deletado com sucesso.", 202

        except Exception as e:
            return 'Não foi possivel deletar o item.'