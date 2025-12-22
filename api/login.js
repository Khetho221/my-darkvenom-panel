document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const license = document.getElementById("license").value.trim();

    if (username === "" || license === "") {
      alert("❌ Please fill in all fields");
      return;
    }

    // TEMP license check (no database yet)
    if (license === "darkvenom") {
      alert("✅ Login successful!\nWelcome " + username);
      
      // example redirect (optional)
      // window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid license key");
    }
  });
});
