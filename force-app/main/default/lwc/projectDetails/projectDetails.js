import { LightningElement ,wire,track} from 'lwc';
import getProjects from '@salesforce/apex/ProjectsController.getProjects';
import { refreshApex } from '@salesforce/apex';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class ProjectDetails extends LightningElement {

    @track wiredProjectList = [];
    @track error;

    projectData = [
        {
            id: '1',
            Name : 'Salesforce Integration Frameworks',
            Description : 'A practice tool that facilitates an end-to-end DevOps toolchain for developing and deploying software programs. Such integration would mean the information exchange between Azure DevOps and Salesforce is automatic ,bi-directional and in real -time.',
            technology: 'Salesforce,LWC,Apex,Triggers,Integration'
        },
        {
            id: '2',
            Name : 'Football Transfer Portal',
            Description : 'A customer portal built on salesforce experienced cloud for football clubs to sell and purchase players from different clubs. Portal is built in custom way using various LWC components ,Apex logics and with self registration enabled including Social sign-on method.',
            technology: 'Salesforce,LWC,Apex,JavaScript,Experience Cloud',
        },
        {
            id: '3',
            Name : 'Salesforce Blog Site',
            Description : 'A Web Application built using MERN stack for uploading blogs and YouTube videos on Salesforce and different technologies.',
            technology: 'React,Node,JavaScript,MongoDb',
        }

    ]

    ProjectImage1 = Images + '/funky_image/projectImage1.jpg';
    ProjectImage2 = Images + '/funky_image/projectImage2.png';
    ProjectImage3 = Images + '/funky_image/projectImage3.png';
    
    // @wire(getProjects,{})
    // projectList(result){
    //    if(result.data){
    //        // refreshApex(this.wiredProjectList);
    //         //this.wiredProjectList = result;
    //         var tempProject = JSON.parse(JSON.stringify(result.data));
            
    //         // console.log("tempProject:"+JSON.stringify(tempProject))
    //         // console.log("tempProject length:"+JSON.stringify(tempProject.length))

    //         for(var i=0; i<tempProject.length ;i++){
    //             var newTechnology = tempProject[i]['Technologies_Used__c'];
    //             // console.log("newTechnology:"+JSON.stringify(newTechnology));

    //             if(newTechnology){
    //                 tempProject[i].technology = newTechnology.split(";");

    //                 delete tempProject[i].Technologies_Used__c;
    //             }

    //         }

    //         this.wiredProjectList = tempProject;
    //         // console.log("this.wiredProjectList:"+JSON.stringify(this.wiredProjectList))


    //    }else if(result.error){
    //         this.error = result.error;
    //         console.log("this.error:"+JSON.stringify(this.error))
    //         this.wiredProjectList = [];
    //    }
        
    // }
}