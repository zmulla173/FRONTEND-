
function details(naam,umar){
    this.name = naam;
    this.age = umar;
    this.description = function (){
        return(`my name is ${this.name} and age ${this.age}`)
    }
}

let user = new details("rahul",25);
let user1 = new details("priya",24);
console.log(user);
console.log(user.description());
console.log(user1);
console.log(user1.description());