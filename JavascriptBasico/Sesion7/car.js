class Car {
    #weight;
    #power;
    #brand;
    
    constructor(weight, power, brand) {
        this.#weight = weight;
        this.#power = power;
        this.#brand = brand;
    }

    get Weight() {
        return this.#weight;
    }
    set Weight(weight) {
        this.#weight = weight;
    }
    get Power() {
        return this.#power;
    }
    set Power(power) {
        this.#power = power;
    }
    get Brand() {
        return this.#brand;
    }
    set Brand(brand) {
        this.#brand = brand;
    }
};

export { Car as Car };