// retrieve elements
const progressBar = document.querySelector("#progress-bar");
const progressText = document.querySelector("#progress-text");
const donorCount = document.querySelector("#donor-count");

// define current and total amounts
let givers = ['aqualm', 'shindley', 'mbacon', 'ljones', 'rcollins', 
                'sbrocka', 'lsprenkle', 'swalkup', 'other']
let gifts = [1000, 100, 200, 150, 2000, 3000, 2000, 500, 250]
const targetAmount = gifts.reduce((partialSum, a) => partialSum + a, 0);
let currentAmount = 0;
let totalAmount = 15000;
let donors = gifts.length;

// Start animation on page load
window.addEventListener('load', function() {
    animateProgress();
});

// Animation function
function animateProgress() {
    if(currentAmount < targetAmount) {
        currentAmount += 100; // Change this value to control animation speed
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
