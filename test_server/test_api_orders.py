import pytest
import requests
import json

ORDERS_URL = 'http://localhost:8000/orders'

def test_get_all_orders():
    response = requests.get(ORDERS_URL)
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_get_order_by_id():
    response = requests.get(ORDERS_URL + '/1')
    assert response.status_code == 200
    assert response.json()['order_id'] == 1

def test_create_order():
    new_order = {
        'customer_id': 1,
        'driver_id': 1,
        'pickup_location': '123 Main St',
        'delivery_location': '456 Elm St',
        'pickup_time': '2023-03-16 10:00:00',
        'delivery_time': '2023-03-16 12:00:00',
        'status': 'pending',
        'items': 'Item 1, Item 2, Item 3'
    }
    response = requests.post(ORDERS_URL, json=new_order)
    assert response.status_code == 200
    assert response.json()['affectedRows'] == 1

def test_update_order():
    updated_order = {
        'pickup_location': '789 Oak St',
        'delivery_location': '456 Elm St',
        'pickup_time': '2023-03-17 10:00:00',
        'delivery_time': '2023-03-17 12:00:00',
        'status': 'in_progress',
        'items': 'Item 1, Item 2, Item 3'
    }
    response = requests.put(ORDERS_URL + '/1', json=updated_order)
    assert response.status_code == 200
    assert response.json()['affectedRows'] == 1

def test_delete_order():
    response = requests.delete(ORDERS_URL + '/1')
    assert response.status_code == 200
    assert response.json()['affectedRows'] == 1

    # Run tests
if __name__ == '__main__':
    pytest.main()
