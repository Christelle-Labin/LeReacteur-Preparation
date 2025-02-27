const language = "javascript";

let number = 0;

while (number <= language.length - 1) {
    if (language[number] === "a") {
        console.log(language[number]);
    }
    number++;
}

for (let i = 0; i < language.length - 1; i++) {
    if (language[i] === "a") {
        console.log(language[i]);
    }    
}