var screen = document.querySelector('#screen'); 
var button = document.querySelectorAll('.button');
for (item of button) 
{ 
    item.addEventListener('click', (e) => 
    {  
      buttontext = e.target.innerText; 
      //innerText element er text ke set or return kore.
        if(buttontext == '×'){
            buttontext = '*';
        }
        if(buttontext == '÷') {
          buttontext = '/';
        }
        screen.value += buttontext;
    }  );
}
function backspc() 
{
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function e() 
{
    screen.value = 2.71828182846;
}

function sin() {
    screen.value = Math.sin(screen.value);
}
function asin() { 
    screen.value = Math.asin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function acos() {
    screen.value = Math.acos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function atan() {
    screen.value = Math.atan(screen.value);
}

function fact()
{
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) 
    {
        f = f*i;
    }
    i = i - 1;
    screen.value = f;
}

function pow() 
{
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() 
{
    screen.value = Math.sqrt(screen.value);
}
/*function sqrt3() 
{
    screen.value = Math.sqrt(screen.value,3);
}*/
function todeg()
{
    let pi = 3.14159265359;
    let deg=(screen.value* (180 / pi));
    screen.value=deg;
}
function torad()
{
    let pi = 3.14159265359;
    let redi = (screen.value* (pi/180));
    screen.value=redi;
}

function log() 
{
    screen.value = Math.log10(screen.value);
}

function ln() 
{
    screen.value = Math.log(screen.value);
}

function pi() 
{
    screen.value = 3.14159265359;
}
