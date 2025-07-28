import os
import sys

# Add the project directory to the Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
portfolio_dir = os.path.join(current_dir, 'portfolio')
sys.path.insert(0, portfolio_dir)
sys.path.insert(0, current_dir)

def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio.settings")
    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
    return application

app = main()
