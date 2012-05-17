<?php
    header("content-type: text/xml");
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<Response>
    <Say voice="woman">A customer at the number </Say><Pause length="0.5"/><Say voice="woman"><?php echo @$_REQUEST['number']?> is calling</Say>
    <Dial><?php echo $_REQUEST['number']?></Dial>
</Response>