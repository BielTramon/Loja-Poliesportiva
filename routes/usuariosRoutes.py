from controllers.usuariosController import usuariosController, usuariosHtmlController

def usuarios(app):
    app.route('/usuariosHTML', methods = ['GET'])(usuariosHtmlController)
    app.route('/usuarios', methods = ['GET', 'POST', 'PUT', 'DELETE'])(usuariosController)