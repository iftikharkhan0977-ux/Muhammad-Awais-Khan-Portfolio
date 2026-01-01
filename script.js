// Theme Switcher
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.className);
});

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) document.body.className = savedTheme;
};

// Sort Table
function sortTable(col) {
    const table = document.getElementById("academicTable");
    let rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[col].innerText.localeCompare(b.cells[col].innerText));
    rows.forEach(row => table.tBodies[0].appendChild(row));
}

// Search Filter
document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#academicTable tbody tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
});

// CV Viewer
function loadCV() {
    document.getElementById("cvViewer").innerHTML =
        `<iframe src="CV.pdf" width="100%" height="500px"></iframe>`;
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("formStatus").innerText = "Please fill all fields!";
        return;
    }

    document.getElementById("formStatus").innerText = "Message sent successfully!";
    this.reset();
});

 // Progress Tracker
  let progress = [0, 0, 0];
  function updateProgress() {
    const bars = document.querySelectorAll('.progress-bar div');
    for(let i = 0; i < bars.length; i++) {
      if(progress[i] < 100) {
        progress[i] += 10;
        if(progress[i] > 100) progress[i] = 100;
        bars[i].style.width = progress[i] + '%';
        bars[i].textContent = progress[i] + '%';
      }
    }
  }

  // Gallery Lightbox
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });
