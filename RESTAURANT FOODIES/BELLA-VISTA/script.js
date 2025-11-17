/* ======================================================
   Smooth Scroll for Navbar Links
====================================================== */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


/* ======================================================
   Reservation Form Handling
====================================================== */
const form = document.getElementById("reserveForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Form values
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Basic Validation
    if (!name || !email || !date || !time || !guests) {
        showPopup("Please fill all required fields!", false);
        return;
    }

    // Show success message
    showPopup("🎉 Reservation Submitted Successfully!", true);

    // Clear form
    form.reset();
});


/* ======================================================
   Popup Message (Success / Error)
====================================================== */
function showPopup(message, success = true) {
    let popup = document.createElement("div");
    popup.className = success ? "popup success" : "popup error";
    popup.innerText = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}
