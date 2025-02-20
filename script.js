   
  
    function orderNow() {
        alert("Thank you for ordering! Your delicious meal is on the way 🍔");
    }



    // Typing Effect
    const texts = [
        "FoodPanda! ইফতারির সুস্বাদু আয়োজন - ",
        "খেজুর ও শরবত দিয়ে শুরু করুন!",
        "পেঁয়াজু, বেগুনি, চপ - মজাদার সব!",
        "ঠান্ডা লাচ্ছি ও ফলের জুস!",
        "সেহরিতে পরোটা আর ভুনা মাংস!",
        "Food Panda-তে ইফতারি অর্ডার করুন!"
    ];


    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const speed = 100; // Typing speed
    const delay = 1000; // Delay before deleting

    function typeEffect() {
        if (!isDeleting && charIndex < texts[index].length) {
            currentText += texts[index][charIndex];
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            currentText = currentText.slice(0, -1);
            charIndex--;
        }

        document.getElementById("typing-text").textContent = currentText;

        if (!isDeleting && charIndex === texts[index].length) {
            setTimeout(() => isDeleting = true, delay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(typeEffect, isDeleting ? 50 : speed);
    }

    typeEffect();


    // Function to show the pop-up smoothly
    function showPopUp() {
        let popUp = document.getElementById("pop-up");
        popUp.style.opacity = "1";
        popUp.style.visibility = "visible";

        setTimeout(() => {
            popUp.style.opacity = "0";
            popUp.style.visibility = "hidden";
        }, 4000); // Hide smoothly after 2 seconds
    }

    // Run the pop-up function infinitely after every full wave scroll (20 seconds)
    let scrollDuration = 15000; // 20 seconds for full scroll
    setInterval(showPopUp, scrollDuration);



document.addEventListener("DOMContentLoaded", function () {
let audio = document.getElementById("background-audio");

function playAudio() {
    audio.muted = true; // Start muted (bypasses restrictions)
    audio.volume = 0;    // Start with volume 0

    let playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Audio started successfully.");
            
            // Unmute & gradually increase volume after a delay
            setTimeout(() => {
                audio.muted = false;
                let volume = 0;
                let fadeIn = setInterval(() => {
                    if (volume < 1) {
                        volume += 0.1;
                        audio.volume = volume.toFixed(1);
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 200); // Increase volume every 200ms
            }, 1000); // Start increasing volume after 1 second
            
        }).catch(error => {
            console.log("Auto-play blocked, retrying...");
            setTimeout(playAudio, 1000); // Retry every 1 second if blocked
        });
    }
}

// Ensure audio is loaded and can play
audio.addEventListener("canplaythrough", playAudio);

// Try playing the audio immediately
playAudio();
});













