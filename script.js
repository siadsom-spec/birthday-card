function createCard() {

    const name = document.getElementById("name").value;
    const from = document.getElementById("from").value;
    const message = document.getElementById("message").value;
    const photo = document.getElementById("photo").files[0];

    if (!name || !from || !message) {
        alert("Please fill in all fields.");
        return;
    }

    document.querySelector(".container").style.display = "none";
    document.getElementById("birthdayPage").classList.remove("hidden");

    document.getElementById("personName").innerHTML =
        "🎉 Happy Birthday " + name + "!";

    document.getElementById("birthdayMessage").innerHTML =
        message;

    document.getElementById("senderName").innerHTML =
        "❤️ From: " + from;

    if (photo) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result;
        };

        reader.readAsDataURL(photo);
    }

    startConfetti();
    createBalloons();
}

function playMusic() {
    document.getElementById("music").play();
}

function startConfetti() {

    if (typeof confetti === "undefined") return;

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });
}

function createBalloons() {

    for (let i = 0; i < 20; i++) {

        const balloon = document.createElement("img");

        balloon.src =
        "https://cdn-icons-png.flaticon.com/512/3468/3468377.png";

        balloon.className = "balloon";

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.animationDuration =
        (8 + Math.random() * 8) + "s";

        balloon.style.width =
        (40 + Math.random() * 50) + "px";

        document.body.appendChild(balloon);
    }
}
