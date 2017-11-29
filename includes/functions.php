<?php
	
	// these are variables (just like javascript variables)
	$user = "root"; //user name
	$pass = ""; //user password
	$host = "localhost"; // host we're using (apache inside of WAMP)
	$db = "a3_cooperinfo"; //database we're connecting to


//1.create a connection to the database
$con = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($con, 'utf8');


//2.test the connection
//! test for conenction
if (!$con) {
	echo 'Something broke, your connection will not work';
	exit;
}

//if succesfull this will echo it back, and we will see the message
// echo 'Connected!';

$myQuery = "SELECT * FROM mainmodel"; //this is a SQL query
$result = mysqli_query($con, $myQuery); //result holds the result set
$rows = array(); //we'll push each row into an array

// while ($row = mysqli_fetch_assoc($result)) {
// 	$rows[] = $rows; //push each row from the result into this array
// }

//let's see what we get
//var_dump displays the variable that you put inside of it (literally dumps the information out?)
// var_dump($rows);

if (isset($_GET['carModel'])) {
	$car = $_GET['carModel'];
	$myQuery = "SELECT * FROM mainmodel WHERE model = '$car'"; //this is a SQL query
	$result = mysqli_query($con, $myQuery); //result holds the result set

	$row = mysqli_fetch_assoc($result);

	// var_dump($row);
	echo json_encode($row);
}

?>