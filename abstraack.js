class Animal {
    constructor(type,title,extinct, geo) {
    this.type = type;
    this.title = title;
    this.extinct = extinct;
        this.geo =geo;
    }
    // info (){
    //     console.log(`Title`:${this.})
    // }
}
class tiger extends Animal{
    constructor(type , title, extinct , geo, havchik ) {
        super(type , title, extinct , geo);
        this.havchik = havchik;
    }
}
const tiger = new tiger (
    `predator`,
    `tiger`,
    false,
    `Africa`,
    `Meat`
)

class shark  extends  Animal{
    constructor(type , title, extinct,geo,havchik) {
        super(type , title, extinct,geo,havchik);
    }

}

const shark = new shark (
    `predator`,
    `Shark`,
    false,
    `ocean`,
    `fish`
)
