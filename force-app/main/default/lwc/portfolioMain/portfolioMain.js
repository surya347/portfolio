import { LightningElement } from 'lwc';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class PortfolioMain extends LightningElement {

    get youtubeLogo(){
        return Images + '/funky_image/youtubeLogo.jpg';

    }    
    
    get InstagramLogo(){
        return Images + '/funky_image/InstagramLogo.webp';

    } 

    get linkedinLogo(){
        return Images + '/funky_image/linkedinLogo.png';

    } 

    get profileImage(){

        return Images + '/funky_image/kakashi.jpg';


    }


} 