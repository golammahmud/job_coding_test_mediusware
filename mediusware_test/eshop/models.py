from django.db import models
from django.core.exceptions import ValidationError
import re
import string, random
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from django.urls import reverse



class Product(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=150,null=True,blank=True,unique=True)
    description = models.TextField()
 
    sku = models.CharField(max_length=255,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    def absolute_url(self):
        return reverse ("genericview-detail", kwargs={"id":self.id,"slug":self.slug})
    
def create_slug(instance, new_slug=None):
    slug=slugify(instance.title)
    if new_slug is not None:
        slug=new_slug
    qs=Product.objects.filter(slug=slug).order_by('-id')
    exists=qs.exists()
    if exists:
        new_slug="%s-%s" %(slug,qs.first().id)
        return create_slug(instance,new_slug=new_slug)
    return slug

def pre_save_course_reciver(sender, instance,*args, **kwargs):
    if not instance.slug:
        instance.slug=create_slug(instance)
pre_save.connect(pre_save_course_reciver,sender=Product)
    
    
    
    
    
class Product_images(models.Model):
    product_id = models.ManyToManyField(Product,related_name='product_images')
    file_path=models.ImageField(upload_to='product/images')
    thumbnail=models.ImageField(upload_to='images/')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
   
class Variant(models.Model):
    title = models.CharField(max_length=255,unique=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

class product_variant(models.Model):
    variant=models.CharField(max_length=255)
    variants=models.ForeignKey(Variant, on_delete=models.CASCADE ,related_name='variants')
    products_images=models.ManyToManyField(Product_images,related_name='product_variant')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.variant


class product_variant_price(models.Model):
    product_variants=models.ForeignKey(product_variant,related_name="product_variant", on_delete=models.CASCADE)
    price=models.FloatField(max_length=20)
    stock=models.IntegerField()
    products=models.ForeignKey(Product, on_delete=models.CASCADE)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    
    
    
    

    