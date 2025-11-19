setInterval(() => {
    const nube = document.createElement("img");
    nube.src = "nubes.png";
    nube.className = "nube";
    nube.style.left = "-100px";
    document.body.appendChild(nube);
    setTimeout(() => nube.remove(), 7000);
}, 600);

