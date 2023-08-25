import { LightningElement, track } from 'lwc';
import getFeaturedProduct from '@salesforce/apex/ProductsController.getFeaturedProduct';

export default class FeaturedProducts extends LightningElement {

    featuredArray = [];
    isfeatureavailable = false;

    connectedCallback() {

        getFeaturedProduct()
            .then(featured => {
                this.featuredArray = featured;
                if (this.featuredArray.length > 0) {
                    this.isfeatureavailable = true;
                } else {
                    this.isfeatureavailable = false;
                }
            })
            .catch(error => {
                console.error('error:' + JSON.stringify(error))
            })

    }
}