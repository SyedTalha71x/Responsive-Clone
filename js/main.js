const hamburger1 = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger1.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger1.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger1.classList.remove("active");
    navMenu.classList.remove("active");
}

const contactform = document.getElementById('contact-form');
const username = document.getElementById('name');
const useremail = document.getElementById('email');
const useraddress = document.getElementById('address');
const userreview = document.getElementById('review');
const btn = document.getElementById('submitbtn');

isemailvalid = (email) =>{
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailpattern.test(email);
}

function handlesubmit(event){
    event.preventDefault();

    const name = username.value;
    const email = useremail.value;
    const review = userreview.value;

    if(!name || !email || !review)
    {
        alert("These Fields are requried..")
        return;
    }

    if(!isemailvalid(email))
    {
        alert("Please Enter a Valid Email");
        return;
    }

    alert("Contact Form Submitted Successfully")
}

btn.addEventListener('click', handlesubmit);

// function darkbtn(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }



