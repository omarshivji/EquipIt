import pytest
import requests
import json

LOGIN_URL = 'http://localhost:8000/login'

def test_get_all_logins():
    response = requests.get(LOGIN_URL)
    assert response.status_code == 200
    

def test_get_login_by_id():
    response = requests.get(LOGIN_URL + '/1')
    assert response.status_code == 200
    

def test_create_login():
    new_login = {
        'username': 'test_user',
        'password': 'test_password'
    }
    response = requests.post(LOGIN_URL, json=new_login)
    assert response.status_code == 200
    

def test_update_login():
    updated_login = {
        'username': 'updated_user',
        'password': 'updated_password'
    }
    response = requests.put(LOGIN_URL + '/1', json=updated_login)
    assert response.status_code == 200
    

def test_delete_login():
    response = requests.delete(LOGIN_URL + '/1')
    assert response.status_code == 200

if __name__ == '__main__':
    pytest.main()
