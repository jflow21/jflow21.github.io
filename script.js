document.addEventListener("DOMContentLoaded", function() {
    const coll = document.querySelectorAll(".collapsible");
    coll.forEach(button => {
      button.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.innerHTML = "Click to Show Full Coursework";
        } else {
          content.style.display = "block";
          this.innerHTML = "Click to Hide Full Coursework";
        }
      });
    });
  });
  