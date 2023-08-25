import { LightningElement ,wire,track} from 'lwc';
import getProjectList from '@salesforce/apex/PortfolioClass.getProjectList';
import { refreshApex } from '@salesforce/apex';
import Images from '@salesforce/resourceUrl/Funky_Image';
import { NavigationMixin } from 'lightning/navigation';


export default class ProjectDetails extends NavigationMixin(LightningElement) {

     wiredProjectList = [];
    @track error;
    iconName='utility:add'


    ProjectImage1 = Images + '/Funky_Image/projectImage1.jpg';
    ProjectImage2 = Images + '/Funky_Image/projectImage2.png';
    ProjectImage3 = Images + '/Funky_Image/projectImage3.png';
    
    @wire(getProjectList,{})
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
            // console.log("this.wiredProjectList:"+JSON.stringify(this.wiredProjectList))


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
        if(isNewActionIcon.iconName == 'utility:add'){
            this.template.querySelector(`[data-name=${currentIcon}]`).iconName='utility:close';
            this.template.querySelector(`[data-id=${currentIcon}]`).className='slds-accordion__section slds-is-open';
        }else{
             this.template.querySelector(`[data-name=${currentIcon}]`).iconName='utility:add';
             this.template.querySelector(`[data-id=${currentIcon}]`).className='slds-accordion__section';
        }

    }

    navigateToWebsite(event){

        let website  = event.currentTarget.dataset.id;
        this[NavigationMixin.Navigate]({
                    type: 'standard__webPage',
                    attributes: {
                        url: `${website}`
                    }
                },
                true // Replaces the current page in your browser history with the URL
            );
    }
}