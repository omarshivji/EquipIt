import pytest
import requests
import json


STORE_URL = 'http://localhost:8000/stores'

# Test getAllStores
def test_get_all_stores():
    response = requests.get(STORE_URL)
    assert response.status_code == 200
    stores = json.loads(response.text)
    assert isinstance(stores, list)

# Test getStoreById
def test_get_store_by_id():
    store_id = 1
    response = requests.get(f'{STORE_URL}/{store_id}')
    assert response.status_code == 200
    store = json.loads(response.text)

# Test createStore
def test_create_store():
    test_store = {
        'name': 'New Store',
        'location': 'New Location',
        'admin_id': 1
    }
    response = requests.post(STORE_URL, json=test_store)
    assert response.status_code == 200
    store = json.loads(response.text)

# Test updateStore
def test_update_store():
    store_id = 6
    updated_store = {
        'name': 'Game',
        'location': 'Bluewater, Dartford',
        'admin_id': 1
    }
    response = requests.put(
        f'{STORE_URL}/{store_id}', json=updated_store)
    assert response.status_code == 200
    store = json.loads(response.text)

# Test deleteStore
def test_delete_store():
    response = requests.delete(STORE_URL + '/1')
    assert response.status_code == 200


  # Run tests
if __name__ == '__main__':
    pytest.main()
