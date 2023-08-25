import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { CurrentPageReference } from 'lightning/navigation';
import Images from '@salesforce/resourceUrl/Funky_Image';


export default class Navbar extends NavigationMixin(LightningElement) {

    isCloseIcon = false;
    sfnoob_logo = Images + '/funky_image/sfnoob_logo.jpg';
    showPortfolio = false;
    page


    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
           console.log("currentPageReference:"+JSON.stringify(currentPageReference))
           this.page = currentPageReference.attributes.name;

          if(this.page == 'Home'){
            
            this.applyCss('home');

          }else if(this.page == 'projects__c'){
            this.applyCss('project_page');

          }else if(this.page == 'about__c'){
            this.applyCss('about_page');

          }else if(this.page == 'contact_us__c'){
            this.applyCss('contact_page');

          }
       }
    }

    applyCss(selectedPage){
      console.log('selectedPage:'+selectedPage)
      // applying css
      if(selectedPage){
       var classNames = this.template.querySelectorAll('.active_nav');
          console.log('classNames.length:'+JSON.stringify(classNames.length))
    
    
            if(classNames.length>0){
              //  this.removeClass();
               this.template.querySelectorAll('.active_nav')[0].classList.remove('active_nav');

            }
    
          var divblock = this.template.querySelector(`[data-id=${selectedPage}]`);

          if(divblock){
            this.template.querySelector(`[data-id=${selectedPage}]`).className='nav-item active_nav';
          } 
         }
    }

    onMenuClick(event){
        this.isCloseIcon = true;
    }

    onCloseClick(){
        this.isCloseIcon = false;
    }

    navigationToPage(event){
				
			event.preventDefault();
      this.isCloseIcon = false;

      var selectedPage = event.currentTarget.dataset.id;
      console.log('selectedPage:'+JSON.stringify(selectedPage))

      if(selectedPage == 'home'){
        // this.navigating('Home',selectedPage);
          this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
              name: 'Home'
            }
        });
      }
      else if(selectedPage == 'about_page'){
        
         // Navigate to the About page
        this[NavigationMixin.Navigate]({
          type: 'comm__namedPage',
          attributes: {
            name: 'about__c'
          }
      });
      }
      else if(selectedPage == 'project_page'){
        // this.navigating('projects__c',selectedPage);
          this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
              name: 'projects__c'
            }
        });
      }
      else if(selectedPage == 'contact_page'){
        // this.navigating('contact_us__c',selectedPage);
          this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
              name: 'contact_us__c'
            }
        });
      }

      
    }

  
    // navigating(pageName,selectedPage){

    //     // Navigate to the About page
    //     this[NavigationMixin.Navigate]({
    //       type: 'comm__namedPage',
    //       attributes: {
    //         name: pageName
    //       }
    //   });

    //   this.applyCssClass(selectedPage);
    // }

    // applyCssClass(selectedPage){

    //    var classNames = this.template.querySelectorAll('.active_nav');
    //       console.log('classNames.length:'+JSON.stringify(classNames.length))
    
    
    //         if(classNames.length>0){
    //            this.removeClass();
    //         }
    
    //       var divblock = this.template.querySelector(`[data-id=${selectedPage}]`);
    
    //       if(divblock){
    //         this.template.querySelector(`[data-id=${selectedPage}]`).className='nav-item active_nav';
    //       } 
     
    // }


    removeClass() {
      this.template.querySelectorAll('.active_nav')[0].classList.remove('active_nav');

  }
}