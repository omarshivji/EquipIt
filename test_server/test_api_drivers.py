import pytest
import requests
import json

DRIVERS_URL = 'http://localhost:8000/drivers'

def test_get_all_drivers():
    response = requests.get(DRIVERS_URL)
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_get_driver_by_id():
    response = requests.get(DRIVERS_URL + '/1')
    assert response.status_code == 200
    assert response.json()['name'] == 'John Doe'

def test_create_driver():
    new_driver = {
        'name': 'Jane Doe',
        'email': 'jane@example.com',
        'phone': '555-1234',
        'vehicle_make': 'Toyota',
        'vehicle_model': 'Corolla',
        'vehicle_color': 'Red',
        'DOB': '2000-01-01',
        'password': 'password123'
    }
    response = requests.post(DRIVERS_URL, json=new_driver)
    assert response.status_code == 201
    assert response.text == 'New delivery driver created!'

def test_update_driver():
    updated_driver = {
        'name': 'Jane Doe',
        'email': 'jane@example.com',
        'phone': '555-5678',
        'vehicle_make': 'Toyota',
        'vehicle_model': 'Corolla',
        'vehicle_color': 'Red',
        'DOB': '2000-01-01',
        'password': 'password123'
    }
    response = requests.put(DRIVERS_URL + '/1', json=updated_driver)
    assert response.status_code == 200
    assert response.text == 'Delivery driver updated successfully'

def test_delete_driver():
    response = requests.delete(DRIVERS_URL + '/1')
    assert response.status_code == 200
    assert response.text == 'Delivery driver deleted successfully'

    # Run tests
if __name__ == '__main__':
    pytest.main()
