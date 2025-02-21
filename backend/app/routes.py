from flask import render_template, jsonify, request

# from app.utils.nombre_del_modulo import *

def register_routes(app):
    """Registrar todas las rutas en la aplicación Flask."""

    @app.route("/")
    def home():
        return "Hola desde Flask Backend"

    @app.route("/api/test", methods=["GET"])
    def test_api():
        # Ruta de ejemplo que retorna JSON
        return jsonify({"message": "Hola desde el backend Flask!"})