// Add new project dynamically with animation
document.getElementById("addProjectBtn").addEventListener("click", function () {
  const projectGrid = document.querySelector(".projects-grid");

  const newProject = document.createElement("div");
  newProject.classList.add("project-card", "fade-in");
  newProject.innerHTML = `
    <h3>✨ New Project</h3>
    <p>This is a newly added project with animated entry. Edit content in script.js.</p>
  `;

  projectGrid.appendChild(newProject);

  // Scroll smoothly to new project
  newProject.scrollIntoView({ behavior: "smooth", block: "center" });

  // Remove animation class after it finishes (so hover effects work normally)
  setTimeout(() => {
    newProject.classList.remove("fade-in");
  }, 800); // matches animation duration
});