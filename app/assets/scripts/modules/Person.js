class Person{
    constructor(fullName,favColor){
        this.name=fullName;
        this.favColor=favColor;
    }
    
   greet(){
        console.log("Hi there, my name is "+name+"and my favorite color is "+this.favColor+".");
    }
}

//module.exports=Person; webpack method exporting class
export default Person; //Es6 way of exports