//Example 1 of Login Form data gathering
//Best used when there are only 1 or 2 input fields
(() => {

    const loginForm = document.querySelector(".js-login");
    const emailField = document.querySelector("#login-email")
    const passwordField = document.querySelector("#login-password")
    const rememberC = document.querySelector("#login-remember")


    const handleLogin = (event) => {
        event.preventDefault();
        const formData = {
            email: emailField.value,
            password: passwordField.value,
            remember: rememberC.checked,
        };

        console.log(formData)

    }

    loginForm.addEventListener("submit", handleLogin);

}) /*()*/;

//Example 2. Gathering login form data by converting it into an array. Uses "name" attribute
//Can be used under assumption other people editing the code know about "name" attribute in html and there are no repeating "name" attributes
(() => {

    const loginForm = document.querySelector(".js-login");

    const handleLogin = (event) => {
        event.preventDefault();
        const formData = Array.from(loginForm)
            .reduce((prevFormData, field) => {
                const name = field.getAttribute("name");
                if (name !== null) {
                    prevFormData[name] = field.type === "checkbox" ? field.checked : field.value;
                }

                return prevFormData;
            }, {})


        console.log(formData)
    }

    loginForm.addEventListener("submit", handleLogin);

}) /*()*/;


//Example 3. Gathering form data using "Form Data" prototype
//Best used everywhere
(() => {

    const loginForm = document.querySelector(".js-login");

    const handleLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);

        const email = formData.get("email");
        const password = formData.get("password");
        const remember = formData.get("remember");
        const skills = formData.getAll("skills");

        console.log({
            email,
            password,
            remember,
            skills
        })


    }

    loginForm.addEventListener("submit", handleLogin);

})();
