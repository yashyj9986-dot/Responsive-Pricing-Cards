const monthlyBtn = document.getElementById("monthlyBtn");
const annualBtn = document.getElementById("annualBtn");

const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

// Monthly Button
monthlyBtn.addEventListener("click", function() {

    monthlyBtn.classList.add("active");
    annualBtn.classList.remove("active");

    prices.forEach(function(price) {
        price.textContent = "₹" +
            Number(price.dataset.monthly).toLocaleString("en-IN");
    });

    periods.forEach(function(period) {
        period.textContent = "/mo";
    });

});

// Annual Button
annualBtn.addEventListener("click", function() {

    annualBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    prices.forEach(function(price) {
        price.textContent = "₹" +
            Number(price.dataset.annual).toLocaleString("en-IN");
    });

    periods.forEach(function(period) {
        period.textContent = "/yr";
    });

});

// Select Plan Buttons
const buttons = document.querySelectorAll(".select-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("You selected: " + button.textContent);

    });

});
