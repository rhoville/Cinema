// Get the necessary DOM elements
const spinButton = document.getElementById('spinButton');
const rouletteResult = document.getElementById('rouletteResult');

// Define the rewards
const rewards = [
  'Free Drink',
  'Free Popcorn',
  'Free Movie Ticket',
  'Better Luck Next Time'
];

// Perform a spin on the roulette
function spinRoulette() {
  // Disable the spin button during the spin
  spinButton.disabled = true;

  // Generate a random reward index
  const rewardIndex = Math.floor(Math.random() * rewards.length);

  // Calculate the rotation angle based on the reward index
  const rotationAngle = rewardIndex * (360 / rewards.length);

  // Apply the rotation to the wheel
  const wheel = document.querySelector('.wheel');
  wheel.style.transform = `rotate(${rotationAngle}deg)`;

  // Wait for the animation to finish
  setTimeout(() => {
    // Enable the spin button
    spinButton.disabled = false;

    // Display the result
    rouletteResult.textContent = `Congratulations! You won: ${rewards[rewardIndex]}`;
  }, 4000);
}

// Event listener for the spin button
spinButton.addEventListener('click', spinRoulette);

// Sample data for demonstration purposes
var remainingSpins = 5;
var rewardsObtained = ["Free Popcorn", "50% off on Tickets", "Movie Merchandise"];

// Function to update the remaining spins information
function updateRemainingSpins() {
  var spinInfo = document.getElementById("spinInfo");
  spinInfo.textContent = "Remaining Spins: " + remainingSpins;
}

// Function to update the rewards obtained list
function updateRewardsList() {
  var rewardsList = document.getElementById("rewardsList");
  rewardsList.innerHTML = "";

  for (var i = 0; i < rewardsObtained.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = rewardsObtained[i];
    rewardsList.appendChild(listItem);
  }
}

// Call the update functions initially to display the initial data
updateRemainingSpins();
updateRewardsList();



