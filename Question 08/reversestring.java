class Solution {
  public void answer(Object input) {
       String n = (String) input;
	     String rev="";
	     
	     int len=n.length();
	     
	     for(int i=len-1; i>=0; i--)
	     {
	    	 rev = rev+n.charAt(i);
	     }
	     System.out.println("\"" + rev + "\"");
		 
  }
}
