console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');
    const age=27;
    const height=1.86;
    const condition="sick";
    const mood="average";
    const favouritechar="Vegeta"

    console.table({age, height, condition, mood, favouritechar}); 
console.groupEnd();




console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');
    
    console.log('Are you eligible to enter Disneyland?');
        if(age > 18 && height > 1.6){
            console.log('Enter');
        }else{
            console.log('No Enter'); 
        }

    console.log('Are you in a good mood today?');
        if(condition ==="good" && mood==="good"){
            console.log('Yes')
        }else{
            console.log('No')
        }
console.groupEnd();




console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');
        const state= 'miegantis';
        let plan;
            switch(state){
                case 'atsikėlęs': plan = "eit išsimaudyt"; break;
                case 'miegantis': plan = "toliau ilsiuosi"; break;
                case 'pavargės': plan = "pažiūrėt filmą"; break;
                default: console.error('tokia būsena neatpažinta');
            }

            console.log({state, plan});
console.groupEnd();