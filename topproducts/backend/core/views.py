from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests

@api_view(['POST'])
def get_products(request):
    print(request.POST)
    company = request.data.get("company", 'AMZ')
    category = request.data.get("category", 'Phone')
    no_of_products = request.data.get("no_of_products", 5)
    based_sorting = request.data.get("based_on", '')
    sorting = request.data.get("sorting", '')
    minPrice = request.data.get("min_price", 0)
    maxPrice = request.data.get("max_price", 100000)
    print(minPrice+" "+maxPrice+" "+no_of_products+" "+category+" "+company)
    try:
        token=get_token()
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        content="http://20.244.56.144/products/companies/AMZ/categories/Phone/products?top=10&minPrice=10&maxPrice=10000"
        response = requests.get(f"http://20.244.56.144/products/companies/{company}/categories/{category}/products?top={no_of_products}&minPrice={minPrice}&maxPrice={maxPrice}", headers=headers)
        response.raise_for_status()  
        data=response.json()
        data.sort(key=lambda x: x['rating'], reverse=True)
        return Response(data, status=response.status_code)
    except Exception as e:
        print(e)
        return Response({'message': f"something went wrong in responce {e}"}, status=400)

def get_token():
    print("called the get token")
    payload = {
        "companyName": "goMart",
        "clientID": "1d67321f-24fe-4cfd-b30b-a8638386d617",
        "clientSecret": "cgOaybcaypRnbsoI",
        "ownerName": "vengatesh",
        "ownerEmail": "vengateshk18@gmail.com",
        "rollNo": "721221114045"
    }
    try:
        response = requests.post("http://20.244.56.144/products/auth", json=payload)
        print(response)
        if response.status_code == 201:
            res = response.json()
            
            return res.get("access_token")
        else:
            return "something went wrong in responce"
    except Exception as e:
        return f"something went wrong {e}"
