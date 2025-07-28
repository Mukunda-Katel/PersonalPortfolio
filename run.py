import os
import sys

def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio.portfolio.settings")
    from django.core.wsgi import get_wsgi_application
    return get_wsgi_application()

if __name__ == "__main__":
    app = main()
