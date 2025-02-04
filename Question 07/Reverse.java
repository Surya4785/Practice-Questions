class Solution {
    public void answer(Object input) {
      String a = (String) input;
      String[] word=a.split(" ");
          String reverse_String="";
          for(String w:word) {
              String reverse_word="";
              for(int i=w.length()-1;i>=0;i--) {
                  reverse_word=reverse_word+w.charAt(i);
              }
          reverse_String=reverse_String+reverse_word+" ";
              
          }
          System.out.println(reverse_String);
  
    }
  }