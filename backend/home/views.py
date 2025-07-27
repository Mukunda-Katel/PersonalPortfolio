from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

# Create your views here.

def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('home:home')
    else:
        form = ContactForm()
    
    context = {
        'title': 'Mukunda Jamar Katel - Full-Stack Developer',
        'form': form
    }
    return render(request, 'home/index.html', context)
