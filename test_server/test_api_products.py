import pytest
import requests
import json

PRODUCTS_URL = 'http://localhost:8000/products'

def test_get_all_products():
    response = requests.get(PRODUCTS_URL)
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_get_product_by_id():
    response = requests.get(PRODUCTS_URL + '/1')
    assert response.status_code == 200
    assert response.json()['product_id'] == 1

def test_create_product():
    new_product = {
        'store_idx': 1,
        'name': 'New Product',
        'description': 'This is a new product',
        'price': 10.99,
        'quantity': 100
    }
    response = requests.post(PRODUCTS_URL, json=new_product)
    assert response.status_code == 200
    assert response.json()['name'] == 'New Product'

def test_update_product():
    updated_product = {
        'store_idx': 2,
        'name': 'Updated Product',
        'description': 'This product has been updated',
        'price': 19.99,
        'quantity': 50
    }
    response = requests.put(PRODUCTS_URL + '/1', json=updated_product)
    assert response.status_code == 200
    assert 'updated successfully' in response.text

def test_delete_product():
    response = requests.delete(PRODUCTS_URL + '/1')
    assert response.status_code == 204

  # Run tests
if __name__ == '__main__':
    pytest.main()
