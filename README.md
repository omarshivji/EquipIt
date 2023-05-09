# EquipIt

# Installation and Run

Frontend

To install and run the frontend, follow the commands below:

```console
cd frontend
npm install
npm start
```

Backend

To install and run the backend, follow the commands below:

```console
cd backend
npm install
npm start
```

Test server

To install and run the server, follow the commands below:

```console
cd test_server
pip install -r requirements.txt requests pytest pytest-html
pytest
```
These sets of unitests, tests the backend of the project. The expected test results will show as all the tests running and passing. 
```
======================================================================= test session starts ========================================================================
platform darwin -- Python 3.9.7, pytest-6.2.4, py-1.10.0, pluggy-0.13.1 -- /Users/omarshivji/opt/anaconda3/bin/python
metadata: {'Python': '3.9.7', 'Platform': 'macOS-10.16-x86_64-i386-64bit', 'Packages': {'pytest': '6.2.4', 'pluggy': '0.13.1'}, 'Plugins': {'anyio': '2.2.0', 'html': '3.2.0', 'metadata': '2.0.4'}}
rootdir: /Users/omarshivji/EquipIt/EquipIt-1/test_server, configfile: pytest.ini
plugins: anyio-2.2.0, html-3.2.0, metadata-2.0.4
collected 46 items                                                                                                                                                 

test_api_admins.py::test_authenticate_with_valid_credentials PASSED                                                                                          [  2%]
test_api_admins.py::test_authenticate_with_invalid_username PASSED                                                                                           [  4%]
test_api_admins.py::test_authenticate_with_invalid_password PASSED                                                                                           [  6%]
test_api_admins.py::test_get_all_admins PASSED                                                                                                               [  8%]
test_api_admins.py::test_get_admin_by_id PASSED                                                                                                              [ 10%]
test_api_admins.py::test_create_admin PASSED                                                                                                                 [ 13%]
test_api_admins.py::test_update_admin PASSED                                                                                                                 [ 15%]
test_api_admins.py::test_delete_admin PASSED                                                                                                                 [ 17%]
test_api_customers.py::test_get_all_customers PASSED                                                                                                         [ 19%]
test_api_customers.py::test_get_customer_by_id PASSED                                                                                                        [ 21%]
test_api_customers.py::test_create_customer PASSED                                                                                                           [ 23%]
test_api_customers.py::test_update_customer PASSED                                                                                                           [ 26%]
test_api_customers.py::test_delete_customer PASSED                                                                                                           [ 28%]
test_api_drivers.py::test_get_all_drivers PASSED                                                                                                             [ 30%]
test_api_drivers.py::test_get_driver_by_id PASSED                                                                                                            [ 32%]
test_api_drivers.py::test_create_driver PASSED                                                                                                               [ 34%]
test_api_drivers.py::test_update_driver PASSED                                                                                                               [ 36%]
test_api_drivers.py::test_delete_driver PASSED                                                                                                               [ 39%]
test_api_logins.py::test_authenticate_with_valid_credentials PASSED                                                                                          [ 41%]
test_api_logins.py::test_authenticate_with_invalid_username PASSED                                                                                           [ 43%]
test_api_logins.py::test_authenticate_with_invalid_password PASSED                                                                                           [ 45%]
test_api_logins.py::test_get_all_logins PASSED                                                                                                               [ 47%]
test_api_logins.py::test_get_login_by_id PASSED                                                                                                              [ 50%]
test_api_logins.py::test_create_login PASSED                                                                                                                 [ 52%]
test_api_logins.py::test_update_login PASSED                                                                                                                 [ 54%]
test_api_logins.py::test_delete_login PASSED                                                                                                                 [ 56%]
test_api_orders.py::test_get_all_orders PASSED                                                                                                               [ 58%]
test_api_orders.py::test_get_order_by_id PASSED                                                                                                              [ 60%]
test_api_orders.py::test_create_order PASSED                                                                                                                 [ 63%]
test_api_orders.py::test_update_order PASSED                                                                                                                 [ 65%]
test_api_orders.py::test_delete_order PASSED                                                                                                                 [ 67%]
test_api_products.py::test_get_all_products PASSED                                                                                                           [ 69%]
test_api_products.py::test_get_product_by_id PASSED                                                                                                          [ 71%]
test_api_products.py::test_create_product PASSED                                                                                                             [ 73%]
test_api_products.py::test_update_product PASSED                                                                                                             [ 76%]
test_api_products.py::test_delete_product PASSED                                                                                                             [ 78%]
test_api_stores.py::test_get_all_stores PASSED                                                                                                               [ 80%]
test_api_stores.py::test_get_store_by_id PASSED                                                                                                              [ 82%]
test_api_stores.py::test_create_store PASSED                                                                                                                 [ 84%]
test_api_stores.py::test_update_store PASSED                                                                                                                 [ 86%]
test_api_stores.py::test_delete_store PASSED                                                                                                                 [ 89%]
test_api_transactions.py::test_get_all_transactions PASSED                                                                                                   [ 91%]
test_api_transactions.py::test_get_transaction_by_id PASSED                                                                                                  [ 93%]
test_api_transactions.py::test_create_transaction PASSED                                                                                                     [ 95%]
test_api_transactions.py::test_update_transaction PASSED                                                                                                     [ 97%]
test_api_transactions.py::test_delete_transaction PASSED                                                                                                     [100%]

========================================================================= warnings summary =========================================================================
../../../opt/anaconda3/lib/python3.9/site-packages/_pytest/config/__init__.py:1233
  /Users/omarshivji/opt/anaconda3/lib/python3.9/site-packages/_pytest/config/__init__.py:1233: PytestConfigWarning: Unknown config option: norecurseddirs
  
    self._warn_or_fail_if_strict(f"Unknown config option: {key}\n")

-- Docs: https://docs.pytest.org/en/stable/warnings.html
-------------------------------------- generated xml file: /Users/omarshivji/EquipIt/EquipIt-1/test_server/reports/junit.xml ---------------------------------------
--------------------------------- generated html file: file:///Users/omarshivji/EquipIt/EquipIt-1/test_server/reports/reports.html ---------------------------------
================================================================== 46 passed, 1 warning in 2.12s ===================================================================
```




# Video Demonstration 

## Regular user

https://user-images.githubusercontent.com/78180819/236286029-cff53d64-8f49-47a3-8193-d288e8ca9f66.mov

## Customer user

https://user-images.githubusercontent.com/78180819/236286175-7a521351-445e-4257-aa5d-1e8142e924ce.mov

## Admin user

https://user-images.githubusercontent.com/78180819/236286236-db5b1ba1-6765-4b52-b0bb-188f09ab5fad.mov


