{
    //Task one
    function alertName(name) {
        window.alert(name)
    }

    function consoleName(name) {
        console.log(name)
    }

    function coreFunction(name, callback) {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        callback(capitalizedName)
    }

    coreFunction("sOmeRandomNameHere", consoleName)
}

{
    //Task two

    const cars = ["BMW", "VW", "Audi"]

    function printNames(car) {
        console.log(car)
    }

    cars.forEach(printNames)
}

{
    //Task two.B

    const cars = ["BMW", "VW", "Audi"]

    function printNameandIndex(car, index) {
        console.log(`${index}. ${car}`)
    }

    cars.forEach(printNameandIndex)
}

{
    //Task three
    const names = ["dOriAN", "aSHgraY", "tOkYo", "jApAn"]

    const fixedWords = names.map(function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })

    console.log(fixedWords)
}


{
    //Task four
    const numbers = [53, 24, 72, 91, 16, 40, 83, 12, 58, 7, 36, 95, 64, 17, 88, 68, 2, 31, 42, 56, 75, 79, 11, 96, 45, 21, 93, 33, 87, 50, 65, 23, 39, 90, 77, 98, 34, 76, 22, 32, 54, 5, 71, 48]

    const filteredArray = numbers.filter((x) => x >= 18)

    console.log(filteredArray)
}

{
    //Task five

    const lithuanianCities = [
        'Vilnius',
        'Kaunas',
        'Klaipėda',
        'Šiauliai',
        'Panevėžys',
        'Alytus',
        'Marijampolė',
        'Mažeikiai',
        'Jonava',
        'Utena',
        'Kėdainiai',
        'Telšiai',
        'Visaginas',
        'Tauragė',
        'Ukmergė',
        'Plungė',
        'Kretinga',
        'Šilutė',
        'Radviliškis',
        'Gargždai'
    ];

    const namesWithK = lithuanianCities.find(function (cities) {
        return cities.startsWith("K")
    })
    // Check for cities beginning with "K"
    console.log(namesWithK)
    // Check for cities beginning with lowercase letter
    console.log(lithuanianCities.some(x => x.charAt(0) === x.charAt(0).toLowerCase()))
    // Check for cities beginning with uppercase letter
    console.log(lithuanianCities.some(x => x.charAt(0) === x.charAt(0).toUpperCase()))
}