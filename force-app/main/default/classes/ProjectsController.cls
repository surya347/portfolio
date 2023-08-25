public class ProjectsController {
    
    @AuraEnabled(cacheable=true)
    public static List<Projects__c> getProjects(){
        
        List<Projects__c> projectList = [Select Id,Name,Description__c,Technologies_Used__c From Projects__c];
        
        if(!projectList.isEmpty()){
            return projectList;
        }
        return NULL;
    }

    @AuraEnabled(cacheable=true)
    public static List<Projects__c> getProjectsById(String projectType){
        
        List<Projects__c> projectList = [Select Id,Name,Description__c,Type__c,Technologies_Used__c From Projects__c
                                         Where Type__c =: projectType];
        
        if(!projectList.isEmpty()){
            return projectList;
        }
        return NULL;
    }

}