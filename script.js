
    //get the submit button
    const button = document.getElementById("submit")
    //get the query input
    const query = document.getElementById("query")
    //get the offset
    const offset = document.getElementById("offset")

    const imageContainer = document.getElementById("right-panel")
    button.addEventListener("click", e => {
        e.preventDefault();

        const radio = document.querySelector("input[type=radio][name=image-type]:checked")

        const queryValue = query.value;

        const offsetValue = offset.value;

        const radioValue = radio.value;

        imageContainer.innerHTML = ' ';

        imageContainer.append(createImageContainer([queryValue, offsetValue, radioValue]))
    });

    function createImageContainer([queryValue, offsetValue, radioValue][i]){

        const div = document.createElement("p")

        for (let i = 0; i < 3; i += 1) {
            const p = document.createElement("p")
        }
    }