from controllers.HomeController import HomeController

def homeRoutes(app):
    app.route('/')(HomeController)