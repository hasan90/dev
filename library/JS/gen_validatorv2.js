/*
  -------------------------------------------------------------------------
	                    JavaScript Form Validator 
                                Version 2.0.2
	Copyright 2003 JavaScript-coder.com. All rights reserved.
	You use this script in your Web pages, provided these opening credit
    lines are kept intact.
	The Form validation script is distributed free from JavaScript-Coder.com

	You may please add a link to JavaScript-Coder.com, 
	making it easy for others to find this script.
	Checkout the Give a link and Get a link page:
	http://www.javascript-coder.com/links/how-to-link.php

    You may not reprint or redistribute this code without permission from 
    JavaScript-Coder.com.
	
	JavaScript Coder
	It precisely codes what you imagine!
	Grab your copy here:
		http://www.javascript-coder.com/
    -------------------------------------------------------------------------  
*/
var dtCh= "/";
var minYear=1900;
var maxYear=2100;
function setmonth(currdate)
{   
	
	//var fullpath = 'http://192.168.1.204/~anita.verma/ftv/';
	//var ahaanpath = 'http://ahaan.com/ftv/';
	document.calForm.timestmp.value=currdate;
	document.calForm.submit();
}
function trim(sString)
{

while (sString.substring(0,1) == ' ')
{
	sString = sString.substring(1, sString.length);
}
while (sString.substring(sString.length-1, sString.length) == ' ')
{
	sString = sString.substring(0,sString.length-1);
}
	return sString;
}
function Validator(frmname)
{
  this.formobj=document.forms[frmname];
	if(!this.formobj)
	{
	  alert("BUG: couldnot get Form object "+frmname);
		return;
	}
	if(this.formobj.onsubmit)
	{
	 this.formobj.old_onsubmit = this.formobj.onsubmit;
	 this.formobj.onsubmit=null;
	}
	else
	{
	 this.formobj.old_onsubmit = null;
	}

	this.formobj.onsubmit=form_submit_handler;
	this.addValidation = add_validation;
	this.setAddnlValidationFunction=set_addnl_vfunction;
	this.clearAllValidations = clear_all_validations;
}


function isValidDate(year, month, date)
{
	var monthLength = month.length;
	var dateLength = date.length;
	if( monthLength < 2)
	{
		month = '0'+month;
	}
	if( dateLength < 2)
	{
		date = '0'+date;
	}
	
	var  dateString = year+"/"+month+"/"+date;
	var birthDate = new Date(dateString);
		
	var curdate = new Date();
	
	if (birthDate >= curdate)
	{
	  return false;
	}
	else
	{
	  return true;
	}	
}

function set_addnl_vfunction(functionname)
{
  this.formobj.addnlvalidation = functionname;
}
function clear_all_validations()
{
	for(var itr=0;itr < this.formobj.elements.length;itr++)
	{
		this.formobj.elements[itr].validationset = null;
	}
}
function form_submit_handler()
{
	for(var itr=0;itr < this.elements.length;itr++)
	{
		if(this.elements[itr].validationset &&
	   !this.elements[itr].validationset.validate())
		{
		  return false;
		}
	}
	if(this.addnlvalidation)
	{
	  str =" var ret = "+this.addnlvalidation+"()";
	  eval(str);
    if(!ret) return ret;
	}
	return true;
}


function add_validation(itemname,descriptor,errstr)
{
  if(!this.formobj)
	{
	  alert("BUG: the form object is not set properly");
		return;
	}//if
	var itemobj = this.formobj[itemname];
  if(!itemobj)
	{
	  alert("BUG: Couldnot get the input object named: "+itemname);
		return;
	}
	if(!itemobj.validationset)
	{
	  itemobj.validationset = new ValidationSet(itemobj);
	}
  itemobj.validationset.add(descriptor,errstr);
}
function ValidationDesc(inputitem,desc,error)
{
  this.desc=desc;
	this.error=error;
	this.itemobj = inputitem;
	this.validate=vdesc_validate;
}
function vdesc_validate()
{
 if(!V2validateData(this.desc,this.itemobj,this.error))
 {
    this.itemobj.focus();
		return false;
 }
 return true;
}
function ValidationSet(inputitem)
{
    this.vSet=new Array();
	this.add= add_validationdesc;
	this.validate= vset_validate;
	this.itemobj = inputitem;
}
function add_validationdesc(desc,error)
{
  this.vSet[this.vSet.length]= 
	  new ValidationDesc(this.itemobj,desc,error);
}
function vset_validate()
{
   for(var itr=0;itr<this.vSet.length;itr++)
	 {
	   if(!this.vSet[itr].validate())
		 {
		   return false;
		 }
	 }
	 return true;
}
function validateEmailv2(email)
{
// a very simple email validation checking. 
// you can add more complex email checking if it helps 
    if(email.length <= 0)
	{
	  return true;
	}
    var splitted = email.match("^(.+)@(.+)$");
    if(splitted == null) return false;
    if(splitted[1] != null )
    {
      var regexp_user=/^\"?[\w-_\.]*\"?$/;
      if(splitted[1].match(regexp_user) == null) return false;
    }
    if(splitted[2] != null)
    {
      var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
      if(splitted[2].match(regexp_domain) == null) 
      {
	    var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
	    if(splitted[2].match(regexp_ip) == null) return false;
      }// if
      return true;
    }
return false;
}

