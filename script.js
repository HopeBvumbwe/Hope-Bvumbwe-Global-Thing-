const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let email = document.getElementById("newsletterEmail").value;

        if (email == "") {
            alert("Please enter your email.");
            return;
        }

        alert("Thank you for subscribing to Bean Boutique!");

        newsletterForm.reset();

    });

}

const popup = document.getElementById("popup");
const claimBtn = document.getElementById("claimBtn");

if (popup && !localStorage.getItem("discountClaimed")) {

    setTimeout(function () {

        popup.style.display = "flex";

    }, 2000);

}

if (claimBtn) {

    claimBtn.addEventListener("click", function () {

        let email = document.getElementById("discountEmail").value;

        if (email == "") {

            alert("Please enter your email.");

            return;

        }

        alert(" Congratulations! Your 10% discount has been claimed.");

        localStorage.setItem("discountClaimed", "yes");

        popup.style.display = "none";

    });

}


const eventForm = document.getElementById("eventForm");

if (eventForm) {

    eventForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("eventEmail").value.trim();

        if (firstName === "" || lastName === "" || email === "") {
            alert("Please fill in all the fields.");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(
            "Registration Successful!\n\n" +
            "Thank you, " + firstName + " " + lastName + ".\n\n" +
            "You have successfully registered for the event."
        );

        eventForm.reset();

    });

}