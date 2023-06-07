{

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const form = document.querySelector('form');
    const output = document.getElementById('output');
    const name = getCookie('name');

    if (name) {
        form.classList.add('hidden');
        output.classList.remove('hidden');
        document.getElementById('name').innerText = name;
    } else {
        form.classList.remove('hidden');
        output.classList.add('hidden');
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        setCookie('name', name, 1);
        document.getElementById('name').innerText = name;
        form.classList.add('hidden');
        output.classList.remove('hidden');
    });

    document.getElementById('erase').addEventListener('click', (event) => {
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.getElementById('name').innerText = '';
        output.classList.add('hidden');
        form.classList.remove('hidden');
    });

}

