function downloadResume() {
  const link = document.createElement("a");
  link.download = "Jaimil_Modi_Resume.pdf";
  link.href = "Jaimil_Modi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showDownloadFeedback();
}

function showDownloadFeedback() {
  const downloadBtn = document.querySelector(".download-btn");
  const originalText = downloadBtn.innerHTML;

  downloadBtn.innerHTML = `
        <svg class="download-icon" viewBox="0 0 24 24" style="fill:none;stroke:white;stroke-width:2;">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
        </svg>
        Downloaded!
    `;

  setTimeout(() => {
    downloadBtn.innerHTML = originalText;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
      skill.style.transform = "scale(1.05)";
      skill.style.boxShadow = "0 0 10px rgba(14, 165, 233, 0.5)";
    });
    skill.addEventListener("mouseleave", () => {
      skill.style.transform = "";
      skill.style.boxShadow = "";
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
  });
});
