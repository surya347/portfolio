public class ProductsController {

    @AuraEnabled
    public static List<FT_Products__c> getFeaturedProduct(){
        
        List<FT_Products__c> featured = [Select Id,Name,Price__c,Product_Description__c,
                                        Image_Link__c,Image_Link2__c,Image_Link3__c,Category__c,
                                        Image_Link4__c From FT_Products__c Where featured__c = true];
        
        if(!featured.isEmpty()){
            return featured;
        }
        return Null;
    }
}