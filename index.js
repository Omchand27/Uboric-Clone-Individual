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

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function openSearch() {
    document.getElementById("mySearch").style.width = "450px";
  }

function closeSearch() {
    document.getElementById("mySearch").style.width = "0";
  }

function openReg() {
    document.getElementById("myRegister").style.width = "450px";
  }

function closeReg() {
    document.getElementById("myRegister").style.width = "0";
  }

document.querySelector("#regis").addEventListener("submit", regData)

let regArr = JSON.parse(localStorage.getItem("registerdata")) || [];
function regData(e){
    e.preventDefault();
    let name = document.querySelector("#regUsename").value

    let email = document.querySelector("#regEmail").value

    let password = document.querySelector("#regPassword").value

    let obj = {
        name,
        email,
        password
    }

    if(name == "" || email == "" || password == ""){
        alert("Some Fields are empty")
    }else{
        regArr.push(obj)
        localStorage.setItem("registerdata", JSON.stringify(regArr))
        alert("Register Successful")
    }
}

document.querySelector("#login").addEventListener("submit", loginData)

let data = JSON.parse(localStorage.getItem("registerdata")) || [];

function loginData(e){
    e.preventDefault();
    data.forEach(function(ele){
        console.log();
        if(document.querySelector("#loginEmail").value === ele.email && document.querySelector("#password").value === ele.password){
            alert("Login Successful")
        }else{
            alert("Wrong Details")
        }
    })
    
}