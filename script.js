

window.addEventListener('DOMContentLoaded', async (event) => {
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach(e => {
        e.addEventListener("click", e => {
            navLinks.forEach(e => e.classList.remove("active"))
            e.target.classList.toggle("active")
        });
    })

    el = document.querySelector(`#nav-menu li a[href="${window.location.hash}"]`)
    if (el) {
        el.classList.add("active")
    } else {
        el = document.querySelector(`#nav-menu li a[href="#home"]`)
        el.classList.add('active')
    }
})