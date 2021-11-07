// Toggle button DOM
const toggleBtn = document.querySelector(".toggle-btn");
const ball = document.querySelector(".circle");

// Getting the textContents of prices
const basic = document.querySelector(".basic");
const pro = document.querySelector(".pro");
const master = document.querySelector(".master");

toggleBtn.addEventListener("click", () => {
  // The frontend part of the toggle button
  if (toggleBtn.dataset.status === "close") {
    ball.style.animation = "toggle 0.5s forwards";
    toggleBtn.dataset.status = "open";

    // Changes in the numbers - Showing the monthly prices
    basic.innerHTML = `<span>$</span> 19.99`;
    pro.innerHTML = `<span>$</span> 24.99`;
    master.innerHTML = `<span>$</span> 39.99`;
  } else if (toggleBtn.dataset.status === "open") {
    ball.style.animation = "current 0.5s forwards";
    toggleBtn.dataset.status = "close";

    // Changes in the numbers - Back to the current stage
    basic.innerHTML = `<span>$</span> 199.99`;
    pro.innerHTML = `<span>$</span> 249.99`;
    master.innerHTML = `<span>$</span> 399.99`;
  }
});
