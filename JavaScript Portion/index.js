
//He taught a lot of other stuff but i feel like when i need them i will know what to do so i didn't bother adding it
//I Learn All Of This From 'BRO CODE' :) Go Subscribe To Become A Fellow Bro ;)



//THESE ARE THE MAIN FUNCTIONS
function VariablesLearning(){
    //let is the best practice used when declaring a variable
    let age //This is a variable
    
    //This how to assign variables in JS
    age = 15// i have assigned an integer to this variable
    
    console.log( "Age at beginning : ", age)
    document.getElementById("line1").innerHTML = "Age at beginning : " + age
    
    //alert("Age : " + age)
    
    age = "I dunno anymore" // I have now assigned a string to the variable
    
    console.log( "Age now : ", age)
    document.getElementById("line12").innerHTML ="Age now : " + age
    //alert("Age : " + age)
    
    age = false // I have assigned a boolean to this variable
    
    document.getElementById("line13").innerHTML ="Has Age ? : " + age
    console.log("Has Age? : ", age)
    
    document.getElementById("line14").innerHTML ="Had Age ? : " + !age
    console.log("Had Age? : ", !age)
}
function UserInputLearning(){
    //Easy way
    //Window prompt
    //EasyWay()
    ///Harder But Normal Way
    //Referencing from an input field in the html file
    HarderWay()
}
function TypeConversion(){

    let age
    document.getElementById('agebutton').onclick = function(){
        age = document.getElementById('myage').value
        //The input Taken form an input field is almost always a string
        //So i need to convert this one to a number, because you cant increment a string by a number

        age = Number(age) //This converts the value in age to a number
        let r = age
        console.log(age)
        document.getElementById('ageline').innerText = age

        let f = String(48)//This Converts The Number 48 To A String
        console.log(f)

        //As for Boolean, if the value is not empty it will return as true
        let g
        //This is how to convert a value to Boolean
        g = Boolean('')
        let d = Boolean('something')
        console.log(g, d)
        console.log(age,f,g,d,r)
    }

}
function JavaScriptMaths(){
    let x = 4.1938
        y = 5.321
        z =7.854 
        a = 8
        b = 64
    let c 
    let f 
    //This rounds up a decimal
    x = Math.round(x)
    console.log(x)
    //This rounds down a decimal
    y = Math.floor(y)
    console.log(y)
    //This rounds up a decimal
    z = Math.ceil(z)
    console.log(z)
    //This raises a number to a power of the second argument
    a = Math.pow(a, 2)
    console.log(a)
    //This square roots a number
    b = Math.sqrt(b)
    console.log(b)
    //This returns the highest number among the numbers
    c = Math.max(a,b,x,y,z)
    console.log('Highest is:',c)
    //This returns the lowest of the set of numbers
    f = Math.min(a,b,c,x,y,z)
    console.log('Lowest is:' ,f)
}
function ChangeNumber(){
    let num = 0
    document.getElementById('decreasebtn').onclick = function(){
        num -= 1
        document.getElementById('num').innerHTML = num
    }
    document.getElementById('increasebtn').onclick = function(){
        num += 1
        document.getElementById('num').innerHTML = num
    }
    document.getElementById('resetbtn').onclick = function(){
        num = 0
        document.getElementById('num').innerHTML = num
    }
}
function GeneratePassword(){
    document.getElementById('genpassbtn').onclick = function(){
        let pass
        pass = "gfvfs"
        document.getElementById('password').innerHTML = pass
    }
}

//These are the subfunctions
function EasyWay(){
    let name = window.prompt('What is your name?')
if(name == ''){
    console.log('Please Refresh And Input A Name')
    document.getElementById("nameline").innerHTML = 'Please Refresh And Input A Name'
}else{console.log('Is this your name? : ' + name)
    document.getElementById("nameline").innerHTML = 'Is this your name? : ' + name}
}
function HarderWay(){
    let name
    document.getElementById('button').onclick = function(){
    name = document.getElementById('myname').value
    console.log('Is this your name? : ' + name)
    document.getElementById("nameline").innerHTML = 'Hello ' +name
}
}

//These Are The Important Functions, not Sub-Functions, that will do something when called
//VariablesLearning()
//UserInputLearning()
//TypeConversion()
//JavaScriptMaths()
//ChangeNumber()
GeneratePassword()