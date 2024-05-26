from flask import request
from database.db import db
from models.jogos import Jogos
from flask import render_template

def jogosHtmlController():
    if request.method == 'GET':
        return render_template('jogosHTML.html')

def jogosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = Jogos(data['codigo'],data['data'])
            db.session.add(user)
            db.session.commit()
            return 'Jogo foi criado com sucesso',200
        except Exception as e: 
            return 'O jogo nao foi criada. Erro: {}'.format(str(e)),405
    elif request.method == 'GET': 
        try:
            data = Jogos.query.all()
            print([jogo.to_dict() for jogo in data ])
            return render_template('jogos.html', data = {'jogos':[jogo.to_dict() for jogo in data ]})
        except Exception as e:
            return 'O jogo nao foi encontrado. Erro: {}'.format(str(e)),405
    elif request.method == "PUT":
        try:
            data = request.get_json()
            put_jogo_codigo = data["codigo"]
            jogo = Jogos.query.get(put_jogo_codigo)
            if jogo is None:
                return{'Error jogo não encontrado'}, 404
            jogo.codigo = data.get('codigo', jogo.codigo)
            jogo.data = data.get('data', jogo.data)
            db.session.commit()
            return 'vvsd',202
        except Exception as e:
            return 'Não foi possivel atualizar o jogo {}'.format(str(e))
    elif request.method == "DELETE":
        try:
            data = request.get_json()
            delete_jogo_codigo = data["codigo"]
            jogo = Jogos.query.get(delete_jogo_codigo)
            if jogo is None:
                return {'error':'Jogo nao encontrado'}, 404
            db.session.delete(jogo)
            db.session.commit()
            return 'Jogo deletado com sucesso',202
        except Exception as e:
            return 'Não foi possivel deletar o jogo'