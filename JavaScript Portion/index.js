//He taught a lot of other stuff but i feel like when i need them i will know what to do so i didn't bother adding it
//I Learnt All Of This From 'BRO CODE' :) Go Subscribe To Become A Fellow Bro ;)



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
    //EasyWay()
    //Window prompt
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
function RollDice(){
    document.getElementById('rollbtn').onclick = function(){
        if(document.getElementById('dienumber').value != 0){
            let die = []
            let done = Math.abs(document.getElementById('dienumber').value)
            while(done > 0){
                let dievalue = Math.floor(Math.random()*6) + 1
                die.push(dievalue)
                done--
            }
            let dog = die.toString().replaceAll(',',' ')
            document.getElementById('die').innerHTML = dog
        }else{
        document.getElementById('die').innerHTML = 'Please Input A Value'
        }
    }
}

//These are some programs i decided to make after learning the basics of JavaScript
function GeneratePassword(){

    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let uletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let symbols = '!@#$%^&*_+=-\|;.,/'
    document.getElementById('genpassbtn').onclick = function(){
        let pass = []
        let done = Number(document.getElementById('pwd').value)
        let hasnum = document.getElementById('hasnumbers').checked
        let hasupalph = document.getElementById('hasupalph').checked
        let haslowalph = document.getElementById('haslowalph').checked
        let hassymbols = document.getElementById('hassymbols').checked
        if(hasnum || hasupalph || haslowalph || hassymbols){
            //This makes sure that the amount of characters that should be generated is not 0b
            if(done != 0){
                for(done; done > 0; done--){
                    let g = Math.round(Math.random() * 3) + 1
                    //If you want to use a switchstatement to evaluate conditions
                    //You pass in 'true' as the argument
                    switch(true){
                        case(g == 1):
                            if(haslowalph){
                                let c = Math.floor(Math.random() * (letters.length - 1))
                                let a = letters.charAt(c)
                                console.log(a)
                                pass.push(a)
                            }else{done++}
                            break
                        case(g==2):
                            if(hasnum){
                                let b = Math.floor(Math.random() * (numbers.length - 1))
                                let j = numbers.charAt(b)
                                console.log(j)
                                pass.push(j)
                            }else{done++}
                            break
                        case(g==3):
                            if(hasupalph){
                                let f = Math.floor(Math.random() * (--uletters.length))
                                let k = uletters.charAt(f)
                                console.log(k)
                                pass.push(k)
                            }else{done++}
                            break
                        case(g==4):
                            if(hassymbols){
                                let r = Math.floor(Math.random() * (--symbols.length))
                                let y = symbols.charAt(r)
                                console.log(y)
                                pass.push(y)
                            }else{done++}
                            break
                        default:
                            console.log("Bro What The Hell Is Going On Here?");
                    }
                }
                document.getElementById('password').innerHTML = String(pass).replaceAll(',','')
            }
            else{
                document.getElementById('password').innerHTML = 'Insert A Number'
            }

        }else{
            document.getElementById('password').innerHTML = "Check A Box"
        }
    }
}
function ListMaker(){
    let list = []
    document.getElementById('iteminput').onclick = function(){
        document.getElementById('iteminput').value = ''
    }
    document.getElementById('additem').onclick = function(){
        list.push(document.getElementById('iteminput').value)
        let j = document.getElementById('iteminput').value
        document.getElementById('list').innerHTML += "<input type='checkbox' id='checklist'>"
        document.getElementById('list').innerHTML += j
        document.getElementById('list').innerHTML += '<br>'
    }
}
function MonthAmountChecker(){
    document.getElementById('checkamount').onclick = function(){
        let month = document.getElementById('month').value
        if(month =='september' || month =='april' ||month == 'june' ||month == 'november'){
            document.getElementById('amt').innerHTML = `Amount : 30 days`
        }
        if(month =='january'||month =='march'||month =='may'||month =='july'||month =='august'||month =='october'||month =='december'){
            document.getElementById('amt').innerHTML = `Amount : 31 days`
        }
        if(month=='february'){
            document.getElementById('month2').innerHTML = `Amount : 28.25 days`
        }
    }
    document.getElementById('monthbtn').onclick = function(){
        let x = document.getElementById('month2num')
        if(x==6||x==4||x==11||x==9){
            document.getElementById('month2').innerHTML = `Amount : 30 days`
        }
        else if(x==1||x==3||x==5||x==7||x==8||x==10||x==12){
            document.getElementById('month2').innerHTML = `Amount : 31 days`
        }
        else if(x==2){
            document.getElementById('month2').innerHTML = `Amount : 28.25 days`
        }else{
            document.getElementById('month2').innerHTML = 'INPUT A VALID NUMBER'
        }
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
    document.getElementById('namebutton').onclick = function(){
        let name = document.getElementById('myname').value
        console.log(`I see, so your name is ${name} , Good to know`)
        document.getElementById("nameline").innerHTML = `Hello ${name} , How are you?` //I used Back Ticks Here
    }
    document.getElementById('agebutton').onclick = function(){
        let age = String(document.getElementById('myage').value)
        console.log('Is your age : ' + age)
        document.getElementById("ageline").innerHTML = 'Your Age Is ' +age
    }
}

//These Are The Important Functions, not Sub-Functions, that will do something when called
//VariablesLearning()
UserInputLearning()
//TypeConversion()
//JavaScriptMaths()
ChangeNumber()
RollDice()
GeneratePassword()
ListMaker()
MonthAmountChecker()