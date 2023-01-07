{
    let x = 0;
    let combo = "";
    while (x < 5) {
        combo += "Antanas";
        x++;
        console.log(combo)
    }
}

{
    let randomNum = Math.floor(Math.random() * 6)
    console.log(randomNum)
    let randomNum2 = Math.floor(Math.random() * 8) + 5;
    console.log(randomNum2);
}

{
    let randomNum = Math.floor(Math.random() * 6);
    console.log(randomNum);
    if(randomNum == 1){
        alert("You've won!");
    }else{
        alert("You didn't win.");
}
}