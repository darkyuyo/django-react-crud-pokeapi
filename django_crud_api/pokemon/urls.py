from django.urls import path, include
from rest_framework import routers
from pokemon import views


router = routers.DefaultRouter()
router.register(r"pokemon", views.PokemonView, "pokemon")

urlpatterns = [
    path("api/v1/",include(router.urls)),
]
