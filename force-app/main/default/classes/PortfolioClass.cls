public without sharing class PortfolioClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Projects__c> getProjectList(){
        List<Projects__c> pro = [ SELECT Id, Name, Description__c, Technologies_Used__c, Website__c FROM Projects__c ];
        system.debug('pro:'+pro);
        return pro;
        
        /*if(!pro.isEmpty()){
            return pro;
        }else{
            return null;
        }*/
        
    }

}