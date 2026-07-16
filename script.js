// ================= CONTACT =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {
            alert("Please fill all fields");
            return;
        }

        alert("Message Sent Successfully!");
        contactForm.reset();

    });

}


// ================= REGISTER =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {

            const response = await fetch("http://localhost:3001/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })

            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "login.html";
            } else {
                alert(data.message);
            }

        } catch (err) {
            console.error(err);
            alert("Server Error!");
        }

    });

}


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {

            const response = await fetch("http://localhost:3001/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if (response.ok) {

                alert("Login Successful!");

                setTimeout(() => {
                    window.location.replace("project.html");
                }, 300);

            } else {

                alert(data.message);

            }

        } catch (err) {

            console.error(err);
            alert("Server Error!");

        }

    });

}