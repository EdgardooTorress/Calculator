
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btns")



buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const btnclicked = button.textContent;
        if(button.id === "reset"){
            display.textContent = "0";
            return;
        }
        if(button.id === "delete"){
            if(display.textContent.length === 1 || display.textContent === "Error!"){
                display.textContent = "0";
            }else{
            display.textContent = display.textContent.slice(0, -1);
        }
        return;
    }
    if(button.id === "equal"){
        try {
        const result = eval(display.textContent);
        if (result == "Infinity"){
         display.textContent = "Error!";
        }
            else {
            display.textContent = result;
        }
        
        } catch{
            display.textContent = "Error!"
        }
        return;
    }

        if (display.textContent === "0"  || display.textContent === "Error!"){
            display.textContent = btnclicked;
        }else{
            display.textContent += btnclicked;
        }
    })
})