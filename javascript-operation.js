

var g = prompt("enter guess number between 25 and 50  ?");

guess(g);

function guess(g){
    if(g >=  25 && g < 30){
        alert('you almost there');

    }
    else if (g <= 50 && g > 30){
        alert('you Far away for the correct answer');
    }

    else if(g == 30){
        alert('you have the correct answer');
    }
}



var con = confirm("let's play new game")
var result ;
if( con == true){
     alert("you  wont to paly");
    game();
} else{
    alert( "you don't wont to paly");
}


function game(){
    var count = 0;
    alert("remmber the number 100254");
    result = prompt("how meny number you see?");
    var convert = parseInt(result);
    if (convert == 6){
        count +=1;
        alert('thats right it is the correct number');
    }else{
        alert('thats not right it is not the correct number');
    }

    result = prompt("if you add the last to  number to each other what is the result ?");
    var number = parseInt(result);
    if (number == 9){
        count +=1;
        alert('thats right it is the correct number');
    }else{
        alert('thats not right it is not the correct number');

    }

    result = prompt("if you add 1000 to the number?");
    var add = parseInt(result);
    if (add == 101254){
        count +=1;
        alert('thats right it is the correct number');
    }else{
        alert('thats not right it is not the correct number');

    }

    if (count == 3){
        alert("you an awsome person thank you :) ");
        var check =  confirm(" do you wont to try again");
        if( check == true){
            alert("Let's start again");
           game();
       } else{
           alert( "you don't wont to paly");
       }
    }
    else{
      
        var check =  confirm("you have some question with wrong answer, do you wont to try again");
        if( check == true){
            alert("Let's start again");
           game();
       } else{
           alert( "you don't wont to paly");
       }
    }
    



}