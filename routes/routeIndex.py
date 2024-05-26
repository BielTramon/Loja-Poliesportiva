from routes.categoriasRoutes import categorias
from routes.marcasRoutes import marcas
from routes.itensRoutes import itens
from routes.jogosRoutes import jogos
from routes.usuariosRoutes import usuarios

def routeIndex(app):
    categorias(app=app)
    marcas(app=app)
    itens(app=app)
    jogos(app=app)
    usuarios(app=app)

