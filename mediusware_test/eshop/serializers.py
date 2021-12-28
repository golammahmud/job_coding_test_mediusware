from rest_framework import serializers
from eshop.models import product_variant_price,Product,Product_images,product_variant,Variant


def age_validations(value): 
        if value <=18  or value >=35:
            raise serializers.ValidationError("invalid age")
        

class ProductVariantPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = product_variant_price
        fields = '__all__'
        
class ProductSerializer(serializers.ModelSerializer):
    price=serializers.StringRelatedField(many=True)
    variants=serializers.StringRelatedField(many=True)
    class Meta:
        model = Product
        fields = ['id','title','description','slug','created_at','price','variants']
        # fields = '__all__'
        # include=['productVariantPrice']
        lookup_fields ='slug'
        extra_kwargs ={'url':{'lookup_fields':'slug'}}
    
    
    
    
    
    
    
    # ------------field level validations -------  
    # def validate_age(self, value):
    #     if value <=18 or value>=30 :
    #         raise  serializers.ValidationError("invalid age")
    #     return value
    
     # ------------object level validations -------  
     
    # def validate(self,data):
    #     address=data.get('address')
    #     if address.lower()!='pabna':
    #         raise serializers.ValidationError("address must be pabna")
    #     return data
    

  
    