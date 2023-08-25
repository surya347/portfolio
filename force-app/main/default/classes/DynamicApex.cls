public class DynamicApex {
    
    public static void testMethods(){
        // Create a new account as the generic type sObject
        sObject s = new Account();
        
        // Verify that the generic sObject is an Account sObject
        System.assert(s.getsObjectType() == Account.sObjectType);
        
        // Get the sObject describe result for the Account object
        Schema.DescribeSObjectResult dsr = Account.sObjectType.getDescribe();
        
        // Get the field describe result for the Name field on the Account object
        Schema.DescribeFieldResult dfr = Schema.sObjectType.Account.fields.Name;
        
        // Verify that the field token is the token for the Name field on an Account object
        System.assert(dfr.getSObjectField() == Account.Name);
  
        
        // Get the field describe result from the token
        dfr = dfr.getSObjectField().getDescribe();
        system.debug('dfr:'+dfr);
    }
    
}