
// DATA
const models = {
    boys: [
        {name:"Aman", img:"image/image/boy1.jpg", desc:"Height: 6ft | Age: 22"},
        {name:"Rahul", img:"image/image/boy2.jpg", desc:"Height: 5.11 | Age: 24"},
        {name:"Karan", img:"image/image/boy3.jpg", desc:"Height: 6.1 | Age: 25"}
    ],
    girls: [
        {name:"Riya", img:"image/image/girl1.jpg", desc:"Height: 5.6 | Age: 21"},
        {name:"Sneha", img:"image/image/girl2.jpg", desc:"Height: 5.7 | Age: 23"},
        {name:"Pooja", img:"image/image/girl3.jpg", desc:"Height: 5.8 | Age: 22"}
    ],
    plus: [
        {name:"Neha", img:"image/image/plus.jpg", desc:"Height: 5.9 | Age: 26"},
        {name:"Anjali", img:"image/image/plus size.jpg", desc:"Height: 5.8 | Age: 28"},
        {name:"Megha", img:"image/image/plus siz.jpg", desc:"Height: 5.10 | Age: 27"}
    ]
};

// ELEMENT
const grid = document.getElementById("photoGrid");

// SHOW
function showCategory(type) {
    grid.innerHTML = "";

    models[type].forEach(m => {
        let img = document.createElement("img");
        img.src = m.img;

        img.onclick = () => openModal(m);

        grid.appendChild(img);
    });
}
// isko uncoment krne par model ditale show hone lagegi
// MODAL OPEN
// function openModal(m) {
//     document.getElementById("modelModal").style.display = "flex";

//     document.getElementById("modalImg").src = m.img;
//     document.getElementById("modalName").innerText = m.name;
//     document.getElementById("modalDesc").innerText = m.desc;

//     document.getElementById("whatsappBtn").href =
//     "https://wa.me/918000593488?text=I want to book " + m.name;
// }

// // CLOSE
// function closeModal() {
//     document.getElementById("modelModal").style.display = "none";
// }

// // DEFAULT
// showCategory("boys");