from rest_framework import serializers
from eshop.models import product_variant_price,Product,Product_images,product_variant,Variant


class ProductVariantsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = '__all__'
        lookup_fields ='slug'
        extra_kwargs ={'url':{'lookup_fields':'slug'}}

class product_variant_price_Seriaizer(serializers.ModelSerializer):
    product_variants=serializers.StringRelatedField(many=False)
    products=serializers.StringRelatedField(many=False)
    class Meta:
        model = product_variant_price
        # fields = '__all__'
        fields = ('id','product_variants','price','stock','products','created','updated')
        # include=["product_variant","products"]
        
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    
    products=product_variant_price_Seriaizer(many=True , read_only=True)
    class Meta:
        model = Product
        fields = ['id','title','description','slug','created_at','products']
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
    

  
    