from django.contrib import admin
from eshop.models import Product, Product_images, product_variant, product_variant_price,Variant

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

@admin.register(Product_images)
class ProductImageAdmin(admin.ModelAdmin):
    pass

@admin.register(product_variant)
class Product_variantAdmin(admin.ModelAdmin):
    pass
@admin.register(product_variant_price)
class product_variant_priceAdmin(admin.ModelAdmin):
    pass

@admin.register(Variant)
class variantAdmin(admin.ModelAdmin):
    pass
