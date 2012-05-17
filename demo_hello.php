<?php

define("WEBSITE_URL","http://www.formactivate.com/dev/");

if(!empty($_REQUEST['data']))
{
	$data=base64_decode($_REQUEST['data']);
	$data_array=array();
	$data_array=explode('@#@#@@#',$data);
	$user_data=$data_array[0];
	$phone_numbers=explode('###', $data_array[1]);
        $from = $phone_numbers[0];
        $to   = $phone_numbers[1];
        $user_phone_words = chunk_split($from, 1, " ");

//        $str = $user_data. ': ' . $from . ' : '. $to . ' ';
//
//        $str .= $user_phone_words;
//
//        $str .= WEBSITE_URL ."demo_complete.php?caller_number=$from&receiver_number=$to";
//
//        $file = 'test.txt';
//
//        file_put_contents($file, $str);

}
header("content-type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>

<Response>
    
        <Say>A customer at the number <?php echo $user_phone_words?> is calling. <?php echo $user_data?></Say>
    
</Response>