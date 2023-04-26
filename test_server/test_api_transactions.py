import pytest
import requests
import json

TRANSACTIONS_URL = 'http://localhost:8000/transactions'

def test_get_all_transactions():
    response = requests.get(TRANSACTIONS_URL)
    assert response.status_code == 200
    

def test_get_transaction_by_id():
    response = requests.get(TRANSACTIONS_URL + '/1')
    assert response.status_code == 200
    

def test_create_transaction():
    new_transaction = {
        'payment_method': 'credit card',
        'payment_amount': 100.99,
        'payment_date': '2023-04-18',
        'payment_status': 'paid',
        'payment_type': 'online',
        'payment_receipt': '12345',
        'order_id': 1,
        'customer_id': 1
    }
    response = requests.post(TRANSACTIONS_URL, json=new_transaction)
    assert response.status_code == 200
    

def test_update_transaction():
    updated_transaction = {
        'payment_method': 'debit card',
        'payment_amount': 50.99,
        'payment_date': '2023-04-17',
        'payment_status': 'paid',
        'payment_type': 'online',
        'payment_receipt': '67890',
        'order_id': 2,
        'customer_id': 2
    }
    response = requests.put(TRANSACTIONS_URL + '/1', json=updated_transaction)
    assert response.status_code == 200
    

def test_delete_transaction():
    response = requests.delete(TRANSACTIONS_URL + '/1')
    assert response.status_code == 200

# Run tests
if __name__ == '__main__':
    pytest.main()
