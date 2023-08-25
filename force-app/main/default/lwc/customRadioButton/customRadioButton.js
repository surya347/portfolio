import { LightningElement,wire } from 'lwc';
import { getObjectInfo ,getPicklistValues } from 'lightning/uiObjectInfoApi';
import Projects__Object from '@salesforce/schema/Projects__c';

export default class CustomRadioButton extends LightningElement {

      selectedOption = '';
      showContent = false;
      recordTypeId;
      projectType;
      options;



     @wire(getObjectInfo, { objectApiName: Projects__Object })
     wiredProjecteObjects({error,data}){
         if(error){
             console.error(error);
         }else if (data){

                this.recordTypeId = data.defaultRecordTypeId;
         }
     }

       @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: 'Projects__c.Type__c' })
        wiredProjecteTypes({error,data}){
            if(error){
                console.error(error);
            }else if (data){
                 console.log('wiredProjecteTypes:' +  JSON.stringify(data));
                 let arr = [];
                 this.projectType = data.values;

                 this.projectType.forEach(currentItem => {
                     arr.push({label : currentItem.value, value:currentItem.value});
                 });

                 this.options = arr;
                 console.log('this.options: ' +  JSON.stringify(this.options));


                    // this.recordTypeId = data.defaultRecordTypeId;
            }
     }

     handleChange(event) {
       this.selectedOption = event.detail.value;
        console.log('Option selected with value: ' +  JSON.stringify(this.selectedOption));
    
        if(this.selectedOption){
            this.showContent = true;
        }
    }

}