window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
setTimeout(() => {
 let title =   document.querySelector('title')
 title.textContent = 'One new message'
}, 3000)
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
