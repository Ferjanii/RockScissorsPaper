
//function Playing user
function PlayerUser(userrandom) {
  document.querySelector(".img-gameU").src = `./img/${userrandom}.png`;
    return userrandom;
  }
  //function Playing computer
  function PlayerComputer() {
    var computerrandom = parseInt(Math.random() * 3);
    document.querySelector(".img-gameC").src =`./img/${computerrandom}.png`;
    return computerrandom;
  }

  var scoreUser=0;
  var scoreComputer=0;
  var resultfin=document.querySelector(".result-box")
  //0:Rock
  //1:Scissors
  //2:Paper
    //function test winer
function testWin(Puser,Pcomputer){
    if( (Puser===0 && Pcomputer===1)||(Puser===2 && Pcomputer===0)||(Puser===1 && Pcomputer===2)){
        resultfin.innerHTML = "You Win";
        scoreUser=scoreUser+1;
    }
    return scoreUser;   
}
  //function test lose 
function computerService(Puser,Pcomputer) {
    
    if( (Puser===0 && Pcomputer===2)||(Puser===2 && Pcomputer===1)||(Puser=== 1 && Pcomputer===0)){
        resultfin.innerHTML = "You lose";
        scoreComputer=scoreComputer+1;
    }
    return scoreComputer;
}
  //function test draw 
function testDraw(Puser,Pcomputer){
    if( (Puser===0 && Pcomputer===0)||(Puser===1 && Pcomputer===1)||(Puser===2 && Pcomputer===2)){
          return false;
    } 
}

var user=document.querySelector(".box");
var computer=document.querySelector(".box");

document.addEventListener("click", function(event){
    if (event.target.className == "images") {
        var pressedBtn = event.target
        var selected = parseInt(pressedBtn.src.split("img/")[1])
        var Puser=PlayerUser(selected)
        var Pcomputer=PlayerComputer(computer)
        var result =testWin(Puser,Pcomputer);
        var resComp =  computerService(Puser,Pcomputer)
        document.querySelector("#score-user").innerHTML=result;
        document.querySelector("#score-computer").innerHTML=resComp;  
        if(testDraw(Puser,Pcomputer)===false){
            return (resultfin.innerHTML = "Draw")
        }
        
    }
});