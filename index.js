document.getElementById('targetDate').valueAsDate = new Date();

// Function to calculate and display the countdown
function updateCountdown() {
    const targetDate = new Date('2025-07-14T23:59:59');
    const now = new Date(); // Get the current date and time
    const timeDifference = targetDate - now; // Calculate the difference in milliseconds

    if (timeDifference <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById('myBirthday').textContent = "Countdown Complete!";
    } else {
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        const secondsOnText = Math.floor(timeDifference / 1000);
        document.getElementById('myBirthday').textContent = `I would like to start a job in programming latest 
                on my birthday in 14th of July 2025, which is in \n ${secondsOnText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} seconds`;
    }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call immediately to show the first update without waiting
updateCountdown();



function updateCountdown2() {
    const helper = document.getElementById("targetDate").value +"T23:59:59"
    const targetDate2 = new Date (helper)
    console.log(targetDate2)
    const now2 = new Date(); // Get the current date and time
    const timeDifference2 = targetDate2 - now2; // Calculate the difference in milliseconds

    if(timeDifference2) {
        if (timeDifference2 <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            document.getElementById('yourBirthday').textContent = "Countdown Complete!";
        } else {
            const seconds2 = Math.floor((timeDifference2 % (1000 * 60)) / 1000);
            const secondsOnText2 = Math.floor(timeDifference2 / 1000);
            document.getElementById('yourBirthday').textContent = `Seconds left for your birthday: ${secondsOnText2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        } 
    } else {
        document.getElementById('yourBirthday').textContent = "";
    }
}

// Update every second
const countdownInterval2 = setInterval(updateCountdown2, 1000);

// Call immediately to show the first update without waiting
updateCountdown2();

const darkTema = document.getElementById("darkTema");
const lightTema = document.getElementById("lightTema");
const parent = document.getElementById("links");
const allNestedElements = parent.querySelectorAll("*")


darkTema.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    
    document.getElementById("icons").style.backgroundColor = "white";
    document.getElementById("icons2").style.backgroundColor = "white";
    document.getElementById("icon1").style.border = "3px solid black";
    document.getElementById("icon2").style.border = "3px solid black";
    document.getElementById("icon3").style.border = "3px solid black";
    document.getElementById("icon4").style.border = "3px solid black";
    document.getElementById("icon5").style.border = "3px solid black";
    document.getElementById("icon6").style.border = "3px solid black";
    document.getElementById("icon7").style.border = "3px solid black";

    allNestedElements.forEach(element => {
        element.style.backgroundColor = 'black';
        element.style.color = 'white';
    });
});

lightTema.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
    
    document.getElementById("icon1").style.border = "none";
    document.getElementById("icon2").style.border = "none";
    document.getElementById("icon3").style.border = "none";
    document.getElementById("icon4").style.border = "none";
    document.getElementById("icon5").style.border = "none";
    document.getElementById("icon6").style.border = "none";
    document.getElementById("icon7").style.border = "none";

    allNestedElements.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
    });
});

const image = document.getElementById("picture_mee");
let xPos = 0;
let yPos = 0;

image.addEventListener('click', function() {
    // Increment the position to move the image
    xPos += 10;  // Move 10px to the right
    yPos += 5;  // Move 5px down

    // Update the image position using inline styles
    image.style.transform = `translate(${xPos}px, ${yPos}px)`;
  });
