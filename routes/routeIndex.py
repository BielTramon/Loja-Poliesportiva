#mostra que todas as rotas tão aqui

from routes.clientesRoutes import clientes
from routes.homeRoutes import homeRoutes
from routes.cargosRoutes import cargosRoutes

def routeIndex(app):
    clientes(app=app)
    homeRoutes(app=app)
    cargosRoutes(app=app)

