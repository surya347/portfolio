import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class CertficationSection extends LightningElement {

    certficationsData =[
        {
            id:'1',
            name:'Platform Developer 1',
            date:'22/02/2021',
            certid:'15727',
            image: Images + '/funky_image/pd1.png',
        },
        {
            id:'2',
            name:'Platform Developer 2',
            date:'22/02/2021',
            certid:'15327',
            image: Images + '/funky_image/pd2.png',

        },
        {
            id:'3',
            name:'JavaScript Developer 1',
            date:'22/02/2021',
            certid:'15797',
            image: Images + '/funky_image/js.png',
        },
        {
            id:'4',
            name:'JavaScript Developer 1',
            date:'22/02/2021',
            certid:'15790',
            image: Images + '/funky_image/js.png',
        },
    ];
}