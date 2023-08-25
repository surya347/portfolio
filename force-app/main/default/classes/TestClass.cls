public class TestClass {
    
    public static void  getRecord(String ids){
        
        Account acc = [Select id,name,phone,industry from account where id =: ids];
        system.debug('acc:'+acc);
    }

}