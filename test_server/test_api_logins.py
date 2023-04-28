import pytest
import requests
import json

LOGIN_URL = 'http://localhost:8000/login'
AUTHCUST_URL = 'http://localhost:8000/login/authenticate'

def test_authenticate_with_valid_credentials():
    # create a test admin user for authentication
    login = {'username': 'test_user', 'password': 'test_password'}
    # make a POST request to the authentication endpoint with the test admin's credentials
    response = requests.post(AUTHCUST_URL, json=login)
    assert response.status_code == 200
    assert response.text == 'Login successful!'

def test_authenticate_with_invalid_username():
    # create a test admin user for authentication
    login = {'username': 'invalid_user', 'password': 'test_password'}
    # make a POST request to the authentication endpoint with the test admin's credentials
    response = requests.post(AUTHCUST_URL, json=login)
    assert response.status_code == 401

def test_authenticate_with_invalid_password():
    # create a test admin user for authentication
    login = {'username': 'test_user', 'password': 'invalid_password'}
    # make a POST request to the authentication endpoint with the test admin's credentials
    response = requests.post(AUTHCUST_URL, json=login)
    assert response.status_code == 401

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
