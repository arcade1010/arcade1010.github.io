public class justTryingOut {
    private String hello;
    private String bye;
    private String nothing;

    public justTryingOut() {
        this.hello = "Hello";
        this.bye = "Bye";
        this.nothing = "Northing";
    }

    public String speak(String s){
                   
            switch (s) {
                case "stop":
                    System.out.println("Stopping");
                    return s;
                case "1":
                    sayHello();
                    return s;
                case "2":
                    sayBye();
                    return s;
                case "3":
                    sayNothing();
                    return s;
                
                default:
                    return s;
            } 
        }
    

    public void sayHello(){
        System.out.println(hello);
    }
    public void sayBye(){
        System.out.println(bye);
    }
    public void sayNothing(){
        System.out.println(nothing);
    }

   
}
