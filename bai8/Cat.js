class Cat {
    name;
    weight;
    speedMax;

    constructor(name, weight, speedMax) {
        this.name = name;
        this.weight = weight;
        this.speedMax = speedMax;
    }

    say() {
        alert("meow meow");
    }

    catChesMouse(mouse) {
        if (this.speedMax > mouse.speed) {
            this.eatMouse(mouse)
        }
    }

    eatMouse(mouse) {
        if (mouse.status === true) {
            mouse.weight--
            this.weight++
        } else {
            alert("chuột chết r")
        }
        mouse.checkStatus()
    }
}