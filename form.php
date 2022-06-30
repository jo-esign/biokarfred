<?php
// database connection code

// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_form', 3306);

// get the post records
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$email = $_POST['email'];
$department = $_POST['department'];

// database insert SQL code
$sql = "INSERT INTO `appointment_tbl` (`Id`, `firstName`, `lastName`, `phone`, `date`, `email`, `department`) VALUES ('0', '$firstName', '$lastName', '$phone', '$date', '$email', '$department')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
?>