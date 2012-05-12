<?php
require 'constant.php';
error_reporting(E_ALL);
ini_set('display_errors',1);

$form_id = trim($_GET['form_id']);
$number_type = trim($_GET['number_type']);
$col_name= trim($_GET['phone_type']);
$customet_id = trim($_GET['customerId']);
$number = trim($_GET['number']);

$verificationStatus="failed";
try
{
	
if(isset($_POST['VerificationStatus']))
{
	
	$con = mysql_connect(DB_HOST,DB_USERNAME,DB_USER_PASSWORD);
	if (!$con)
	{
	 	 die('Could not connect: ' . mysql_error());
	}
	mysql_select_db(DB_DBNAME,$con);
	
	$verificationStatus = $_POST['VerificationStatus'];
	$bitChanged = 0;
	if(trim($verificationStatus) == 'success')
	{
	$bitChanged = 1;
		
		$sql = "select * from twilio_verified_numbers where numbers = '$number'";
		$res = mysql_query($sql);
		if(mysql_num_rows($res) == 0)
		{
			$insert = "insert into twilio_verified_numbers(numbers) values('$number')";
		
			$res1 = mysql_query($insert);
		}
	}
	$time = time();
	
			
	
	$update_forms_table="update forms set $col_name = '$bitChanged' where id='".$form_id."' and customer_id='".$customet_id."'";
	
	
	
	$res = mysql_query($update_forms_table);
	
	
	
	mysql_close($con);
}
}
	catch (Exception $e)
	{
		mysql_close($con);
	}
	
?>