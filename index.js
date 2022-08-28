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
    }else if(name != "" || email != "" || password != ""){
        regArr.push(obj)
        localStorage.setItem("registerdata", JSON.stringify(regArr))
        alert("Register Successful")
        closeReg()
    }else{
        alert("Wrong Details")
    }
}

document.querySelector("#login").addEventListener("submit", loginData)

function loginData(e){
    e.preventDefault();
    regArr.forEach(function(ele){
        
        if(document.querySelector("#loginEmail").value === ele.email && document.querySelector("#password").value === ele.password){
            alert("Login Successful" + " " +ele.name)
            closeNav()
        }else{
            alert("Wrong Details")
        }
    })
    
}

document.querySelector("#box1").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#box2").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#box3").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#bath").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#elect").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#cloth").addEventListener("click", function(){
    location.href="shop.html"
})

document.querySelector("#paint").addEventListener("click", function(){
    location.href="shop.html"
})