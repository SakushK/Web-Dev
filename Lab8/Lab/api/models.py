from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'id': self.id,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }


class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }
