package com.victorcanas.JavaBasicoTema4Ej1;

public class SmartDevice {
    protected Float version;
    protected String company;
    protected Integer battery;


    public SmartDevice(){

    }

    public SmartDevice(Float version, String company, Integer battery) {
        this.version = version;
        this.company = company;
        this.battery = battery;
    }

    public Float getVersion() {
        return version;
    }

    public void setVersion(Float version) {
        this.version = version;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Integer getBattery() {
        return battery;
    }

    public void setBattery(Integer battery) {
        this.battery = battery;
    }

    @Override
    public String toString() {
        return "SmartDevice{" +
                "version=" + version +
                ", company='" + company + '\'' +
                ", battery=" + battery +
                '}';
    }
}
