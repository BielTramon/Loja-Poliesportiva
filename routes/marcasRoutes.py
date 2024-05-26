from controllers.marcasController import marcasController, marcasHtmlController

def marcas(app):
    app.route('/marcasHTML', methods = ['GET'])(marcasHtmlController)
    app.route('/marcas', methods = ['GET', 'POST', 'PUT', 'DELETE'])(marcasController)