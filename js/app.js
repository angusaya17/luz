var lightStates = {rojo:0,amarillo:1,verde:2};
var currentState = lightStates.rojo;

interval = "";

const pasos = [
    [rojo, 15000],
    [amarillo, 1000]
    [verde, 15000]
];

function launchAuto()
{
  if(interval == "")
  {
    interval = setInterval(function(){
    changeState();
    }, 1000);
  }
  else
  {
      clearInterval(interval);
  }
}
document.getElementById('btnSem').onclick=function(){
    changeState();
};


function changeState()
{
    clear();
  switch(currentState)
  {
    case lightStates.rojo:
    {
      document.getElementById("rojo").className ="luz rojo";
      currentState =  lightStates.amarillo;
    }
    break;
    case lightStates.amarillo:
    {
      document.getElementById("amarillo").className ="luz amarillo";
      currentState = lightStates.verde;
    } break;
     case lightStates.verde:
    {
      document.getElementById("verde").className ="luz verde";
      currentState = lightStates.rojo;
    } break;
   }
}

function clear(){
   document.getElementById("rojo").className ="luz apagada";
   document.getElementById("amarillo").className ="luz apagada";
   document.getElementById("verde").className ="luz apagada";
}