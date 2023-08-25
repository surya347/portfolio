import { LightningElement,api } from 'lwc';

export default class Cards extends LightningElement {

    @api products;

    connectedCallback(){
        console.log('products:'+JSON.stringify(this.products))

    }
}