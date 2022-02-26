class transport {
    constructor(title, model, color) {
        this.title = title;
        this.model = model;
        this.color = color;
    }
    startEngine(){
        if (this.title.toLowerCase() === 'Lexus'){
            return console.log(`${this.title} engine cracked`);
        }
        console.log(`${this.title} ${this.model} engine started`);
    }
}
class car extends transport{
    constructor(title, model, color, maxSpeed) {
        super(title, model, color);
        this.maxSpeed = maxSpeed;
    }
    getMaxS
}
const bmw = new car ('BMW', 'E36', 'gray' , 260)
bmw.startEngine();

const lexus = new car ('Lexus', 'LX470', 'pink', 360)