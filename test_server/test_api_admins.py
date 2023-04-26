import requests
import pytest
import json

ADMIN_URL = 'http://localhost:8000/admins'


def test_get_all_admins():
    response = requests.get(ADMIN_URL)
    assert response.status_code == 200
    admins = json.loads(response.text)
    assert isinstance(admins, list)


def test_get_admin_by_id():
    admin_id = 1
    response = requests.get(f'{ADMIN_URL}/{admin_id}')
    assert response.status_code == 200
    admin = json.loads(response.text)
   


def test_create_admin():
    test_admin = {
        'username': 'testuser',
        'password': 'testpass',
        'email': 'testuser@example.com',
        'store_id': 1,
        'product_id': 1,
    }
    response = requests.post(ADMIN_URL, json=test_admin)
    assert response.status_code == 201  # Created
    admin = json.loads(response.text)
   


def test_update_admin():
    admin_id = 1
    updated_admin = {
        'username': 'newuser',
        'password': 'newpass',
        'email': 'newuser@example.com',
        'store_id': 2,
        'product_id': 2,
    }
    response = requests.put(
        f'{ADMIN_URL}/{admin_id}', json=updated_admin)
    assert response.status_code == 200
    admin = json.loads(response.text)
   


def test_delete_admin():
    admin_id = 1
    response = requests.delete(f'{ADMIN_URL}/{admin_id}')
    assert response.status_code == 204  # No Content
    # Check that the admin was actually deleted
    response = requests.get(f'{ADMIN_URL}/{admin_id}')
    assert response.status_code == 404


# Run tests
if __name__ == '__main__':
    pytest.main()
