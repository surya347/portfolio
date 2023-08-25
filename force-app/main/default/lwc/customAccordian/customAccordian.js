import { LightningElement,wire,api } from 'lwc';
import getProjectsById from '@salesforce/apex/ProjectsController.getProjectsById';
import getProjects from '@salesforce/apex/ProjectsController.getProjects';

export default class CustomAccordian extends LightningElement {

    wiredProjectList;
    @api selectedProjectId;
    iconName='action:new'

    connectedCallback() {
        JSON.stringify('selectedProjectId:'+JSON.stringify(selectedProjectId))
    }



     @wire(getProjectsById,{projectType :'$selectedProjectId' })
      projectLists(result){
       if(result.data){
					//  console.log("this.result.data:"+JSON.stringify(result))
           // refreshApex(this.wiredProjectList);
            //this.wiredProjectList = result;
            var tempProject = JSON.parse(JSON.stringify(result.data));
            
            // console.log("tempProject:"+JSON.stringify(tempProject))
            // console.log("tempProject length:"+JSON.stringify(tempProject.length))

            for(var i=0; i<tempProject.length ;i++){
                var newTechnology = tempProject[i]['Technologies_Used__c'];
                // console.log("newTechnology:"+JSON.stringify(newTechnology));

                if(newTechnology){
                    tempProject[i].technology = newTechnology.split(";");

                    delete tempProject[i].Technologies_Used__c;
                }
            }

            this.wiredProjectList = tempProject;
            console.log("this.wiredProjectList:"+JSON.stringify(this.wiredProjectList))


       }else if(result.error){
            this.error = result.error;
            // console.log("this.error:"+JSON.stringify(this.error))
            this.wiredProjectList = [];
       }
        
    }

    handleClickIcon(event){
         let currentIcon = event.currentTarget.dataset.name;
        console.log('currentIcon:'+JSON.stringify(currentIcon))

        let isNewActionIcon = this.template.querySelector(`[data-name=${currentIcon}]`);
        if(isNewActionIcon.iconName == 'action:new'){
            this.template.querySelector(`[data-name=${currentIcon}]`).iconName='action:reject';
            this.template.querySelector(`[data-id=${currentIcon}]`).className='slds-accordion__section slds-is-open';
        }else{
             this.template.querySelector(`[data-name=${currentIcon}]`).iconName='action:new';
             this.template.querySelector(`[data-id=${currentIcon}]`).className='slds-accordion__section';
        }

    }

}