class dog {
    constructor(name,weight,height,color, voiceText) {
        this.name = name ;
        this.weight = weight;
        this.height = height;
        this.color = color;
        this.voiceText = voiceText
    }
}

const rex = new Dog ('Rex', 40, 1.7, 'white') ;
const shatik = new Dog ('sharik', 20, 0.5, 'white') ;

voice()
{
    console.log(this.voiceText)
}