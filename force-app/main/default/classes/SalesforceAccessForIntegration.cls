@RestResource(urlMapping='/Projects/*')
global without sharing class SalesforceAccessForIntegration {
    
   
    @HttpGet
    global static List<Projects__c> getProjects(){      
       return [Select Id,Name,Description__c,Technologies_Used__c From Projects__c]; 
    }
    
    @HttpPost
    global static Projects__c createProject(String projectName) {
        Projects__c projects = new Projects__c(
            Name=projectName
          );
        insert projects;
        return projects;
    }   

}