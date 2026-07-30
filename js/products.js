
const buttons = document.querySelectorAll(".request-price");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.dataset.product;

        const message =
`Hello Pineapple Pro,

I would like to know the price for:

Product: ${product}

Please share the quotation and available specifications.

Thank you.`;

        window.open(
            `https://wa.me/917972219776?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});
