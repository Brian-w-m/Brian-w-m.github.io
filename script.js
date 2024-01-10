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
    document.documentElement.setAttribute("style", "--copy-text: 'Email copied!'");
    setTimeout(() => { document.documentElement.setAttribute("style", "--copy-text: 'Copy to clipboard'"); }, 5000);
}