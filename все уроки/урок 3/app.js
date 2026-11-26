const animal={
    name:"murka",
    age:2,
    hasTail:true
}
console.log(animal);



class Animal{
    constructor(option){
        this.name=option.name;
        this.age=option.age;
        this.hasTail=option.hasTail;
        this.sound=option.sound;
    }
    voice(){
        console.log(`${this.name} makes ${this.sound}`);
        
    }
}

const cat=new Animal({
    name:"murka",
    age:3,
    hasTail:true,
    sound:"myahhh",
    owner:"m.black", 
})
console.log(cat);
cat.voice()
const dog=new Animal({
    name:"rex",
    age:5,
    hasTail:true,
    sound:"raww"
})
dog.voice()
