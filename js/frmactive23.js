document.write("<iframe frameborder='0' scrolling='no' id='frmactive' name='frmactive' width='0' height='0' src='http://formactive.informatixbd.com/index.php/forms/getform/form_id/"+_form_id + "/member_id/" + _member_id + "'"  + "Your browser does not support inline frames or is currently configured not to display inline frames.</iframe>");



function loadIntoDiv()
{
    var frame = document.getElementById('frmactive');

    var d = frame.contentWindow || frame.contentDocument;

alert('a')

    d = d.document;

    alert('b')

    document.getElementById('form_container').innerHTML = d.head.innerHTML + d.body.innerHTML;
}

setTimeout('loadIntoDiv()', 5000);