import { LightningElement,api, track } from 'lwc';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class AboutUs extends LightningElement {

    @api skillName1;
    @api skillName2;
    @api skillName3;
    @api skillName4;
    @api skillName5;
    @api skillBarvalue1;
    @api skillBarvalue2;
    @api skillBarvalue3;
    @api skillBarvalue4;
    @api skillBarvalue5;
    
    

    //  skills = [
    //     {
    //         id: '1',
    //         skill : `${this.skillName1}`,
    //         percentage:this.skillBarvalue1,

    //     },
    //     {
    //         id: '2',
    //         skill : this.skillName2,
    //         percentage:this.skillBarvalue2,

    //     },
    //     {
    //         id: '3',
    //         skill : this.skillName3,
    //         percentage:this.skillBarvalue3,

    //     },
    //     {
    //         id: '4',
    //         skill : this.skillName4,
    //         percentage:this.skillBarvalue4,

    //     },
    //     {
    //         id: '5',
    //         skill : this.skillName5,
    //         percentage:this.skillBarvalue5,

    //     },
    // ];

   

    profileImage = Images + '/Funky_Image/skills.png';
}