from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PokemonSerializer
from .models import Pokemon

# Create your views here.
class PokemonView(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
