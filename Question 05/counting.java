class Solution {
    public void answer(Object input) {
      String str = (String) input;
      int count = 1;
  
          for (int i = 0; i < str.length(); i++) {
              if (str.charAt(i) == ' ' && str.charAt(i + 1) != ' ') {
                  count++;
              }
          }
          System.out.println(count);
    }
  }