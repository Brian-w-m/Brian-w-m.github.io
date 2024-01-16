// For text fly in i think

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// For radial gradient hover effect

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

// Copy text into clipboard

function copyText() {
    navigator.clipboard.writeText("brianmwu18@gmail.com");
}

// Change copy text

function changeVar() {
    document.getElementById("copy-text").textContent = "Copied!";
    setTimeout(() => { document.getElementById("copy-text").textContent = "Copy email"; }, 5000);

}

// Check box to change colour
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('menu-check');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // Change the value of the CSS variable when the checkbox is checked
            setTimeout(() => { document.documentElement.style.setProperty('--socials-colour', 'rgb(70, 70, 70)'); }, 300);
        } else {
            // Reset the value when the checkbox is unchecked
            setTimeout(() => { document.documentElement.style.setProperty('--socials-colour', '#c0cec8'); }, 300);
        }
    });
});