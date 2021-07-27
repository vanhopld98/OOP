class Rat {
    name;
    weight;
    speed;
    status;

    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }

    say() {
        alert("chít chít")
    }

    checkStatus() {
        if (this.weight <= 0) {
            this.status = false;
        } else {
            this.status = true;
        }
    }
}