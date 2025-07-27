from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'terminal-input',
                'placeholder': 'Enter your handle...',
                'autocomplete': 'off'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'terminal-input',
                'placeholder': 'Enter your email address...',
                'autocomplete': 'off'
            }),
            'subject': forms.TextInput(attrs={
                'class': 'terminal-input',
                'placeholder': 'Enter message subject...',
                'autocomplete': 'off'
            }),
            'message': forms.Textarea(attrs={
                'class': 'terminal-textarea',
                'rows': 5,
                'placeholder': 'Type your message here...',
                'autocomplete': 'off'
            }),
        } 