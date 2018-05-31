var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var rightPressed = false;
var leftPressed = false;
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;
var score =0;

document.addEventListener("keydown", keyDownfunc, false); // keydown = 키 누르는중
document.addEventListener("keyup", keyUpfunc, false); //keyup = 키 누르는거 멈출때

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
}
function keyDownfunc(e) {
    if(e.keyCode == 68) { //아스키코드 d
        rightPressed = true; //키 눌릴때 작동
      
    }
    else if(e.keyCode == 83) { //아스키코드 s
        leftPressed = true; //키 눌릴때 작동
    }
}
function keyUpfunc(e) { 
    if(e.keyCode == 68) { 
        rightPressed = false; //키 안눌릴때 false
    }
    else if(e.keyCode == 83) {
        leftPressed = false; //키 안눌릴때 false
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
      score++; //벽부딪치면 점수++
    }
    if(y + dy < ballRadius) {
        dy = -dy;
      score++; //벽부딪치면 점수++
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
          score++; //패들에 부딪치면 점수++
   }
        else {
            //alert("GAME OVER"); 알람뜨는거 귀찮아서 삭제  
          
            document.location.reload(); //무한 alert방지해주는 코드
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) { //패들 벽 나가는거 방지
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
    
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Score: "+score, 0, 30); //캔버스내에서 위치설정
}
setInterval(draw, 10);