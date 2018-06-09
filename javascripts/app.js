// Rover Object Goes Here
// ======================

var rover = {direction: "N", coordinates: {x : 0, y : 0}};

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N": 
      rover.direction = "W";
      break;
    case "W": 
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!", rover);
}

function turnRight(rover){

  switch (rover.direction) {
    case "N": 
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "W";
      break;
    case "W": 
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!", rover);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.coordinates.y--;
      break;
    case "W": 
      rover.coordinates.x--;
      break;
    case "S": 
      rover.coordinates.y++;
      break;
    case "E": 
      rover.coordinates.x++;
      break;
  }
  console.log("moveForward was called", rover);
}

function comandos(rover){
  var string = "rffrfflfrff";
  for (i = 0; i < string.length; i++) {
    var comando = string[i];
      
    // Prueba con if  

    /*
    if (comando == "r") {
      turnRight(rover);   
    }
    else if (comando == "f") {
      moveForward(rover);
    }
    else if (comando == "l") {
      turnLeft(rover);
    }
    */
    switch(comando){
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
    }
  }
}

//No supe como hacer el tracking (iteration 5) 
/*
var travelLog  = [];
travelLog.push(x);
travelLog.push(y);
*/
