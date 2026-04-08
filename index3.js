// SHOW FUNCTION
function showTalent(id) {

    // sab hide
    let sections = document.querySelectorAll(".talent-section");
    sections.forEach(sec => sec.classList.remove("active"));

    // show selected
    document.getElementById(id).classList.add("active");
}