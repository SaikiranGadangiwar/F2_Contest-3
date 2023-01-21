function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }



    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 4){
        seterror("pass", "*Password should be atleast 4 characters long!");
        returnval = false;
    }
   
    if(password.search(/[0-9]/)==-1){
        seterror("pass", "*Password should contains atleast 1 NUMARIC character");
        returnval = false;
    }
    if(password.search(/[a-z]/)==-1){
        seterror("pass", "*Password should contains atleast 1 LOWER CASE character");
        returnval = false;
    }
    if(password.search(/[A-Z]/)==-1){
        seterror("pass", "*Password should contains atleast 1 UPPER CASE character");
        returnval = false;
    }
    if(password.search(/[!\@\#\$\%\^\&\*\(\)\-\=]/)==-1){
        seterror("pass", "*Password should contains atleast 1 SPECIAL character");
        returnval = false;
    }
    if(password==name){
        seterror("pass", "password cant be same as name")
        returnval = flase;
    }
    if(password==email){
        seterror("pass", "password cant be same as eamil")
        returnval = flase;
    }
   



    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }



    let userDetails = [];

function addUser(name, email, password) {
    let id = userDetails.length + 1;
    let user = {
        id: id,
        name: name,
        email: email,
        password: password
    };

    // Check if the email is already registered
    let emailExists = userDetails.some(user => user.email === email);
    if (emailExists) {
        seterror("cpass", "*Email already registered.!");
        //returnval = false;
        return false;
        //console.error("Error: Email already registered.");
    } else {
        userDetails.push(user);
        
    }
}


    return returnval;
}


// adding users 

// // Initialize an empty array to store user details
// let userDetails = [];

// // Function to add user details to the array
// function addUser(name, email, password) {
//     // Generate a unique id for the user
//     let id = userDetails.length + 1;

//     // Create an object to store the user details
//     let user = {
//         id: id,
//         name: name,
//         email: email,
//         password: password
//     };

//     // Add the user object to the userDetails array
//     userDetails.push(user);
// }

// // Example usage:
// addUser("Abhishek Kumar", "myemail@gmail.com", "Abhishek123#!");
// console.log(userDetails);
// // Output: [{id: 1, name: "Abhishek Kumar", email: "myemail@gmail.com", password: "Abhishek123#!" }]




// Example usage:
addUser("John Doe", "johndoe@example.com", "password123");  // Output: "User added successfully."
addUser("Jane Doe", "johndoe@example.com", "password456");  // Output: "Error: Email already registered."


