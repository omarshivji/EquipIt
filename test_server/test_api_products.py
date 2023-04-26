import pytest
import requests
import json

PRODUCTS_URL = 'http://localhost:8000/products'

def test_get_all_products():
    response = requests.get(PRODUCTS_URL)
    assert response.status_code == 200
    

def test_get_product_by_id():
    response = requests.get(PRODUCTS_URL + '/1')
    assert response.status_code == 200
    

def test_create_product():
    new_product = {
        'store_name': 'Test Store',
        'name': 'New Product',
        'description': 'This is a new product',
        'price': 10.99,
        'quantity': 100,
        'product_image': 'https://example.com/product_image.jpg'
    }
    response = requests.post(PRODUCTS_URL, json=new_product)
    assert response.status_code == 200
    

def test_update_product():
    updated_product = {
        'store_name': 'Test Store',
        'name': 'Updated Product',
        'description': 'This product has been updated',
        'price': 19.99,
        'quantity': 50,
        'product_image': 'https://example.com/updated_product_image.jpg'
    }
    response = requests.put(PRODUCTS_URL + '/1', json=updated_product)
    assert response.status_code == 200
    

def test_delete_product():
    response = requests.delete(PRODUCTS_URL + '/1')
    assert response.status_code == 200

# Run tests
if __name__ == '__main__':
    pytest.main()
