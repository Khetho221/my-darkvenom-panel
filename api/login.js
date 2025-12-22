document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const license = document.getElementById("license").value.trim();

    if (username === "" || license === "") {
      alert("❌ Please fill in all fields");
      return;
    }

    // TEMP license check (no database)
    if (license === "darkvenom") {
      alert("✅ Login successful!\nWelcome " + username);
    } else {
      alert("❌ Invalid license key");
    }
  });
});
