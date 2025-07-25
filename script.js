// make buttons clickable 
// make buttons display whatever you click
// make add, minus, multiply etc 
// display error if something is wrong 
// have a button to reset


let myBtn = document.querySelector('.numbersBtn'); 
const display = document.querySelector('#resultDisplay')

// myBtn.addEventListener('click', function() {
//     display.textContent = myBtn.textContent;
//     console.log('button clicked finally')
// })

for (let i = 0; i < myBtn.length; i++){
    document.querySelectorAll('.numbersBtn')[i].addEventListener
    ("click",function(){ alert('Button clicked');

});
}