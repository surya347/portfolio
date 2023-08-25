public without sharing class pdfController {
    
    public List<Projects__c> project{get;set;}
    public String currentUserId{get;set;}
    public String firstName{get;set;}
    public String lastName{get;set;}
 
    public pdfController(){
        currentUserId  = UserInfo.getUserId();
        system.debug('currentUserId:'+currentUserId);
        if(currentUserId != null && String.isNotBlank(currentUserId)){
            project = [SELECT Id,Name,Description__c,Technologies_Used__c,OwnerId,Owner.FirstName,Owner.LastName from Projects__c WHERE OwnerId =:currentUserId ];
            firstName = project[0].Owner.FirstName;
            lastName = project[0].Owner.LastName; 
        }
    }
    
    @AuraEnabled
      public static String downloadPDF() {
           PageReference pdfPage = Page.SuryaResume;
            Blob pdfBlob = pdfPage.getContent();
            String base64Pdf = EncodingUtil.base64Encode(pdfBlob);
            return base64Pdf;
        
      }

    @AuraEnabled(cacheable=true)
    public static List<Projects__c> fetchRecords(){
        try {
          return [Select id,Name,Description__c,Technologies_Used__c from Projects__c];
        } catch (Exception e) {
            System.debug('Exception: '+e.getMessage());
            return null;
        }
    }
    
    @AuraEnabled
    public static String sendPdf(String contactId) {
        PageReference pdf = new pagereference('/apex/ContactDataPDF?id='+contactId);
        pdf.getParameters().put('id', contactId);
     
        Blob body;
        try {
            // returns page as a PDF
            body = pdf.getContent();
        } catch (Exception e) {
            body = Blob.valueOf('data');
        }
 
        //insert content version
        ContentVersion CV = new ContentVersion();
        CV.Title = 'TechdicerContact.pdf';
        CV.PathOnClient = 'TechdicerContact.pdf';
        CV.VersionData = body;
        CV.FirstPublishLocationId = contactId;
        insert CV;
         
        Messaging.EmailFileAttachment attach = new Messaging.EmailFileAttachment();
        attach.setContentType('application/pdf');
        attach.setFileName('TechdicerContact.pdf');
        attach.Body = body;
 
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] {'rijwanmohmmed@gmail.com'});
        mail.setSubject('Generate PDF from Apex Salesforce');
        mail.setHtmlBody('Generate PDF from Apex Salesforce');
        mail.setFileAttachments(new Messaging.EmailFileAttachment[] {attach}); 
        // Send the email
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
        return 'Email sent Successfully with PDF.';
   }

}