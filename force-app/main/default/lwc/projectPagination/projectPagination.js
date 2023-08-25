import { LightningElement,wire } from 'lwc';
import getProjects from '@salesforce/apex/ProjectsController.getProjects';

export default class ProjectPagination extends LightningElement {

    totalProjects;
    visibleProjects

 @wire(getProjects)
    wiredprojects({error, data}){
        if(data){ 
            this.totalProjects = data
            console.log('this.totalProjects:'+JSON.stringify(this.totalProjects));
        }
        if(error){
            console.error(error)
        }
    }

 updateProjectHandler(event){
        this.visibleProjects = [...event.detail.records]
        console.log(event.detail.records)
    }

}