from flask import request
from database.db import db
from models.usuarios import Usuarios
from flask import render_template

def usuariosHtmlController():
    if request.method == 'GET':
        return render_template('usuariosHTML.html')

def usuariosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            print(data)
            user = Usuarios(data['nome'], data['email'], data['senha'], data['role'])
            print(user.to_dict())
            db.session.add(user)
            db.session.commit()
            return 'Usuario criado com sucesso',200
        except Exception as e: 
            return 'O usuario nao foi criado. Erro: {}'.format(str(e)),405
    elif request.method == 'GET': 
        try:
            role = request.args.get('role')
            if role:
                data = Usuarios.query.filter(Usuarios.role == role).all()
                usuarios = {'usuarios':[usuario.to_dict() for usuario in data ]}
                return usuarios, 200
            else:
            
                data = Usuarios.query.all()
                print([role.to_dict() for role in data ])
                teste = {'usuarios':[role.to_dict() for role in data ]}
                return teste, 200
                return render_template('usuarios.html', data = {'usuarios':[usuario.to_dict() for usuario in data ]})
        except Exception as e:
                return 'O usuario nao foi encontrado. Erro: {}'.format(str(e)),405
    elif request.method == "PUT":
        try:
            data = request.get_json()
            put_usuario_id = data["id"]
            usuario = Usuarios.query.get(put_usuario_id)
            if usuario is None:
                return{'Error usuário não encontrado'}, 404
            usuario.nome = data.get('nome', usuario.nome)
            usuario.email = data.get('email', usuario.email)
            usuario.senha = data.get('senha', usuario.senha)
            db.session.commit()
            return 'vvsd',202
        except Exception as e:
            return 'Não foi possivel atualizar o usuário {}'.format(str(e))
    elif request.method == "DELETE":
        try:
            codigo = request.args.to_dict().get('codigo')
            
            data = Usuarios.query.filter(Usuarios.codigo == codigo).all()
            
            if not data:
                return{'error': 'Funcionário não encontrado.'}, 405
            
            usuario = data[0]
            
            db.session.delete(usuario)
            db.session.commit()
            return 'Usuário deletado com sucesso',202
        except Exception as e:
            return f'Não foi possivel deletar o ususario. Erro: {str(e)}', 500