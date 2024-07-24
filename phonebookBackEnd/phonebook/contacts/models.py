from django.db import models

# Create your models here.
class Contact(models.Model):
    full_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} {self.phone_number}"