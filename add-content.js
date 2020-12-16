let getsection = function(){
    let userInput = prompt("please enter the programming language you use?");
    let section = '';

    while(userInput !=="python" && userInput!=='javascript' && userInput !=="java" && userInput!=='c++'){
        userInput = prompt("please enter one of this programming language python, java, javascript and c++");

    }

    if (userInput === 'python'){
        section = '<section id="one" class="section-one back-one"><div><h1>Progamming Language</h1><p>    A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers</p> <img src="images/python.png"></img></div></section>'
    }
    if (userInput === 'java'){
        section = '<section id="one" class="section-one back-one"><div><h1>Progamming Language</h1><p>    A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers</p> <img src="images/java.jpg"></img></div></section>'
    }
    if (userInput === 'javascript'){
        section = '<section id="one" class="section-one back-one"><div><h1>Progamming Language</h1><p>    A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers</p> <img src="images/js.png"></img></div></section>'
    }
    if (userInput === 'c++'){
        section = '<section id="one" class="section-one back-one"><div><h1>Progamming Language</h1><p>    A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers</p> <img src="images/c++.jpg"></img></div></section>'
    }

    return section;

}

let howmany = function(){
    let count = prompt("How many language do you use");
    while(count ==='' || isNaN(count)){
        count = prompt('Please enter a number !!');
    }
    return count;
}

let showlanguage = function(){
    let langage = getsection();
    let total = howmany();
    let result ='';

    for(let i = 0;  i < total ;  i++ ){
        result = result + '<p> Language # ' + i+ ' '+ langage + '</p>' ;

    }
    return result;
}
