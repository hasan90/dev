<?php
/**
 * Braintree Credit Card Verification Result
 *
 * @package    Braintree
 * @subpackage Result
 * @copyright  2010 Braintree Payment Solutions
 */

/**
 * Braintree Credit Card Verification Result
 *
 * This object is returned as part of an Error Result; it provides
 * access to the credit card verification data from the gateway
 *
 *
 * @package    Braintree
 * @subpackage Result
 * @copyright  2010 Braintree Payment Solutions
 *
 * @property-read string $avsErrorResponseCode
 * @property-read string $avsPostalCodeResponseCode
 * @property-read string $avsStreetAddressResponseCode
 * @property-read string $cvvResponseCode
 * @property-read string $status
 *
 */
class Braintree_Result_CreditCardVerification
{
    private $_avsErrorResponseCode;
    private $_avsPostalCodeResponseCode;
    private $_avsStreetAddressResponseCode;
    private $_cvvResponseCode;
    private $_status;

    /**
     * @ignore
     */
    public function  __construct($attributes)
    {
        $this->_initializeFromArray($attributes);
    }
    /**
     * initializes instance properties from the keys/values of an array
     * @ignore
     * @access protected
     * @param <type> $aAttribs array of properties to set - single level
     * @return none
     */
    private function _initializeFromArray($attributes)
    {
        foreach($attributes AS $name => $value) {
            $varName = "_$name";
            $this->$varName = $value;
            // $this->$varName = Braintree_Util::delimiterToCamelCase($value, '_');
        }
    }
    /**
     *
     * @ignore
     */
    public function  __get($name)
    {
        $varName = "_$name";
        return isset($this->$varName) ? $this->$varName : null;
    }
}
