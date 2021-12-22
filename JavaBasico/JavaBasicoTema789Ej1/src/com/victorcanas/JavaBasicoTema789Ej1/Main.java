package com.victorcanas.JavaBasicoTema789Ej1;

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        exercise0(scanner);
        exercise1();
        exercise2();
        exercise3();
        exercise4();
        exercise5();
        exercise6();
        exercise7();
        exercise8();
        exercise9(scanner);
    }


    private static void exercise0(Scanner scanner){
        System.out.println("0. Reverse Text");
        System.out.println("Set text:");
        String text = scanner.nextLine();
        System.out.println(reverseText(text));
    }

    private static String reverseText(String text){
        String result = "";
        for (int i = text.length() - 1; i >= 0; i--){
            result += text.charAt(i);
        }
        return result;
    }


    private static void exercise1(){
        System.out.println("\n1. One-dimensional array of Strings");
        String[] array = new String[3];
        array[0]="hello";
        array[1]="how are you";
        array[2]="bye";
        for (String text : array){
            System.out.println(text);
        }
    }


    private static void exercise2(){
        System.out.println("\n2. Two-dimensional array of Integers");
        Integer[][] array = new Integer[3][3];
        array[0][0] = 5;
        array[0][1] = 7;
        array[0][2] = 2;
        array[1][0] = 1;
        array[1][1] = 4;
        array[1][2] = 8;
        array[2][0] = 9;
        array[2][1] = 4;
        array[2][2] = 6;
        for (int i = 0; i < array.length; i++) {
            for (int x = 0; x < array[i].length; x++) {
                System.out.println("Value of position " + x + " from position " + i + " = " + array[i][x]);
            }
        }
    }


    private static void exercise3(){
        System.out.println("\n3. Vector");
        Vector vector = new Vector();
        vector.add(2);
        vector.add(4);
        vector.add(1);
        vector.add(8);
        vector.add(7);
        vector.remove(1);
        vector.remove(1);
        for (int i = 0; i < vector.size(); i++){
            System.out.println(vector.get(i));
        }
    }


    private static void exercise4(){
        System.out.println("\n4. The problem of using a Vector with the default capacity if we had \n" +
                "1000 items to add would be that by default when the vector capacity is reached, \n" +
                "it is multiplied by 2. So adding 1000 items it would create an array with a capacity of 2000, \n" +
                "being too much space for what we need");
    }


    private static void exercise5(){
        System.out.println("\n5. ArrayList and LinkedList");
        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add("hello");
        arrayList.add("how are you");
        arrayList.add("fine");
        arrayList.add("bye");
        LinkedList<String> linkedList = new LinkedList<String>(arrayList);
        for (String item : arrayList){
            System.out.println(item);
        }
        for (String item : linkedList){
            System.out.println(item);
        }
    }


    private static void exercise6() {
        System.out.println("\n6. ArrayList: adding and deleting");
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++){
            arrayList.add(i + 1);
        }
        for (int i = 0; i < arrayList.size(); i++){
            if (arrayList.get(i) % 2 == 0){
                arrayList.remove(i);
                i--;
            } else{
                System.out.println(arrayList.get(i));
            }
        }
    }


    private static void exercise7() {
        System.out.println("\n7. Exceptions");
        try {
            int number = 10;
            int result = divByZero(number);
            System.out.println(result);
        } catch (Exception e){
            System.out.println("This can not be done");
        } finally{
            System.out.println("Code demo");
        }
    }

    private static int divByZero(int number) throws ArithmeticException {
        return number / 0;
    }


    private static void exercise8() {
        System.out.println("\n8. InputStream and PrintStream");
        copyFile("FileIn.txt", "FileOut.txt");
    }

    private static void copyFile(String fileIn, String fileOut) {
        try {
            InputStream in = new FileInputStream(fileIn);
            byte[] data = in.readAllBytes();
            in.close();
            PrintStream out = new PrintStream((fileOut));
            out.write(data);
            out.close();
            System.out.println("Copied file successfully");
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }


    private static void exercise9(Scanner scanner) {
        System.out.println("\n9. My program");
        boolean exit = false;
        do {
            System.out.println("Click enter to create a user or \n" +
                    "introduce 'access' to get information from a specific user \n" +
                    "or introduce 'exit' to finish the program");
            String answer = scanner.next();
            if (answer.equalsIgnoreCase("exit")) {
                exit = true;
                continue;
            } else if (answer.equalsIgnoreCase("access")) {
                getUser(scanner);
                continue;
            }
            createUser(scanner);
        } while (!exit);
    }

    private static void createUser(Scanner scanner){
        try {
            System.out.println("Introduce name:");
            String name = scanner.next();
            System.out.println("Introduce surname:");
            String surname = scanner.next();
            System.out.println("Introduce phone number:");
            int phoneNumber = scanner.nextInt();
            FileWriter fileOut = new FileWriter("Exercise9.txt", true);
            String user = "{name: " + name + ", surname: " + surname + ", phoneNumber: " + phoneNumber + "},";
            fileOut.write(user);
            fileOut.close();
            System.out.println("User created successfully");
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private static void getUser(Scanner scanner){
        try{
            System.out.println("Introduce phone number");
            int phoneNumber = scanner.nextInt();
            InputStream file = new FileInputStream("Exercise9.txt");
            byte[] data = file.readAllBytes();
            String[] users = new String(data).split(";");
            String userFound = "";
            for (String user : users) {
                int startIndex = user.indexOf("phoneNumber:") + 13;
                String phone = user.substring(startIndex, user.indexOf('}'));
                if (phoneNumber == Integer.parseInt(phone)) {
                    userFound = user;
                    break;
                }
            }
            if (!userFound.equals("")){
                System.out.println("User found:\n" + userFound);
            } else {
                System.out.println("User not found");
            }
        } catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
