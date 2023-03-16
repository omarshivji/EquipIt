import pytest
import requests
import json

# Change the URL as needed
base_url = 'http://localhost:8000'

# Test getAllStores
def test_get_all_stores():
    response = requests.get(f'{base_url}/stores')
    assert response.status_code == 200

# Test getStoreById
def test_get_store_by_id():
    response = requests.get(f'{base_url}/stores/1')
    assert response.status_code == 200

# Test createStore
def test_create_store():
    data = {
        'store_id': 3,
        'name': 'New Store',
        'location': 'New Location',
        'admin_id': 1
    }
    response = requests.post(f'{base_url}/stores', json=data)
    assert response.status_code == 200

# Test updateStore
def test_update_store():
    data = {
        'name': 'Updated Store Name'
    }
    response = requests.put(f'{base_url}/stores/1', json=data)
    assert response.status_code == 200

# Test deleteStore
def test_delete_store():
    response = requests.delete(f'{base_url}/stores/3')
    assert response.status_code == 204


  # Run tests
if __name__ == '__main__':
    pytest.main()
