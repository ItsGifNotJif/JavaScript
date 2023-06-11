export function addheader(app) {
    let header = document.createElement("header");
    header.style.height = "100px";
    header.style.backgroundColor = "teal";

    const body = document.querySelector("body")
    body.append(header)

}