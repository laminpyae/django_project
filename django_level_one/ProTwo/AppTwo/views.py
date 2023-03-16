from django.shortcuts import render
from django.http import HttpResponse
# from AppTwo.models import User
from AppTwo.forms import NewUserForm
# Create your views here.

def index(request):
    return render(request, 'second_app/index.html')

def users(request):
    form = NewUserForm()
    print('method>>>', request.method)
    if request.method == 'POST':
        form = NewUserForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('ERROR FORM INVALID!')

    return render(request, 'second_app/users.html', {'form': form})