/* Function add for the remove all spaces */

// This method is used to remove leading spaces.
function removeLeadingSpaces(str)
{
   var whitespace = new String(" \t\n\r");
   var s = new String(str);

   if (whitespace.indexOf(s.charAt(0)) != -1)
    {
      var j=0, i = s.length;
      while (j < i && whitespace.indexOf(s.charAt(j)) != -1)  j++;
      s = s.substring(j, i);
    }
   return s;
}
// This method is used to remove Trailing spaces.
// It takes argument of the string which Trailing Spaces has to removed.
function removeTrailingSpaces(str)
{
   var whitespace = new String(" \t\n\r");
   var s = new String(str);

   if (whitespace.indexOf(s.charAt(s.length-1)) != -1)
   {
      var i = s.length - 1;       // Get length of string
      while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) i--;

      // Get the substring from the front of the string to
      // where the last non-whitespace character is...
      s = s.substring(0, i+1);
   }

   return s;
}
// Removes both Leading and Trailing blanks.
function removeAllSpaces(str)
{
   str = removeLeadingSpaces(str); //Remove Leading Spaces
   str = removeTrailingSpaces(str); //Remove Trailing Spaces
   return str;
}


/* End */

function V2validateData(strValidateStr, objValue, strError) 
{ 
    var epos = strValidateStr.search("="); 
    var  command  = ""; 
    var  cmdvalue = 255; 
	var  cmdvalue100 = 100; 
	var  cmdvalue30 = 30; 
	var  cmdvalue50 = 50; 
    if(epos >= 0) 
    { 
     command  = strValidateStr.substring(0,epos); 
     cmdvalue = strValidateStr.substr(epos+1); 
    } 
    else 
    { 
     command = strValidateStr; 
    } 
    switch(command) 
    { 
        case "req": 
        case "required": 
         { 
           if(removeAllSpaces(objValue.value)=='' || eval(objValue.value.length) == 0) 
           { 
              if(!strError || strError.length ==0) 
              { 
                strError = objValue.name + " : Required Field"; 
              }//if 
              alert(strError); 
              return false; 
           }//if 
           break;             
         }//case required 
         case "notOnlySpaces": 
         { 
           if(eval(trim(objValue.value).length) == 0) 
           { 
              if(!strError || strError.length ==0) 
              { 
                strError = objValue.name + " : Only spaces not allowed"; 
              }//if 
              alert(strError); 
              return false; 
           }//if 
           break;             
         }//case required 

        case "maxlength": 
        case "maxlen": 
          { 
             if(eval(objValue.value.length) >  eval(cmdvalue)) 
             { 
               if(!strError || strError.length ==0) 
               { 
                 strError = objValue.name + " : "+cmdvalue+" characters maximum "; 
               }//if 
               alert(strError + "\n[Current length = " + objValue.value.length + " ]"); 
               return false; 
             }//if 
             break; 
          }//case maxlen 
        case "minlength": 
        case "minlen": 
           { 
             if(eval(objValue.value.length) <  eval(cmdvalue)) 
             { 
               if(!strError || strError.length ==0) 
               { 
                 strError = objValue.name + " : " + cmdvalue + " characters minimum  "; 
               }//if               
               alert(strError + "\n[Current length = " + objValue.value.length + " ]"); 
               return false;                 
             }//if 
             break; 
            }//case minlen 
        case "alnum": 
        case "alphanumeric": 
           { 
              var charpos = objValue.value.search("[^A-Za-z0-9]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
               if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": Only alpha-numeric characters allowed "; 
                }//if 
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 
              break; 
           }//case alphanumeric 
        case "num": 
        case "numeric": 
           { 
              var charpos = objValue.value.search("[^0-9]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": Only digits allowed "; 
                }//if               
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 
              break;               
           }//numeric 
        case "alphabetic": 
        case "alpha": 
           { 
              var charpos = objValue.value.search("[^A-Za-z]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": Only alphabetic characters allowed "; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 
              break; 
           }//alpha 
		case "alnumhyphen":
			{
              var charpos = objValue.value.search("[^A-Za-z0-9\-_]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
			
			case "numhyphen":
			{
              var charpos = objValue.value.search("[^0-9\-]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are 0-9 and - "; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
			
			case "decimal":
			{
              var charpos = objValue.value.search("[^0-9\.]"); 
              var str=objValue.value;
			  var dec='';
			  var count=0;
			  if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are 0-9 and . "; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 
			  
			  for(var i=0;i<objValue.value.length;i++)
				{
				dec=str.substr(i,1);
				
				if(dec==".")
					{count++;}
				}
				if (count>1)
				{ alert(strError); 
					return false;
				}
			break;
			}

			case "alnumspicl": // added by anita
			{
              var charpos = objValue.value.search("[^A-Za-z0-9-_ ]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
			case "alnumspaces": // added by vikash on 18 Aug 09
			{
              var charpos = objValue.value.search("[^A-Za-z0-9 ]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are A-Z,a-z,0-9 and spaces"; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
			case "alnumwildcard": // added by ved
			{
              var charpos = objValue.value.search("[^A-Za-z0-9\-_.\*@#%.]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
			case "numquote": // added by anita
			{
              var charpos = objValue.value.search("[^0-9\-' \"]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                  if(!strError || strError.length ==0) 
                { 
                  strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
                }//if                             
                //alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                alert(strError); 
                return false; 
              }//if 			
			break;
			}
        case "email": 
          { 
               if(!validateEmailv2(objValue.value)) 
               { 
                 if(!strError || strError.length ==0) 
                 { 
                    strError = objValue.name+": Enter a valid Email address "; 
                 }//if                                               
                 alert(strError); 
                 return false; 
               }//if 
           break; 
          }//case email 
        case "lt": 
        case "lessthan": 
         { 
            if(isNaN(objValue.value)) 
            { 
              alert(objValue.name+": Should be a number "); 
              return false; 
            }//if 
            if(eval(objValue.value) >=  eval(cmdvalue)) 
            { 
              if(!strError || strError.length ==0) 
              { 
                strError = objValue.name + " : value should be less than "+ cmdvalue; 
              }//if               
              alert(strError); 
              return false;                 
             }//if             
            break; 
         }//case lessthan 
        case "gt": 
        case "greaterthan": 
         { 
            if(isNaN(objValue.value)) 
            { 
              alert(objValue.name+": Should be a number "); 
              return false; 
            }//if 
             if(eval(objValue.value) <=  eval(cmdvalue)) 
             { 
               if(!strError || strError.length ==0) 
               { 
                 strError = objValue.name + " : value should be greater than "+ cmdvalue; 
               }//if               
               alert(strError); 
               return false;                 
             }//if             
            break; 
         }//case greaterthan 
        case "regexp": 
         { 
		 	if(objValue.value.length > 0)
			{
	            if(!objValue.value.match(cmdvalue)) 
	            { 
	              if(!strError || strError.length ==0) 
	              { 
	                strError = objValue.name+": Invalid characters found "; 
	              }//if                                                               
	              alert(strError); 
	              return false;                   
	            }//if 
			}
           break; 
         }//case regexp 

        case "bdate": 
        { 
			var manth ;
			month = document.frm1.month.value ;
			var day ;
			day = document.frm1.day.value ;

			var year ;
			year = document.frm1.year.value ;

			var ret ; 
			ret = isValidDate(year, month, day) ;

			if(ret == false)
			{
	              alert(strError); 
	              return false;  
			}
			else
			{
				return true;  
			}

		    break; 

         }//case regexp 
		 
		 case "isdate": 
         { 
		 	if(objValue.value.length > 0)
			{
			   var dtCh = "-";
	           var error_date_msg="";
			   var dtStr=objValue.value;
			   var daysInMonth = DaysArray(12)
				var pos1=dtStr.indexOf(dtCh)
				var pos2=dtStr.indexOf(dtCh,pos1+1)
				//var strMonth=dtStr.substring(0,pos1)
				//var strDay=dtStr.substring(pos1+1,pos2)
				//var strYear=dtStr.substring(pos2+1)
				var strYear=dtStr.substring(0,pos1)
				var strMonth=dtStr.substring(pos1+1,pos2)
				var strDay=dtStr.substring(pos2+1)
				
				strYr=strYear
				if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
				if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
				for (var i = 1; i <= 3; i++) {
					if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
				}
				month=parseInt(strMonth)
				day=parseInt(strDay)
				year=parseInt(strYr)
				if (pos1==-1 || pos2==-1){
					error_date_msg="The date format should be : yyyy-mm-dd";
					alert(error_date_msg);
					return false; 
				}
				if (strMonth.length<1 || month<1 || month>12){
					error_date_msg="Please enter a valid month";
					alert(error_date_msg);
					return false; 
				}
				if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
					error_date_msg="Please enter a valid day";
					alert(error_date_msg);
					return false; 
				}
				if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
					error_date_msg="Please enter a valid 4 digit year between "+minYear+" and "+maxYear;
					alert(error_date_msg);
					return false; 
				}
				if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
					error_date_msg="Please enter a valid date";
					alert(error_date_msg);
					return false; 
				}
			
			/*
			if(!strError || strError.length ==0) 
               { 
                 strError = error_date_msg;
               }//if               
               alert(strError); 
               return false;  
			   */

			}
           break; 
         }//case isdate 
        case "dontselect": 
         { 
            if(objValue.selectedIndex == null) 
            { 
              alert("BUG: dontselect command for non-select Item"); 
              return false; 
            } 
            if(objValue.selectedIndex == eval(cmdvalue)) 
            { 
             if(!strError || strError.length ==0) 
              { 
              strError = objValue.name+": Please Select one option "; 
              }//if                                                               
              alert(strError); 
              return false;                                   
             } 
             break; 
         }//case dontselect 
          case "confirmpassword": 
         { 
            if(objValue.value != document.frm1.newpassword.value) 
            { 
              alert(strError); 
              return false;                                   
             }
             break; 
         }//case confirm password for change password      
    }//switch 
    return true; 
}
/*
	Copyright 2003 JavaScript-coder.com. All rights reserved.
*/
function DoCustomValidation()
{
  var frm = document.forms["myform"];
  if (frm.txt_regemail.value != frm.txt_regconfemail.value)
  {
  	alert('The Email and Confirm Email does not match!');
    return false;
  }
  else if(frm.txt_regpassword.value != frm.txt_regconfpassword.value)
  {
    alert('The Password and Confirm Password does not match!');
    return false;
  }
  else if(frm.txt_terms.checked == false)
  {
    alert('Please agree with the terms and conditions');
    return false;
  }
  else
  {
    return true;
  }
}

function DoCustomValidation2()
{
  var frm = document.forms["frm1"];
 
  if(frm.password.value != frm.conpassword.value)
  {
    alert('The Password and Confirm Password does not match!');
    return false;
  }
  else
  {
    return true;
  }
}
function DoCustomValidation3()
{
  var frm = document.forms["myform"];
 
  if(frm.fn.value == '' && frm.ln.value == '')
  {
    alert('Please enter either Forename or Last Name');
    return false;
  }
  else
  {
    return true;
  }
}

function DoCustomValidation4()
{
  var frm = document.forms["myform"];
 
  if(frm.hf.value == '' && frm.hl.value == '' && frm.wf.value == '' && frm.wl.value == '')
  {
    alert('Please enter atleast one Forename or Last Name');
    return false;
  }
  else
  {
    return true;
  }
}


function DoCustomValidation5()
{
  var frm = document.forms["myform"];
 
  if(frm.lname.value == '' )
  {
    alert('Please enter Last Name');
    return false;
  }
  else
  {
    return true;
  }
}

// Function to Confirm before a delete operation in the admin
function confirm_delete()
{
  if (confirm("Are you sure you want to delete?")==true)
    return true;
  else
    return false;
}	

// Below function is to toggle the advanced search in the admin for searching customers.
function toggleLayer(whichLayer)
{
	
if (document.getElementById)
{
// this is the way the standards work
var style2 = document.getElementById(whichLayer).style;
style2.display = style2.display? "":"block";
}
else if (document.all)
{
// this is the way old msie versions work
var style2 = document.all[whichLayer].style;
style2.display = style2.display? "":"block";
}
else if (document.layers)
{
// this is the way nn4 works
var style2 = document.layers[whichLayer].style;
style2.display = style2.display? "":"block";
}

if (style2.display){
	document.getElementById("showhide").innerHTML = "Hide Advanced Search";
	//alert("Hide");
}else{
	document.getElementById("showhide").innerHTML = "Show Advanced Search";
	//alert("Show");
}
}

// Function used in emp_modifydelete.php to check is a employee is clicked.
function radio_button_checker()
{
// set var radio_choice to false
var radio_choice = false;

// Loop from zero to the one minus the number of radio button selections
for (counter = 0; counter < emp_edit.txt_empid.length; counter++)
{
// If a radio button has been selected it will return true
// (If not it will return false)
if (emp_edit.txt_empid[counter].checked)
radio_choice = true; 
}

if (!radio_choice)
{
// If there were no selections made display an alert box 
alert("Please select an employee to edit.")
return (false);
}
return (true);
}

function checkCheckBoxes() 
{
	if (document.forms[0].CHKBOX_1.checked == false && 
		document.forms[0].CHKBOX_2.checked == false && 
		document.forms[0].CHKBOX_3.checked == false)
	{
	alert ('You didn\'t agree with the terms and conditions');
	return false;
	}
	else {
	return true;
	}
}

// THIS FUNCTION IS USED IN EMP_REPORT.PHP
function ActionDeterminator()
{
if(document.myform.re[0].checked == true) {
document.myform.action = 'emp_cust_rep_results.php';
}
if(document.myform.re[1].checked == true) {
document.myform.action = 'emp_inv_rep_results.php';
}
if(document.myform.re[2].checked == true) {
document.myform.action = 'emp_sea_rep_results.php';
}
return true;
}


function DoCustomValidation6()
{
  var frm = document.forms["myform"];
 
  if(frm.initial.value == '' && frm.lname.value == '')
  {
    alert('Please enter either Initial or Last Name');
    return false;
  }
  else
  {
    return true;
  }
}

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strMonth=dtStr.substring(0,pos1)
	var strDay=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : mm/dd/yyyy")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")
		return false
	}
return true
}

// for the billing and shipping information are same.
function PrePopulate(form) 
{ 
  if(form.billshipp.checked) { 
    form.ship_fname.value   = form.bill_fname.value; 
    form.ship_lname.value   = form.bill_lname.value; 
    form.ship_add1.value   = form.bill_add1.value; 
    form.ship_add2.value   = form.bill_add2.value; 
    form.ship_add3.value   = form.bill_add3.value; 
    form.ship_city.value   = form.bill_city.value; 
    form.ship_state.value   = form.bill_state.value; 
	form.ship_country.value   = form.bill_country.value; 
	form.ship_zip.value   = form.bill_zip.value; 
	form.ship_phone.value   = form.bill_phone.value; 
  } else { 
    form.ship_fname.value   = ""; 
    form.ship_lname.value   = ""; 
    form.ship_add1.value   = ""; 
    form.ship_add2.value   = ""; 
    form.ship_add3.value   = ""; 
    form.ship_city.value   = ""; 
    form.ship_state.value   = ""; 
	form.ship_country.value   = ""; 
	form.ship_zip.value   = ""; 
	form.ship_phone.value   = ""; 
  } 
} 


function clickclear(thisfield, defaulttext) {
	if (thisfield.value == defaulttext) {
		thisfield.value = "";
	}
}

function clickrecall(thisfield, defaulttext) {
	if (thisfield.value == "") {
		thisfield.value = defaulttext;
	}
}

function DoCustomValidationCancel()
{
  var frm = document.forms["cancelfrm"];
 
  if(frm.item_no.value == '' || frm.item_no.value == 'Item ID')
  {
    alert('Please enter item id!');
	frm.item_no.value = '';
	frm.item_no.focus();
    return false;
  }
  else
  {
	  if( confirm('Are you sure? If not sure please read the FAQ regarding cacellation fees.') ) {
		return true;
	  }
	  else {
		return false;
	  }
    
  }
}