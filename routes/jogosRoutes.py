from controllers.jogosController import jogosController, jogosHtmlController

def jogos(app):
    app.route('/jogosHTML', methods = ['GET'])(jogosHtmlController)
    app.route('/jogos', methods = ['GET', 'POST', 'PUT', 'DELETE'])(jogosController)