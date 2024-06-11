import java.util.Scanner;
public class Main{
    public static void main(String[] args){
        //New jTO object
        justTryingOut jTO = new justTryingOut();
        
        //New Scanner object for user input
        Scanner sc = new Scanner(System.in);
        String input = "";

        //print hello, bye, or nothing from input, loop until user says stop
         while (!input.equalsIgnoreCase("stop")) {
            System.out.println("1. print Hi, 2. print bye, 3. print nothing ig. say stop to stop");
            input = jTO.speak(sc.next());
        } 
        //close the scanner
        sc.close();
    
    }
}
