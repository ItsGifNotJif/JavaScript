{
    //Task 3 
    let taskButton = document.getElementById("taskButton");
    taskButton.style.position = "absolute";
    taskButton.style.top = '50%';
    taskButton.style.left = '50%';
    taskButton.style.transform = 'translate(-50%, -50%)';

    let isButtonMoved = false;
    let currentHour = 0;

    const centerX = window.innerWidth / 2; // X-coordinate of the center point
    const centerY = window.innerHeight / 2; // Y-coordinate of the center point
    const radius = 100; // Radius of the circular path
    const speed = (2 * Math.PI) / 12; // Speed of the movement (advance by 1 hour)

    taskButton.addEventListener("click", (event) => {
        event.preventDefault();

        const angle = currentHour * speed;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        taskButton.style.position = "absolute";
        taskButton.style.top = `${y}px`;
        taskButton.style.left = `${x}px`;
        taskButton.style.transform = 'translate(-50%, -50%)';

        currentHour++;
        if (currentHour > 12) {
            currentHour = 0;
        }

        if (currentHour === 0) {
            isButtonMoved = false;
        } else {
            isButtonMoved = true;
        }
    });


}