function auth() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const usern = "admin12@gmail.com";
        const passn = "123456";

        const user_name = document.getElementById('userch').value;
        const user_pass = document.getElementById('userps').value;

        if (user_name === usern && user_pass === passn) {
            window.location.href = 'index.html';
            alert("Login Successfully");
        }
        else {
            alert("Login Failed");
        }
    });
};

function signauth() {

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const uname = document.getElementById('sign-userch').value;
        const pas = document.getElementById('sign-userps').value;
        const confirmpas = document.getElementById('sign-confirmpass').value;

        if(uname !== " " && pas !== " " && confirmpas !== " ")
        {
            if(pas === confirmpas)
            {
                window.location.href = 'index.html';
                alert("Signup Successfull");
                return;
            }
            else
            {
                alert("Password not Matched");
                return;
            }
        }
        else
        {
            alert("Empty Values");
        }
    });
};


const pw = document.querySelectorAll(".eye-icon");

pw.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".pass");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                
                // The classList property returns the CSS classnames of an element. 
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

