
public class Employee1 {
    
    private String name;
    private double salary;

    public Employee1(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    
    public void printDetails() {
        System.out.println("Employee Name: " + name);
        System.out.println("Salary: $" + salary);
    }

    
    public static void main(String[] args) {
        
        Employee1 emp1 = new Employee1("shourya", 50000);

       
        emp1.printDetails();        
    }
}
