let previousBox = null;
let isAnimating = false;

function showBox(day) {
    if (isAnimating) return; 
    isAnimating = true;

    const buttonColor = getComputedStyle(document.querySelector(`.${day}`)).backgroundColor;

    if (previousBox) {
        previousBox.style.transition = "top 1s ease-out, background-color 1s ease-out, border-width 1s ease-out";
        previousBox.style.top = "-700px"; 
        previousBox.style.backgroundColor = previousBox.style.borderColor;
        previousBox.style.borderWidth = "3px"; 

        setTimeout(() => {
            isAnimating = false; 
        }, 1000); 
    } else {
        isAnimating = false; 
    }

    const newBox = document.createElement("div");
    newBox.classList.add("color-box");

  
    newBox.style.position = "absolute";
    newBox.style.left = "65%"; 
    newBox.style.transform = "translateX(-50%)"; 
    newBox.style.width = "300px"; 
    newBox.style.height = "300px"; 
    newBox.style.backgroundColor = buttonColor;
    newBox.style.border = `3px solid ${buttonColor}`;
    newBox.style.transition = "top 1s ease-out, background-color 1s ease-out, border-width 1s ease-out";
    newBox.style.top = "-400px"; 

    document.body.appendChild(newBox);

    setTimeout(() => {
        newBox.style.top = "30%"; 
    }, 100);

    setTimeout(() => {
        newBox.style.backgroundColor = "transparent";
        newBox.style.borderWidth = "5px";
    }, 500);

    previousBox = newBox;
}
