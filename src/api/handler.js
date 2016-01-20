class Handler{
    constructor(currentStep, recipient, data){
        this.recipient = recipient;
        this.currentStep = currentStep;
        this.data = data;
    }
    handleData(){
        console.log(this.currentStep + ", " + this.recipient +", " + this.data);
        let error = false;
        let sendData = {};
        let returnData = {};
        if(typeof this.currentStep == "undefined"){
            return;
        }
        console.log("recipient: ");
        if(this.recipient == "cp"){
            console.log("inside cp send");
            //TBD - use the Fetch lib to send post and receive answer from CP (data for local storage)
            switch(this.currentStep){
                case 0:
                    let store = this.data.store ? this.data.store : "";
                    let email = this.data.email ? this.data.email : "";
                    sendData = {currentStep:this.currentStep, data: {store: store,email: email}};
                    console.log(sendData);
                    returnData = {};
                    break;
                case 1:
                    let facebook = this.data.facebook ? this.data.facebook: "";
                    let phone = this.data.phone ? this.data.phone: "";
                    let website = this.data.website ? this.data.website : "";
                    let category = this.data.category ? this.data.category : "";
                    let location = this.data.location ? this.data.location : "";
                    let info =  this.data.info ? this.data.info : "";
                    sendData = {currentStep:this.currentStep, data: {facebook:facebook, phone: phone, website:website,category:category,location:locations,info:info}};
                    console.log(sendData);
                    returnData = {scheme:{color1:"e87f03", color2:"00bd9d",color3:"ecf0f1"},scheme:{color1:"ecf0f1", color2:"495767",color3:"e87f03"},scheme:{color1:"81898c", color2:"ecf0f1",color3:"e87f03"}};
                    break;
            }
        }else if(this.recipient == "engine"){
            //TBD - use the Fetch lib to send post and receive answer from Engine (data for redirect)
            sendData = {currentStep: this.currentStep};
            switch(this.currentStep){
                case 0:
                    returnData = {nextStepId: 1, nextStepUri: "/step1"};
            }
        }
        return {"error":error, data: returnData}
    }
}
export default Handler;