import { LightningElement,api } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor'
const { userAgent } = navigator;
export default class LoginFlowLwc extends LightningElement {

    message;
    @api device=false;
    user_Agent;
    
    connectedCallback() {
        this.user_Agent = userAgent;
        console.log("user agent:"+userAgent);

        if(FORM_FACTOR =='Large' ){
            this.message = 'You are on desktop';
            this.device = true;
        }else if(FORM_FACTOR =='Medium'){
            this.message = 'You are on tablet';
            if(this.user_Agent.includes('SalesforceMobileSDK')){
                this.device = true;
            }else{
                this.device = false;
            }
            // this.device = false;

        }else if(FORM_FACTOR =='Small'){
            this.message = 'You are on mobile';
            if(this.user_Agent.includes('SalesforceMobileSDK')){
                this.device = true;
            }else{
                this.device = false;
            }
            // this.device = false;
        }
        console.log('The device form factor is: ' + FORM_FACTOR);
    }

}