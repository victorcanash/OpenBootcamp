package com.victorcanas.JavaBasicoTema4Ej1;

public class SmartWatch extends SmartDevice {
    private String coverColor;


    public SmartWatch() {
    }

    public SmartWatch(Float version, String company, Integer battery, String coverColor) {
        super(version, company, battery);
        this.coverColor = coverColor;
    }

    public String getCoverColor() {
        return coverColor;
    }

    public void setCoverColor(String coverColor) {
        this.coverColor = coverColor;
    }

    @Override
    public String toString() {
        return "SmartWatch{" +
                "version=" + version +
                ", company='" + company + '\'' +
                ", battery=" + battery +
                ", coverColor='" + coverColor + '\'' +
                '}';
    }
}
