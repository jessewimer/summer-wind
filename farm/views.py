from django.shortcuts import render

def home(request):
    """Render the home page for Summer Wind Farm"""
    return render(request, 'farm/home.html')