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
    assert isinstance(admin, dict)
    assert admin['admin_id'] == admin_id


def test_create_admin():
    test_admin = {
        'username': 'testuser',
        'password': 'testpass'
    }
    response = requests.post(ADMIN_URL, json=test_admin)
    assert response.status_code == 200
    admin = json.loads(response.text)
    assert isinstance(admin, dict)
    assert admin['username'] == test_admin['username']


def test_update_admin():
    admin_id = 1
    updated_admin = {
        'username': 'newuser',
        'password': 'newpass'
    }
    response = requests.put(
        f'{ADMIN_URL}/{admin_id}', json=updated_admin)
    assert response.status_code == 200
    updated_rows = json.loads(response.text)['affectedRows']
    assert updated_rows == 1


def test_delete_admin():
    admin_id = 1
    response = requests.delete(f'{ADMIN_URL}/{admin_id}')
    assert response.status_code == 200
    deleted_rows = json.loads(response.text)['affectedRows']
    assert deleted_rows == 1


# Run tests
if __name__ == '__main__':
    pytest.main()
