let start = document.querySelector('#start')
let cards = document.querySelector('#cards')
let sum = document.querySelector('#msg')
let startBtn = document.querySelector('#start-btn')
let addBtn = document.querySelector('#add-btn')
let warning = document.querySelector('#warn')
let main = document.querySelector('#container')
let cardList = [];
 addBtn.addEventListener('click', getRandom)
start.textContent = 'Want to play a round?'
function getRandom(){
   warning.style.display = 'block';
   let newcard = Math.floor(Math.random() * 6)
   cardList.push(newcard)
   warning.textContent = "card added to the basket! you can start the game "
}
function calculate(){
   warning.style.display = 'none';
   let sumIs = 0;
   let textCont = "";
   for(let i=0 ; i < cardList.length ; i++){
      sum.textContent = sumIs + cardList[i];
      cards.textContent = textCont + " " +cardList[i];
      sumIs = sumIs + cardList[i];
      textCont = textCont + " " +cardList[i];
     
      if(sumIs === 21){
         start.textContent = 'Congrats!! You won the game'
         addBtn.style.display = 'none';
         startBtn.style.display = 'none';
         main.style.backgroundColor = "green";
      }
      else if(sumIs > 21){
         start.textContent = 'You are out of the game'
         addBtn.style.display = 'none';
         startBtn.style.display = 'none';
         main.style.backgroundColor = "#AA0000";
      }
   }
} 
startBtn.addEventListener('click', calculate)


