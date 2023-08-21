// Function to select DOM elements
const elem = (target) => document.querySelector(target);

// Main function
const main = () => {
  // Flag to control icon state
  let changeIcon = false;
  // Select button to show/hide password
  elem("#showPassword").addEventListener("click", () => {
    // Toggle flag state
    changeIcon = !changeIcon;
    // If flag is true, show password
    if (changeIcon) {
      elem("#password").type = "text";
      elem("#eye-type").src = "eye-slash-svgrepo-com.svg";
      // If not, hide password
    } else {
      elem("#password").type = "password";
      elem("#eye-type").src = "eye-svgrepo-com.svg";
    }
  });
};

// Initialize app
main();
