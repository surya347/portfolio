@isTest
private class TaskUtilTest {
    
    @isTest static void testLeadStateCA() {
        String value  = TaskUtil.getTaskPriority('CA');
        system.assertEquals(value, 'High');
    }
    
    
    @isTest static void testLeadStateAny() {
        String value  = TaskUtil.getTaskPriority('AC');
        system.assertEquals(value, 'Normal');
    }
    
    @isTest static void testLeadStateNull() {
        String value  = TaskUtil.getTaskPriority('');
        system.assertEquals(value, null);
    }
    

}