(() => {
    //Example 1 on how to get Data from HTML Form
    ///This method is used when there's very few data entry fields 
    const loginForm = document.querySelector(".js-login");
    const emailField = document.querySelector("#login-email")
    const passwordField = document.querySelector("#login-password")
    const rememberCheckbox = document.querySelector("#login-remember")


    const handleLogin = (event) => {
        event.preventDefault();
        const formData = {
            email: emailField.value,
            password: passwordField.value,
            remember: rememberCheckbox.checked,
        };
        console.log(formData);
    }

    loginForm.addEventListener("submit", handleLogin);

});


(() => {
    //Example 2. Gathering data by converting information into arrays. Uses [name] attribute
    //This method is used when data entry fields have "name" property and "name" property doesn't repeat, aka is unique for every element
    const loginForm = document.querySelector(".js-login");

    const handleLogin = (event) => {
        event.preventDefault();

        const formData = Array.from(loginForm)
            .reduce((prevFormData, field) => {
                const name = field.getAttribute("name")
                if (name !== null) {
                    prevFormData[name] = field.type === "checkbox" ? field.checked : field.value;
                }

                return prevFormData;
            }, {})

        console.log(formData);
    }

    loginForm.addEventListener("submit", handleLogin);

});


(() => {
    //Example 3. using FormData prototype to gather information
    //Preferred way of gathering data from html forms. Can be used in every situation, universal approach, works everywhere
    const loginForm = document.querySelector(".js-login");

    const handleLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);

        const email = formData.get("email")
        const password = formData.get("password")
        const remember = formData.get("remember")

    }

    loginForm.addEventListener("submit", handleLogin);
})();