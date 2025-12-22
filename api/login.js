function login() {
  const username = document.getElementById("username").value;
  const license = document.getElementById("license").value;

  if (!username || !license) {
    alert("❌ Fill in all fields");
    return;
  }

  // ADMIN ONLY (TEMP)
  if (username === "darkvenom" && license === "darkvenom042") {
    alert("✅ Welcome Admin DARKVENOM");
  } else {
    alert("❌ Access denied (Admin only)");
  }
}
