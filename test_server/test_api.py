import requests
import pytest

BASE_URL = 'http://localhost:8000'
CUSTOMERS_URL = BASE_URL + '/customers'

# Define test data
test_customer = {'customer_name': 'John Smith', 'customer_address': '123 Main St', 'customer_phone': '555-1234'}
updated_customer = {'customer_name': 'Jane Doe', 'customer_address': '456 Elm St', 'customer_phone': '555-5678'}

# Define test cases
def test_get_all_customers():
    response = requests.get(CUSTOMERS_URL)
    assert response.status_code == 200

def test_add_customer():
    response = requests.post(CUSTOMERS_URL, json=test_customer)
    assert response.status_code == 200
    assert response.text == 'Customer added to database!'

def test_get_customer_by_id():
    response = requests.get(CUSTOMERS_URL + '/1')
    assert response.status_code == 200
    assert response.json()[0]['customer_name'] == 'John Smith'

def test_update_customer():
    response = requests.put(CUSTOMERS_URL + '/1', json=updated_customer)
    assert response.status_code == 200
    assert response.text == 'Customer updated in database!'

def test_delete_customer():
    response = requests.delete(CUSTOMERS_URL + '/1')
    assert response.status_code == 200
    assert response.text == 'Customer deleted from database!'

def test_customer_not_found():
    response = requests.get(CUSTOMERS_URL + '/999')
    assert response.status_code == 404
    assert response.text == 'Customer not found'

# Run tests
if __name__ == '__main__':
    pytest.main()
