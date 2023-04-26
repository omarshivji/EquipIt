import json
import requests
import pytest

CUSTOMERS_URL = 'http://localhost:8000/customers'

def test_get_all_customers():
    response = requests.get(CUSTOMERS_URL)
    assert response.status_code == 200
    customers = response.json()
    assert isinstance(customers, list)

def test_get_customer_by_id():
    customers_id = 1
    response = requests.get(f'{CUSTOMERS_URL}/{customers_id}')
    assert response.status_code == 200
    customer = response.json()

def test_create_customer():
    test_customer = {
        'firstName': 'John',
        'lastName': 'Doe',
        'username': 'johndoe',
        'email': 'johndoe@example.com',
        'address': '123 Main St',
        'phone': '555-555-5555',
        'DOB': '1990-01-01',
        'password': 'secret',
        'passwordConfirm': 'secret'
    }
    response = requests.post(CUSTOMERS_URL, json=test_customer)
    assert response.status_code == 200
    customer = response.json()
    assert isinstance(customer, dict)
    assert customer['firstName'] == test_customer['firstName']
    assert customer['lastName'] == test_customer['lastName']
    assert customer['username'] == test_customer['username']
    assert customer['email'] == test_customer['email']
    assert customer['address'] == test_customer['address']
    assert customer['phone'] == test_customer['phone']
    assert customer['DOB'] == test_customer['DOB']
    assert customer['password'] == test_customer['password']
    assert customer['passwordConfirm'] == test_customer['passwordConfirm']

def test_update_customer():
    customer_id = 1
    updated_customer = {
        'firstName': 'Jane',
        'lastName': 'Doe',
        'username': 'janedoe',
        'email': 'janedoe@example.com',
        'address': '456 Oak St',
        'phone': '555-555-1234',
        'DOB': '1995-01-01',
        'password': 'newsecret',
        'passwordConfirm': 'newsecret'
    }
    response = requests.put(
        f'{CUSTOMERS_URL}/{customer_id}', json=updated_customer)
    assert response.status_code == 200
    customer = response.json()
  

def test_delete_customer():
    customer_id = 1
    response = requests.delete(f'{CUSTOMERS_URL}/{customer_id}')
    assert response.status_code == 200
   

# Run tests
if __name__ == '__main__':
    pytest.main()
