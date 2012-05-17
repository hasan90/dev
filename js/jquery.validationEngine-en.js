(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    //"alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters allowed"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Checks allowed Exceeded"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "firstname": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([a-zA-Z ]{3,200})$/,
                    "alertText": "* Please specify first name."
                },
                "formname": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([a-zA-Z0-9_\-\.\@\,\&\ ]{3,200})$/,
                    "alertText": "* Please specify form name."
                },
                "caller_id": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([a-zA-Z0-9_\-\.\@\,\&\ ]{3,200})$/,
                    "alertText": "* Please select a caller id."
                },
                "time": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([a-zA-Z0-9:_\-\.\@\,\&\ ]{3,200})$/,
                    "alertText": "* Please specify prefered time as 10 AM or 10 PM."
                },
               "rule_name": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([a-zA-Z0-9_\-\.\@\,\&\ ]{3,200})$/,
                    "alertText": "* Please specify rule name."
                },
                "rule_id": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^([0-9]{1,3})$/,
                    "alertText": "* Please specify rule name."
                },
                 "none": {  
                 	 // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9"'\,\.\-\@\_\/\(\)\ ]{3,200})$/,
                    "alertText": "* Please specify."                  
                },
                "lastname": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z ]{3,200})$/,
                    "alertText": "* Please specify last name."
                },
                "companyname": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9_\-\.\@\,\&\ ]{3,200})$/,
                    "alertText": "* Please specify Company name."
                },
                 "country": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9_\-\ ]{3,200})$/,
                    "alertText": "* Please specify Country name."
                },
                 "redirect_url": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9_\-\.\@\:\&\\/ ]{3,200})$/,
                    "alertText": "* Please specify form redirect url name."
                },
                
                  "url_type": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([0-9]{1,2})$/,
                    "alertText": "* Please select form redirect url type."
                },
                "email": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^([+A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* Please specify valid email address."
                },
                "email_login": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/,
                    "alertText": "* Please specify valid email address."
                },                
               "pass": {
                    // Simplified, was not working in the Iphone browser
                   "regex": /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{5,}$/,                    
                    "alertText": "* Please specify a password that contains a combination of letters and numbers."
                },
				"re_pass": {
                    // Simplified, was not working in the Iphone browser
                    "regex": /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{5,}$/,
                    "alertText": "* Please specify a password that contains a combination of letters and numbers."
                },
  				"city": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z ]{3,200})$/,
                    "alertText": "*  Please specify city name."
                },
                "monthsignup": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([0-9]{1,4})$/,
                    "alertText": "*  Please specify expiry month."
                },
                "yearssignup": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([0-9]{1,200})$/,
                    "alertText": "*  Please  specify expiry year."
                },
                "state": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z ]{1,20})$/,
                    "alertText": "* Please specify state name."
                },
                "zip": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([0-9 ]{3,8})$/,
                    "alertText": "* Please specify valid zip code."
                }, 
                "address": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9"'\,\.\-\@\_\/\(\)\ ]{3,200})$/,
                    "alertText": "* Please specify Address."
                },               
                "address1": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9"'\,\.\-\@\_\/\(\)\ ]{3,200})$/,
                    "alertText": "* Please specify Address1."
                },
                "address2": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9"'\,\.\@\-\_\/\(\)\ ]{3,200})$/,
                    "alertText": "* Please specify Address2."
                },               
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Please specify valid phone number."
                },	
                "card_num": {
                    // credit: jquery.h5validate.js / orefalo
                     "regex": /^(?!000)\d{15,16}$/,
                    "alertText": "* Please specify valid card number"
                },                	
                "card_name": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([a-zA-Z0-9 ]{3,100})$/,
                    "alertText": "*  Please specify name on Card"
                },	
                "card_cvv": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^(?!000)\d{3,4}$/,
                    "alertText": "* Please specify valid CVV number"
                },                	               
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    // Date in ISO format. Credit: bassistance
                    "regex": /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);


    
