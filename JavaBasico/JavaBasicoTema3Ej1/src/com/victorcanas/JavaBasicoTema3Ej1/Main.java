package com.victorcanas.JavaBasicoTema3Ej1;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        ArrayList<String> names = getNames();

        String result = "";
        for (String name : names){
            result += name;
        }
        System.out.println("Result: " + result);
    }

    private static ArrayList<String> getNames(){
        ArrayList<String> names = new ArrayList<String>();
        Scanner scanner = new Scanner(System.in);
        boolean finishNames = false;
        while(!finishNames) {
            System.out.println("Set a name to concatenate it with the other names or write exit to get the result");
            String result = scanner.nextLine();
            if (result.toLowerCase().equals("exit")){
                finishNames = true;
            } else{
                names.add(result);
            }
        }
        return names;
    }
}
