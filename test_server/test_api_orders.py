import requests
import pytest
import json

ORDERS_URL = 'http://localhost:8000/orders'


def test_get_all_orders():
    response = requests.get(ORDERS_URL)
    assert response.status_code == 200
    orders = json.loads(response.text)
    assert isinstance(orders, list)


def test_get_order_by_id():
    order_id = 1
    response = requests.get(f'{ORDERS_URL}/{order_id}')
    assert response.status_code == 200
    order = json.loads(response.text)
    assert isinstance(order, dict)
    assert order['order_id'] == order_id


def test_create_order():
    test_order = {
        'customer_firstname': 'John',
        'customer_lastname': 'Doe',
        'customer_email': 'johndoe@example.com',
        'customer_address': '123 Main St',
        'store_name': 'Acme Co.',
        'product_id': '12345',
        'product_name': 'Widget',
        'quantity': 2,
        'price': 100
    }
    response = requests.post(ORDERS_URL, json=test_order)
    assert response.status_code == 200
    order = json.loads(response.text)
    assert isinstance(order, dict)
    assert order['customer_firstname'] == test_order['customer_firstname']


def test_update_order():
    order_id = 1
    updated_order = {
        'customer_firstname': 'Jane',
        'customer_lastname': 'Doe',
        'customer_email': 'janedoe@example.com',
        'customer_address': '456 Elm St',
        'store_name': 'Acme Co.',
        'product_id': '54321',
        'product_name': 'Gizmo',
        'quantity': 3,
        'price': 150
    }
    response = requests.put(
        f'{ORDERS_URL}/{order_id}', json=updated_order)
    assert response.status_code == 200
    updated_rows = json.loads(response.text)['affectedRows']
    assert updated_rows == 1


def test_delete_order():
    order_id = 1
    response = requests.delete(f'{ORDERS_URL}/{order_id}')
    assert response.status_code == 200
    deleted_rows = json.loads(response.text)['affectedRows']
    assert deleted_rows == 1


# Run tests
if __name__ == '__main__':
    pytest.main()
