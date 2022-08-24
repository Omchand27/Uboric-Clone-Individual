let form = document.querySelector("#footForm")
form.addEventListener("submit", getEmail)

function getEmail(e){
    e.preventDefault();
    if(document.querySelector("#email").value == ""){
        alert("Please Enter Your Email")
    }else{
        alert("Thank You")
    }
}