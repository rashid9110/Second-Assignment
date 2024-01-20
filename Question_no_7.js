//Ceate an object named calculato wit: met:ods add, subtact, and multiplyG

const calculator={
    add: function(a,b){
        return a+ b;
    },
    sbtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    /*Implement t:e calculate met:od in t:e calculato object, w:ic: takes an opeation ('add', 'subtact', o'multiply') and two numbesG*/
    calculate: function(operation,num1,num2){
        if (operation==='add'){
            return this.add(num1,num2);
        }
        else if(operation==='subtract'){
            return this.subtract(num1,num2);
        }
        else if(operation==='multiply'){
            return this.multiply(num1,num2);
        }
        else{
            return NaN;
        }
    }
}
//Use call to pefom an addition opeation using t:e calculate met:odG
const result=calculator.calculate.call(calculator,'add',5,3)
console.log('Addition result :',result)

//Use apply to pefom a multiplication opeation using t:e calculate met:od wit: aguments as an aayG
const result2=calculator.calculate.apply(calculator,['multiply',5,3])
console.log("multiplication is :",result2)

/*Ceate anot:e object named discountCalculato wit: a discount pecentage popety and a met:od
applyDiscountG*/
const discountCalculator={
    percentage:10,
    Applydiscount: function(amount){
        const discountAmount= ( this.percentage/100)*amount;
        return amount-discountAmount;
    }
}

/*Use bind to ceate a new function calculateDiscount t:at is bound to t:e discountCalculato object and
can be eused.*/
const Calculatediscount=discountCalculator.Applydiscount.bind(discountCalculator,100);

const discountAmount=Calculatediscount()
console.log('Discounted amount',discountAmount)