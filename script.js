const words = [
    " Data Science ",
    " Data Analytics ",
    " UI/UX Designer ",
    " Business Analytics "
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];

    if (isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, j--);
    } else {
        document.getElementById("typing").textContent =
            currentWord.substring(0, j++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && j === currentWord.length) {
        speed = 1500; // pause
        isDeleting = true;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// animations api and files
    function hamburg(){
 const navbar = document.querySelector(".dropdown")
 navbar.style.transform = "translateY(0px)"
    }
 function cancel(){
  const navbar = document.querySelector(".dropdown")
 navbar.style.transform = "translateY(-500px)"
  }

  AOS.init({offset:0});
                                                         



// email notifications

           // for email js


    (function(){
        emailjs.init("IiJDsdvObylFh672N"); 
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_cptguje",  
            "template_kovyvpp", 
            this
        )
        .then(function() {
            alert("Message sent successfully ✅");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send ❌");
            console.log(error);
        });
    });



                                                          