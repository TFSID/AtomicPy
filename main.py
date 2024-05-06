from frontend.services.flask.main import main as frontend
from waitress import serve
if __name__ == '__main__':
    frontend()