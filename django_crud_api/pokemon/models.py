from django.db import models

# Create your models here.
class Pokemon(models.Model):
    nombre=models.CharField(max_length=50)
    numero=models.IntegerField()
    tipo1=models.CharField(max_length=50)
    tipo2=models.CharField(max_length=50,blank=True)
    
    def __str__(self):
        return self.nombre
    

    