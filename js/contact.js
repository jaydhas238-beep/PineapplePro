const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const text = `Hello Pineapple Pro,

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}

Service: ${service}

Message:
${message}`;

    const whatsappNumber = "917972219776";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});
