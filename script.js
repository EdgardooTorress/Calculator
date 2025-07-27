
const display = document.querySelector(".display"); // Select the display
const buttons = document.querySelectorAll(".btns") // Select all buttons


//Loop throught each button and add event listener
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const btnclicked = button.textContent; // Get the text inside the button that was clicked

        // If the reset button is clicked, clear display to 0.
        if(button.id === "reset"){
            display.textContent = "0";
            return; // Stop here
        }

        // IF the delete button is click, delete number or operator
        if(button.id === "delete"){
            // If there is only one character left or it says "Error", reset to 0.
            if(display.textContent.length === 1 || display.textContent === "Error!"){
                display.textContent = "0";
            }else{
            display.textContent = display.textContent.slice(0, -1); // Remove the last character
        }
        return; // Stop here  
    }

    // If the button equal is clicked.
    if(button.id === "equal"){
        try {
        // Try to calcaulate the result using eval function.
        const result = eval(display.textContent);

        // If result is inifinty (dividing by 0), display Error.
        if (result == "Infinity"){
         display.textContent = "Error!";
        }
            else {
            display.textContent = result; //Show result
        }
        
        } catch{ // If there is any syntax error, show 'Erorr'.
            display.textContent = "Error!"
        }
        return;
    }

    
        // If the display is "0" || "Error", clilc button to change it
        if (display.textContent === "0"  || display.textContent === "Error!"){
            display.textContent = btnclicked;
        }else{
            display.textContent += btnclicked; // 
        }
    }); 
}); 



// Key function to accept keys in keyboard
document.addEventListener('keydown', function(event){
    const key = event.key;  

    // This object links keyboard keys to buttons
    const keyMap = {
        '0' : '0',
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        '5' : '5',
        '6' : '6',
        '7' : '7',
        '8' : '8',
        '9' : '9',
        '+' : '+',
        '-' : '-',
        '*' : '*',
        '/' : '/',
        '.' : '.',
        'Enter' : '=',
        '=' : '=',
        'Backspace' : 'DEL',
        'Escape' : 'AC',
    };

    // check if key pressed is in key map
    if (key in keyMap){
        const targetValue = keyMap[key];

    // Go throurh each button and find the one that matches
        for(let i = 0; i < buttons.length; i++){
            let button = buttons[i];
            let buttonText = button.textContent;

            // Check if button text matches key value
            if(
                buttonText === targetValue ||
                (button.id === 'equal' && targetValue === '=') ||
                (button.id === 'delete' && targetValue === 'DEL') ||
                (button.id === 'reset' && targetValue === "AC")
            ){
                button.click();  // Act like the user clicked the button
                break; // stop looking  once match is found
            }
        }
    }

});
