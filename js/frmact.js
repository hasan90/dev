/**
 *This is iframe based implementation.
**/
document.write("<iframe frameborder='0' scrolling='no' id='frmactive' name='frmactive' width='350' height='700' src='http://process.formactivate.com/forms/getform/form_id/"+_form_id + "/member_id/" + _member_id + "'"  + "></iframe>");

/**
 * This is div based implementation for load our FORM from from remote website
 */

//function loadIntoDiv()
//{
//    var frame = document.getElementById('frmactive');
//    var d = frame.contentWindow || frame.contentDocument;
//    if (d.document) {d = d.document;}
//    document.getElementById('form_container').innerHTML = d.head.innerHTML + d.body.innerHTML;
//}
//
//setTimeout('loadIntoDiv()', 500);