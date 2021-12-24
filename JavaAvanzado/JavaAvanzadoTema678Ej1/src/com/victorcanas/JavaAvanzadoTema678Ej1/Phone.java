package com.victorcanas.JavaAvanzadoTema678Ej1;

public class Phone {
    private static Phone phone;
    private boolean powerOn;


    private Phone(){
        this.powerOn = false;
    }

    public static Phone getInstance(){
        if (phone == null){
            phone = new Phone();
        }
        return phone;
    }

    public boolean getPowerOn(){
        return this.powerOn;
    }

    public void setPowerOn(boolean powerOn){
        this.powerOn = powerOn;
    }
}
