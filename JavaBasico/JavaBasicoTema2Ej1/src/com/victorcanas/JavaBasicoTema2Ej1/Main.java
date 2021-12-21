package com.victorcanas.JavaBasicoTema2Ej1;

import java.util.Scanner;

public class Main {
    /**
     * VAT in percent
     */
    public static final float VAT = 21;


    public static void main(String[] args){
        System.out.println("Set the price that you need to calculate with VAT (" + VAT + "%)");
        Scanner scanner = new Scanner(System.in);
        float price = scanner.nextFloat();
        float priceWithVAT = getPriceWithVAT(price);
        System.out.println("A price of " + price + " with VAT is increased to " + priceWithVAT);
    }

    private static float getPriceWithVAT(float price){
        float incr = price * (VAT/100);
        return price + incr;
    }
}
