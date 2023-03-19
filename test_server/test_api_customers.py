import requests
import pytest
import json

CUSTOMERS_URL = 'http://localhost:8000/customers'


def test_get_all_customers():
    response = requests.get(CUSTOMERS_URL)
    assert response.status_code == 200
    customers = json.loads(response.text)
    assert isinstance(customers, list)


def test_get_customer_by_id():
    customer_id = 1
    response = requests.get(f'{CUSTOMERS_URL}/{customer_id}')
    print(f'Response status code: {response.status_code}')
    print(f'Response text: {response.text}')
    assert response.status_code == 200
    customer = json.loads(response.text)
    assert isinstance(customer, dict)
    assert customer['customers_id'] == customer_id


def test_create_customer():
    test_customer = {
        'name': 'John Doe',
        'email': 'johndoe@example.com',
        'address': '123 Main St',
        'phone': '555-555-5555',
        'DOB': '1990-01-01',
        'password': 'secret'
    }
    response = requests.post(CUSTOMERS_URL, json=test_customer)
    assert response.status_code == 200
    customer = json.loads(response.text)
    assert isinstance(customer, dict)
    assert customer['name'] == test_customer['name']


def test_update_customer():
    customer_id = 1
    updated_customer = {
        'name': 'Jane Doe',
        'email': 'janedoe@example.com',
        'address': '456 Oak St',
        'phone': '555-555-1234',
        'DOB': '1995-01-01',
        'password': 'newsecret'
    }
    response = requests.put(
        f'{CUSTOMERS_URL}/{customer_id}', json=updated_customer)
    assert response.status_code == 200
    updated_rows = json.loads(response.text)['affectedRows']
    assert updated_rows == 1


def test_delete_customer():
    customer_id = 1
    response = requests.delete(f'{CUSTOMERS_URL}/{customer_id}')
    assert response.status_code == 200
    deleted_rows = json.loads(response.text)['affectedRows']
    assert deleted_rows == 1


# Run tests
if __name__ == '__main__':
    pytest.main()
