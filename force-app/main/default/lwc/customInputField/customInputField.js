import { LightningElement } from 'lwc';
export default class CustomInputField extends LightningElement {

    fieldValue ='';
    maxValue = 140;
    divValue ='Surya';
    showCount=false;

    handleChange(event){
        let fieldValueLengt = event.currentTarget.value.length;
        // console.log('fieldValueLengt:'+JSON.stringify(fieldValueLengt));

        let fieldApi = event.currentTarget.dataset.field;
        // console.log('fieldApi:'+JSON.stringify(fieldApi));

        if(this.template.querySelector(`[data-field=${fieldApi}]`)){
            let field_count = this.maxValue -  fieldValueLengt;
            console.log('field_count:'+JSON.stringify(field_count));
            if(field_count <= 20){
                this.template.querySelector(`[data-name=${fieldApi}]`).value = field_count + '/' + this.maxValue;
                // this.template.querySelector(`[data-name=${fieldApi}]`).this.showCount = true;
            }else{
                this.template.querySelector(`[data-name=${fieldApi}]`).value = '';


            }
        }
    }

}