import { LightningElement ,api} from 'lwc';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class PortfolioMain extends LightningElement {

    get youtubeLogo(){
        return Images + '/Funky_Image/youtubeLogo.jpg';

    }    
    
    get InstagramLogo(){
        return Images + '/Funky_Image/InstagramLogo.webp';

    } 

    get linkedinLogo(){
        return Images + '/Funky_Image/linkedinLogo.png';

    } 

    get profileImage(){

        return Images + '/Funky_Image/person.jpg';


    }




}