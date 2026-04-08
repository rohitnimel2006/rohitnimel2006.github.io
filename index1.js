// Background auto change
let images = [
    "images/bg.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg"
];

let i = 0;
setInterval(() => {
    document.querySelector(".hero").style.background =
        `url(${images[i]}) center/cover no-repeat`;
    i = (i + 1) % images.length;
}, 3000);
card.innerHTML = `
    <div class="inner-card">
        <img src="${model.img}">
        <h3>${model.name}</h3>
    </div>
`;
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".inner-card").forEach(card => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});
function openModal(name, img, desc) {
    document.getElementById("modelModal").style.display = "block";

    document.getElementById("modalName").innerText = name;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerText = desc;

    // WhatsApp auto message
    document.getElementById("whatsappBtn").href =
    "https://wa.me/918000593488?text=I want to book " + name;
}

function closeModal() {
    document.getElementById("modelModal").style.display = "none";
}

// outside click close
window.onclick = function(event) {
    let modal = document.getElementById("modelModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let boxes = document.querySelectorAll(".why-box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        let position = box.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);

