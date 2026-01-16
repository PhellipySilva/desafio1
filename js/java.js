const btn = document.querySelectorAll("#icon")
console.log(btn)
btn.forEach((btn) => {
btn.addEventListener("click", () => {
btn.classList.toggle("filled")
})
})