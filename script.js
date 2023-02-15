AOS.init();
let Scroll = document.getElementById("scroll-icon")
let about = document.getElementById("about")
let projects = document.getElementById("projects")
let services = document.getElementById("services")
let contact = document.getElementById("contact")

window.onload = () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            Scroll.style.display = "none"
        } else {
            Scroll.style.display = "block"
        }

        if (window.scrollY < 650) {
            about.style.borderColor = "#0059AB63"
            services.style.borderColor = "transparent"
            projects.style.borderColor = "transparent"
            contact.style.borderColor = "transparent"
        }
        if (window.scrollY > 560) {
            services.style.borderColor = "#0059AB63"
            about.style.borderColor = "transparent"
            projects.style.borderColor = "transparent"
            contact.style.borderColor = "transparent"
        }

        if (window.scrollY > 1340) {
            projects.style.borderColor = "#0059AB63"
            services.style.borderColor = "transparent"
            about.style.borderColor = "transparent"
            contact.style.borderColor = "transparent"
        }

        if (window.scrollY >= 2012) {
            projects.style.borderColor = "transparent"
            services.style.borderColor = "transparent"
            about.style.borderColor = "transparent"
            contact.style.borderColor = "#0059AB63"
        }

        console.log(window.scrollY)
    })

    about.addEventListener("click", () => {
        window.scrollTo({
            top: "0",
            behavior: "smooth"
        })
    })
    services.addEventListener("click", () => {
        window.scrollTo({
            top: "670",
            behavior: "smooth"
        })
    })
    projects.addEventListener("click", () => {
        window.scrollTo({
            top: "1500",
            behavior: "smooth"
        })
    })

    contact.addEventListener("click", () => {
        window.scrollTo({
            top: "2250",
            behavior: "smooth"
        })
    })
}