from controllers.categoriasController import categoriasController, categoriasHtmlController

def categorias(app):
    app.route('/categoriasHTML', methods = ['GET'])(categoriasHtmlController)
    app.route('/categoria', methods = ['GET', 'POST', 'PUT', 'DELETE'])(categoriasController)