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

// Image carousel

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -88.2);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
  document.getElementById("img-perc").textContent = Math.round((-nextPercentage/100)*8);
}


/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

const imgs = document.querySelectorAll('#image-track img');

imgs.forEach(img => {
  var a = 0
  img.addEventListener('click', function() {
    if(a === 0) {
      img.style.height = '76vmin';
      img.style.width = '120vmin';
      img.style.padding = '0';
      img.style.zIndex = '0';
      a = 1;
    } else if(a===1) {
      setTimeout(()=>{a = 2}, 500);
      $(img).click(
        window.location.href = '#'
      );
    } else if(a===2) {
      img.style.width = '';
      img.style.height = '';
      img.style.padding = '';
      img.style.zIndex = '';
      a = 0;
    }
  });
});

