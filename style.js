
var name;

name=window.prompt("pleas enter your name");
document.writeln("<h1><center>welcome Mr/Mrs  " + name + "  to our site</center></h1>");
var n = new Date();
var hour= n.getHours();

if(hour<12)
    window.alert(' Good Morning Mr/Mrs ' + name );

if(hour>12){
hour=hour-12;
if(hour<6)
    window.alert(" Good Afternoon Mr/Mrs " + name ); 
if(hour>6)
    window.alert(" Good Evning Mr/Mrs " + name ); 

}