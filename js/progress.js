// retrieve elements
const progressBar = document.querySelector("#progress-bar");
const progressText = document.querySelector("#progress-text");
const donorCount = document.querySelector("#donor-count");

// define current and total amounts
let currentAmount = 0;
let totalAmount = 15000;
let targetAmount = 2050;
let donors = 5;

// Start animation on page load
window.addEventListener('load', function() {
    animateProgress();
});

// Animation function
function animateProgress() {
    if(currentAmount < targetAmount) {
        currentAmount += 25; // Change this value to control animation speed
        requestAnimationFrame(animateProgress);
    }
    // update progress bar value and text
    progressBar.value = currentAmount;
    progressText.innerText = `$${currentAmount.toLocaleString()} / $${totalAmount.toLocaleString()}`;
    donorCount.innerText = `${donors} Donors`;
}

// update progress bar with any new donations
function updateProgress(newDonation, newDonors) {
  targetAmount += newDonation;
  donors += newDonors;
  animateProgress();
  donorCount.innerText = `${donors} Donors`;
}
