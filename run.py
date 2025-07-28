import os
import sys
from pathlib import Path

# Get the absolute path of the project root directory
BASE_DIR = Path(__file__).resolve().parent

# Add the project root and portfolio app to Python path
portfolio_path = str(BASE_DIR / 'portfolio')
if portfolio_path not in sys.path:
    sys.path.insert(0, portfolio_path)
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

# Set up Django's settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

# Import Django WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

# For Gunicorn
app = application
