package com.victorcanas.JavaBasicoTema4Ej1;

public class SmartPhone extends SmartDevice {
    private String braceletColor;


    public SmartPhone() {
    }

    public SmartPhone(Float version, String company, Integer battery, String braceletColor) {
        super(version, company, battery);
        this.braceletColor = braceletColor;
    }

    public String getBraceletColor() {
        return braceletColor;
    }

    public void setBraceletColor(String braceletColor) {
        this.braceletColor = braceletColor;
    }

    @Override
    public String toString() {
        return "SmartPhone{" +
                "version=" + version +
                ", company='" + company + '\'' +
                ", battery=" + battery +
                ", braceletColor='" + braceletColor + '\'' +
                '}';
    }
}
