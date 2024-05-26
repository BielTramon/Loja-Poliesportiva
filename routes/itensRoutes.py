from controllers.itensController import itensController, itensHtmlController

def itens(app):
    app.route('/itensHTML', methods = ['GET'])(itensHtmlController)
    app.route('/itens', methods = ['GET', 'POST', 'PUT', 'DELETE'])(itensController)