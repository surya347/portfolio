@isTest
private class TestAccountDeletion {
    
    @isTest static void TestDeleteAccountWithOneOpportunity(){
        // Test data setup
        Account acct = new Account(Name='Test Account');
        insert acct;
        Contact con = new Contact();
        con.AccountId = acct.Id;
        con.FirstName = 'Salesforce';
        con.LastName = 'Noob';
        insert con;
        
        // Perform test
        Test.startTest();
        Database.DeleteResult result = Database.delete(acct, false);
        Test.stopTest();
        // Verify 
        // In this case the deletion should have been stopped by the trigger,
        // so verify that we got back an error.
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0);
        System.assertEquals('Cannot delete account with related contact.',
                             result.getErrors()[0].getMessage());
    }

}