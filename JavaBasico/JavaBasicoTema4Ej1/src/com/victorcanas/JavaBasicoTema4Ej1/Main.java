package com.victorcanas.JavaBasicoTema4Ej1;

public class Main {

    public static void main(String[] args){
        SmartDevice smartDevice = new SmartDevice(1.0f, "Apple", 100);
        System.out.println(smartDevice.toString());
        SmartDevice smartPhone = new SmartPhone(1.0f, "Apple", 100, "blue");
        System.out.println(smartPhone.toString());
        SmartDevice smartWatch = new SmartWatch(1.0f, "Apple", 100, "red");
        System.out.println(smartWatch.toString());
    }
}
