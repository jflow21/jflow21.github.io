function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Next midnight
  
    const diff = midnight - now;
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    const pad = (n) => String(n).padStart(2, '0');
  
    document.getElementById("countdown").textContent =
      `Your water credit expires in: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Initial call
  updateCountdown();
  
  // Update every second
  setInterval(updateCountdown, 1000);
  