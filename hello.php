<?php
if(!empty($_REQUEST['data']))
{
	$data=base64_decode($_REQUEST['data']);
	$data_array=array();
	$data_array=explode('@#@#@@#',$data);
	$user_data=$data_array[0];
	$user_phone=$data_array[1];
	$user_phone_words = chunk_split($user_phone,1," ");	
}


$tmp = explode(".",$user_data);
$datax = "";

foreach($tmp as $str)
    $datax .= "<Say voice='woman'>$str</Say><Pause length='0.5'/>";

header("content-type: text/xml");
?>
<Response><Gather numDigits="1" action="complete_call.php?data=<?php echo $_REQUEST['data']; ?>"><Say voice="woman">A customer at the number <?php echo $user_phone_words?> is calling.</Say><Pause length="0.5"/><?php echo $datax; ?></Gather></Response>