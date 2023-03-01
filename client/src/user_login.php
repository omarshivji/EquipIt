<?php
// Replace these with your actual MySQL credentials
$servername = "localhostdatabase-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com";
$name = "customers/name";
$email = "customers/email";
$password = "customers/password";
$phone = "customers/phone";
$dbname = "equipit";

// Create connection
$conn = new mysqli($servername, $name, $email, $password, $phone, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the INSERT statement
$stmt = $conn->prepare("INSERT INTO customers (name, email, password, phone) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email, $password, $phone);

// Retrieve the email and password values from the POST request
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];
$phone = $_POST["phone"];

// Execute the INSERT statement and return a JSON response
if ($stmt->execute() === TRUE) {
  $response = array("success" => true);
} else {
  $response = array("success" => false);
}
echo json_encode($response);

// Close the prepared statement and database connection
$stmt->close();
$conn->close();
?>
