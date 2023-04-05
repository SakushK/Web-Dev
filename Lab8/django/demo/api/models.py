from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }
Footer
© 2023 GitHub, Inc.
