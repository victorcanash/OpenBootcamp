package com.victorcanas.JavaBasicoTema5Ej1;

public class Main {

    public static void main(String[] args){
        CocheCRUD cocheCrud = new CocheCRUDImpl();
        cocheCrud.save();
        cocheCrud.findAll();
        cocheCrud.delete();
    }
}
