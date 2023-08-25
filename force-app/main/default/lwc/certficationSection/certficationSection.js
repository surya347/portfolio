import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class CertficationSection extends LightningElement {

    certficationsData =[
        {
            id:'1',
            name:'Salesforce Admin',
            date:'13/11/2022',
            certid:'2705457',
            image: Images + '/Funky_Image/admin.png',

        },
        {
            id:'2',
            name:'Platform Developer 1',
            date:'22/02/2021',
            certid:'15727',
            image: Images + '/Funky_Image/pd1.png',
        },
        
        {
            id:'3',
            name:'JavaScript Developer 1',
            date:'22/02/2021',
            certid:'15797',
            image: Images + '/Funky_Image/js.png',
        },
        {
            id:'4',
            name:'Experience cloud Consultant',
            date:'04/06/2023',
            certid:'3450986',
            image: Images + '/Funky_Image/experience.png',
        },
    ];
}