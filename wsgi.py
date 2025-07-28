import os
import sys
from pathlib import Path

# Get the absolute path of the project root directory
BASE_DIR = Path(__file__).resolve().parent

# Add both the project root and the portfolio app directory to Python path
sys.path.append(str(BASE_DIR))
sys.path.append(str(BASE_DIR / 'portfolio'))

# Set up Django's settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

# Import Django WSGI application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
