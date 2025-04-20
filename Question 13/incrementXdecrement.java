public class incrementXdecrement {
    public static void main(String[] args) {
        int x=5;
        // System.out.println(x);
        // x++;  // x++ is equal to x = x+1
        // System.out.println(x);
        // x--;  // x-- is equal to x = x-1
        // System.out.println(x);
        System.out.println(++x);
        System.out.println(x++);
        System.out.println(x);
        // x++ is "first print x then increment it"
        // ++x is "first increment x then use it"
    }    
}