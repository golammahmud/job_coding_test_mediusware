from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from  .serializers import  ProductSerializer,product_variant_price_Seriaizer

from rest_framework.permissions import DjangoModelPermissions,DjangoObjectPermissions,DjangoModelPermissionsOrAnonReadOnly,IsAuthenticated
from  rest_framework.authentication import  BasicAuthentication,SessionAuthentication,TokenAuthentication

# from .custompermission import MyPermission

from rest_framework.throttling import UserRateThrottle,AnonRateThrottle

from .throttling import  StudentRateThrottle
# from django_filters.rest_framework import DjangoFilterBackend

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.filters import  SearchFilter,OrderingFilter

from .mypagination import StudentViewPagination,MyLimitOffsetPagination

from .models import product_variant_price,Product,Product_images,product_variant,Variant



# class ProductVariantsViewSet(viewsets.ModelViewSet):
#     queryset = product_variant_price.objects.all()
#     serializer_class=ProductSerializer
#     # authentication_class=[TokenAuthentication]
#     # permission_classes=[IsAuthenticated]
#     # permission_classes=[DjangoModelPermissionsOrAnonReadOnly]
#     throttle_class=[AnonRateThrottle,StudentRateThrottle]
#     # filter_backends=[DjangoFilterBackend]
#     filter_backends=[SearchFilter,OrderingFilter,DjangoFilterBackend]
#     search_fields=['$product_variants','=price','=stock','$created']#http://host/?search=value
#     filterset_fields=['product_variants','price','stock'] #http://host/?fieldname=name&secondfield=name
   
#     pagination_class=MyLimitOffsetPagination
    
#     ordering_fields=['product_variants','price','stock']



class ProductView(viewsets.ModelViewSet):
        queryset = Product.objects.all()
        serializer_class=ProductSerializer
        
      
        
        throttle_class=[AnonRateThrottle,StudentRateThrottle]
        # filter_backends=[DjangoFilterBackend]
        filter_backends=[SearchFilter,OrderingFilter,DjangoFilterBackend]
        search_fields=['$title','=sku','$description','$created_at']#http://host/?search=value
        filterset_fields=['title','created_at'] #http://host/?fieldname=name&secondfield=name
    
        pagination_class=MyLimitOffsetPagination
        
        ordering_fields=['title','created_at']
        
        lookup_field='slug'

