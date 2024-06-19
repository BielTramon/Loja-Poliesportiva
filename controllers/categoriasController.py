from flask import request
from database.db import db
from models.categoria import Categoria
from flask import render_template

def categoriasHtmlController():
    if request.method == 'GET':
        return render_template('categoriasHTML.html')

def categoriasController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = Categoria(data['nome'])
            db.session.add(user)
            db.session.commit()
            return 'Categoria criada com sucesso',200
        except Exception as e: 
            return 'A categoria nao foi criada. Erro: {}'.format(str(e)),405
    elif request.method == 'GET': 
        try:
            data = Categoria.query.all()
            print([categoria.to_dict() for categoria in data ])
            teste = {'categorias':[categoria.to_dict() for categoria in data ]}
            return teste, 200
            return render_template('categorias.html', data = {'categorias':[categoria.to_dict() for categoria in data ]})
        except Exception as e:
            return 'A categoria nao foi encontrada. Erro: {}'.format(str(e)),405
    elif request.method == "PUT":
        try:
            data = request.get_json()
            put_categoria_codigo = data["codigo"]
            categoria = Categoria.query.get(put_categoria_codigo)
            if categoria is None:
                return{'Error categoria não encontrada'}, 404
            categoria.codigo = data.get('codigo', categoria.codigo)
            categoria.nome = data.get('nome', categoria.nome)
            db.session.commit()
            return 'vvsd',202
        except Exception as e:
            return 'Não foi possivel atualizar a categoria {}'.format(str(e))
    elif request.method == "DELETE":
        try:
            data = request.args.to_dict().get('codigo')#pega todos os dados do Bruno
            print(data)
            categoria = Categoria.query.get(data) # vai procurar usuarios NO BANCO com esse id

            if categoria is None:
                return{'error': 'Item não encontrado.'}, 405
            
            db.session.delete(categoria)
            db.session.commit()
            return "Categoria deletada com sucesso.", 202

        except Exception as e:
            return 'Não foi possivel deletar a categoria.'