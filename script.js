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

        alert("🎉 Congratulations!\n\nYour 10% discount has been claimed.");

        localStorage.setItem("discountClaimed", "yes");

        popup.style.display = "none";

    });

}