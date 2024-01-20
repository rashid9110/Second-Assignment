//create displayInfo function
function displayInfo(name,role){
    // this.name=name;
    // this.role=role;
    console.log(`name =>${name} and role =>${role}`)
}

//Use call to invoke the displayInfo function with specific arguments
displayInfo.call(null,'rashid','developer')


//Use apply to invoke the displayInfo function with arguments passed as an array
displayInfo.apply(null,['salamt','doctor'])

//Ceate anot:e function named geet t:at logs a geeting wit: t:is conte tG
function greet(){
    console.log(`Hello, ${this.name}!`);
}

const boundGreet =greet.bind({name:"jane"});
//Use bind to ceate a new function boundGeet wit: a specific conte t and log t:e geeting.
boundGreet();