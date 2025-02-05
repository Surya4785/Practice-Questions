class Solution {
  public void answer(Object input) {

         String str = (String) input;
         String org = str;
	     String rev="";
	     
	     int len=str.length();
	     
	     for(int i=len-1; i>=0; i--)
	     {
	    	 rev = rev+str.charAt(i);
	     }
	     if(org.equals(rev))
	     {
	    	 System.out.println("Palindrome");
	     }
	     else
	     {
	    	 System.out.println("Not Palindrome");
	     }
  }
}
