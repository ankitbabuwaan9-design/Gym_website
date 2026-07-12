const button=document.querySelector("button");

button.addEventListener("click",()=>{

// alert("Welcome To FitZone Gym");

});

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const message=document.getElementById("message").value;

if(name==="" || email==="" || phone==="" || message===""){
alert("Please fill all fields");
return;
}

alert("Message Sent Successfully!");

contactForm.reset();

});

}