#apenas rotas do cliente
from controllers.ClientesController import clientesController, clientesHtmlController

def clientes(app):
    app.route('/clientesHTML', methods = ['GET'])(clientesHtmlController)
    app.route('/clientes', methods = ['GET', 'POST', 'PUT', 'DELETE'])(clientesController)