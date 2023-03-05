<?php

// Database configuration
$hostname = "localhostdatabase-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com"; 
$username = "admin"; 
$password = "equipit123"; 
$database = "equipit"; 

// Establishing a connection with the database
$connection = mysqli_connect($hostname, $username, $password, $database);
if(!$connection){
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieving login details from the customer
$email = $_POST['email'];
$password = $_POST['password'];

// Query to check if the customer exists in the database
$query = "SELECT * FROM customers WHERE email='$email' AND password='$password'";
$result = mysqli_query($connection, $query);

// If a customer with the given email and password exists
if(mysqli_num_rows($result) > 0){
    // Start a session for the logged in customer
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;

    // Redirect the customer to the dashboard page
    header('Location: dashboard.php');
}
else{
    // If the customer doesn't exist in the database
    echo "Invalid email or password!";
}

// Closing the database connection
mysqli_close($connection);

?>
