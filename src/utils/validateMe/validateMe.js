import Validator from 'validator';

class ValidateMe{
    constructor(){
        this.state = {};
    }
    validateMe(props,e){
       // debugger;
        let isValid = true;
        let theValue = typeof e != "undefined" ? e.target.value.trim() : props.value.trim();
        if (!props.isRequired && theValue == "") {
            isValid = true;
        } else if (props.isRequired && theValue == "") {
            isValid = false;
        } else {
            switch (props.validType) {
                case 'text':
                    isValid = true;
                    break;
                case 'email':
                    isValid = Validator.isEmail(theValue);
                    break;
                case 'phone':
                case 'number':
                    isValid = Validator.isNumeric(theValue);
                    break;
                case 'url':
                    isValid = Validator.isURL(theValue);
                    break;
                case 'fb':

                    break;
            }
        }
        return isValid;
    }
}
export default ValidateMe;