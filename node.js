document.addEventListener("DOMContentLoaded",function(){
let turn =true;
let status=document.getElementById("status-text");
let restart=document.getElementById("restart-btn");
restart.addEventListener('click',function(){
    location.reload();
})
pattern=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let cellbtn=document.getElementsByClassName('cell');
function iszero(){
for(let i=0;i<pattern.length;i++){
if(cellbtn[pattern[i][0]].innerText=='O' && cellbtn[pattern[i][1]].innerText=='O' && cellbtn[pattern[i][2]].innerText=='O')
    return true;
}return false;
}
function isone(){
for(let i=0;i<pattern.length;i++){
if(cellbtn[pattern[i][0]].innerText=='X' && cellbtn[pattern[i][1]].innerText=='X' && cellbtn[pattern[i][2]].innerText=='X')
    return true;
}
return false;
}
function isfull(){
if(cellbtn[0].disabled &&
cellbtn[1].disabled &&
cellbtn[2].disabled &&
cellbtn[3].disabled &&
cellbtn[4].disabled &&
cellbtn[5].disabled &&
cellbtn[6].disabled &&
cellbtn[7].disabled &&
cellbtn[8].disabled
)return true;
else return false;
}
function iswinner(){
if(iszero()){alert('PLAYER O IS THE WINNER')};
if(isone()) {alert("PLAYER X IS THE WINNER")};
if(isfull()){alert("GAME DRAW");}
}

let cellbutton = document.querySelectorAll('.cell');
cellbutton.forEach(cellelement => {
cellelement.addEventListener('click',function(){
    cellelement.disabled = true;
       if(turn){   
    cellelement.innerText= 'O';
    status.innerText="Player X's turn";
turn =false; 
}
else {cellelement.innerText='X';
    status.innerText="Player O's turn"
    turn =true;}
    iswinner();
})});


   });
























