<?php
	$user_phone=$_REQUEST['user_phone'];
    header("content-type: text/xml");
?>
<Response><Say>Connecting</Say><Dial><?php echo $user_phone;?></Dial></Response>