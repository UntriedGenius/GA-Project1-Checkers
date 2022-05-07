

// add all pieces to an array

// let redPieces = document.getElementsByTagName('img');
// redArr.push(redpieces)
let redPieces = document.querySelectorAll(".red");
let redArr = Array.from(redPieces);


let blkPieces = document.querySelectorAll('.black');
let blkArr = Array.from(blkPieces);
console.log(redArr);
console.log(blkArr);

let tes = document.getElementById('space')
let tes2 = document.getElementById('space2')
let moveDot =  document.getElementById('full')
let moveDot2 =  document.getElementById('full2')

let dot = document.querySelector('.dot')
let dots = document.querySelectorAll('.dot')
let record = document.getElementById("logc")

let board = document.querySelector('.board')
console.log(board);
// create a function where a click selects a piece and then another click moves that piece
// 1. Select a piece
board.addEventListener('click', function(e) {
  if (e.target === blkArr[0]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[1]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[2]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[3]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[4]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[5]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[6]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[7]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[8]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[9]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[10]){
  e.target.classList.add('selected')
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
  }
  if (e.target === blkArr[11]){
  e.target.classList.add('selected')
    dots[4].style.opacity = "1"
    dots[5].style.opacity = "1"
    dots[6].style.opacity = "1"
    dots[7].style.opacity = "1"
  console.log(e.target)
   } 
   // 2. Move Piece 
  if (e.target === dots[0]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[1]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[2]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[3]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[4]){
    let selected = document.querySelector('.selected')
    tes.appendChild(selected)
    selected.classList.remove('selected')
    e.target.classList.add('moving')
    let moving = document.querySelector('.moving')
    moveDot.appendChild(moving)
    e.target.classList.remove('moving')
    console.log(e.target);
    let newEl = document.createElement('li')
    record.appendChild(newEl)
    newEl.innerText = 'C1 to D2'

    dots[4].style.opacity = "0"
    dots[5].style.opacity = "0"
    dots[6].style.opacity = "0"
    dots[7].style.opacity = "0"
  }
  if (e.target === dots[5]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  if (e.target === dots[6]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  if (e.target === dots[7]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  
  // if (e.target.classList.contains('dot')){
  //   document.getElementsByClassName('dot').appendChild('.selected')
  // }
 })

 board.addEventListener('click', function(e) {
  if (e.target === redArr[0]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
   console.log(e.target)
  }
  if (e.target === redArr[1]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
   console.log(e.target)
  }
  if (e.target === redArr[2]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
   console.log(e.target)
  }
  if (e.target === redArr[3]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[4]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[5]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[6]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[7]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[8]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[9]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[10]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
  }
  if (e.target === redArr[11]){
  e.target.classList.add('selected')
    dots[0].style.opacity = "1"
    dots[1].style.opacity = "1"
    dots[2].style.opacity = "1"
    dots[3].style.opacity = "1"
    console.log(e.target)
   } 
   // 2. Move Piece 
  if (e.target === dots[0]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[1]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[2]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    console.log(e.target);
  }
  if (e.target === dots[3]){
    let selected = document.querySelector('.selected')
    tes2.appendChild(selected)
    selected.classList.remove('selected')
    e.target.classList.add('moving')
    let moving = document.querySelector('.moving')
    moveDot2.appendChild(moving)
    e.target.classList.remove('moving')
    console.log(e.target);
    let newEl = document.createElement('li')
    record.appendChild(newEl)
    newEl.innerText = 'F8 to E7'
    dots[0].style.opacity = "0"
    dots[1].style.opacity = "0"
    dots[2].style.opacity = "0"
    dots[3].style.opacity = "0"
  }
  if (e.target === dots[4]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);

 
  }
  if (e.target === dots[5]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  if (e.target === dots[6]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  if (e.target === dots[7]){
    // let selected = document.querySelector('.selected')
    // tes.appendChild(selected)
    // selected.classList.remove('selected')
    // e.target.classList.add('moving')
    // let moving = document.querySelector('.moving')
    // moveDot.appendChild(moving)
    // e.target.classList.remove('moving')
    // console.log(e.target);
  }
  
  // if (e.target.classList.contains('dot')){
  //   document.getElementsByClassName('dot').appendChild('.selected')
  // }
 })

// recognize player turns
// Disable movement for any pieces whoes turn it is Not.
// If jump exists no other moves
// switch between active players with each turn
// reset button
// moving a piece adds to the log
// stopwatch
// moving the first piece activates the stopwatch
// losing a piece adds 1 to a counter
