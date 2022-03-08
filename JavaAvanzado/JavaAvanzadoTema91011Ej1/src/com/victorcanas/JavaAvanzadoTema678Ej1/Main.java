package com.victorcanas.JavaAvanzadoTema678Ej1;

public class Main {

    public static void main(String[] args){
        Phone phone1 = Phone.getInstance();
        Phone phone2 = Phone.getInstance();

        phone1.setPowerOn(true);
        phone2.setPowerOn(false);

        System.out.println("Power on from phone1: " + phone1.getPowerOn());
        System.out.println("Power on from phone2: " + phone1.getPowerOn());
        System.out.println("The power on from phone1 is false because phone1 and phone2 are the same instance");
    }
}
