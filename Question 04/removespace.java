class Solution {
    public void answer(Object input) {
      String str = (String) input;
      String a = "";
  
          for (int i = 0; i < str.length(); i++) {
              if (str.charAt(i) != ' ') { 
                  a = a + str.charAt(i);
              }
          }
  
          System.out.println(a);
    }
  }