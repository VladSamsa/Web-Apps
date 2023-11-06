from django.db import models

def url(self, filename):
    ruta = "static/img/alumnos/%/%"%(self.nombre, str(filename))
    return ruta  

class Alumno(models.Model):
    nombre = models.CharField(max_length=45, blank=False)
    apellido = models.CharField(max_length=45, blank=False)
    telefono = models.IntegerField(blank=False)
    correo = models.EmailField(blank=False)
    direccion = models.CharField(max_length=100, blank=False)
    foto = models.ImageField(upload_to=url)
    
    def __str__(self):
        return self.nombre 