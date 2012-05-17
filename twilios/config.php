<?php
//For db config ORIGINAL
//$link = mysql_connect('db373925045.db.1and1.com', 'dbo373925045', 'formsative#123');
//if (!$link) {
//    die('Could not connect: ' . mysql_error());
//}
//$db = mysql_select_db('db373925045', $link); //


// INFORMATIX
//$link = mysql_connect('mysql.informatixbd.com', 'infrmtx', '1nfrmtx');
//if (!$link) {
//    die('Could not connect: ' . mysql_error());
//}
//$db = mysql_select_db('formactive', $link); //


//DEV CONFIG
$link = mysql_connect('db1.formactivate.com', 'formappuse', 'N01hOIAH13h4A');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
$db = mysql_select_db('formactapp', $link); //


$host      = $_SERVER['HTTP_HOST'];
$subDomain = substr($host, 0, strpos($host, '.'));

define("WEBSITE_URL","http://{$subDomain}.formactivate.com/");
define("WEBSITE_NAME","FormActivate");
define("ADMIN_EMAIL","info@formactivate.com");
define("SITE_SUPPORT_EMAIL","no-reply@formactivate.com");
define("WEBSITE_IMG_URL",WEBSITE_URL."images/");
define("WEBROOT_PATH","/var/www/html/formactivate/dev/");

?>
