// utilisation des instructions if et else
const password = "qwerty";

const passwordLength = password.length;
console.log(passwordLength);

if (passwordLength < 8) {
    console.log("The password is not OK");
} else {
    console.log("The password is Ok");
}


// utilisation des instructions if et else if

const password2 = "querty1234"

const password2Length = password2.length;
console.log(password2Length);

if (password2Length < 8) {
    console.log("The password is not OK");

} else if (password2Length >= 8) {
    console.log("The password is OK");
    
}
