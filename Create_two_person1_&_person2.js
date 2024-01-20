const person1={
    name :'rashid',
    age:20,
}
const person2={
    name :'salamat',
    age:21,
}
function introduce(){
    console.log(`hello, i'm ${this.name}, and I'm ${this.age} years old.`)
}
introduce.call(person2)