import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { CurrentPageReference } from 'lightning/navigation';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class Navbar extends NavigationMixin(LightningElement) {

    isCloseIcon = false;
    sfnoob_logo = Images + '/funky_image/sfnoob_logo.jpg';


    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
           console.log("currentPageReference:"+JSON.stringify(currentPageReference))
       }
    }

    onMenuClick(event){
        this.isCloseIcon = true;
    }

    onCloseClick(){
        this.isCloseIcon = false;
    }

    navigationToHomePage(){

      this.isCloseIcon = false;

          // Navigate to the About page
      this[NavigationMixin.Navigate]({ 
        type: 'comm__namedPage',
        attributes: {
          name: 'Home'
        }
      });

    }

    navigationToAboutPage(){

      this.isCloseIcon = false;

        // Navigate to the About page
      this[NavigationMixin.Navigate]({
        type: 'comm__namedPage',
        attributes: {
          name: 'about__c'
        }
    });
    }
}