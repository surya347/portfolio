@isTest
public class PortfolioClassTest {
    
    @testSetup static void testMethods(){
         List<Projects__c> pList = new  List<Projects__c>();
            for(Integer i=0;i<3;i++) {
                Projects__c a = new Projects__c(Name='TestProject' + i);
                pList.add(a);
            }
        
        insert pList;
    }
    
    @isTest static void testProjectList(){
        List<Projects__c> pro = [ SELECT Id, Name, Description__c, Technologies_Used__c, Website__c FROM Projects__c ];
        List<Projects__c> p = PortfolioClass.getProjectList();
        
        system.assertEquals(pro, p);   
    }
    
     @isTest static void testProjectLists(){
        
        List<Projects__c> pro = [ SELECT Id, Name, Description__c, Technologies_Used__c, Website__c FROM Projects__c ];
        List<Projects__c> p = ProjectsController.getProjects();
        system.assertEquals(pro, p);   
         
    }

  @isTest static void testProjectListss(){
     
        List<Projects__c> pro = [ SELECT Id, Name, Description__c, Technologies_Used__c, Website__c FROM Projects__c];
      	delete pro;
        List<Projects__c> p = ProjectsController.getProjects();
	    system.assertEquals(p,NULL);   
        
    }


}