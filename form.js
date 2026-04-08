document.querySelector("form").addEventListener("submit", async function(e){
    e.preventDefault();

    let data = {
        name: name.value,
        age: age.value,
        city: city.value,
        phone: phone.value,
        email: email.value,
        height: height.value,
        weight: weight.value,
        exp: exp.value
    };

    let res = await fetch("http://localhost:3000/send-whatsapp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let result = await res.json();

    // WhatsApp open
    window.open(result.url, "_blank");
});