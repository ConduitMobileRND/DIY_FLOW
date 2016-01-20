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