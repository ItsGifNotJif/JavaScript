{
    const people = [
        {
            name: "Petras",
            age: "18"
        },
        {
            name: "Jonas",
            age: 15
        },
        {
            name: "Antanas",
            age: 20
        },
        {
            name: "Urtė",
            age: 10
        },
        {
            name: "Diana",
            age: 25
        },
        {
            name: "Ieva",
            age: 16
        }
    ];

    //Task one. Show only above legal age

    const legalAge = people.reduce((acc, val) => {
        if (val.age > 18) {
            acc.push(val)
        }
        return acc;
    }, [])
    console.log(legalAge)

    //Task two. Show all names of legal people

    const showName = people.reduce((acc, val) => {
        if (parseInt(val.age) >= 18) {
            acc.push(val.name)
        }
        return acc;
    }, [])
    console.log(showName)

    //Task three. Sort names alphabetically

    const sortedArray = showName.sort()
    console.log(sortedArray)
}

{
    //Task Four
    const drinks = [
        { name: "soda", price: 40 },
        { name: "lemonade", price: 10 },
        { name: "iced tea", price: 20 },
        { name: "orange juice", price: 15 },
        { name: "coffee", price: 30 },
        { name: "water", price: 5 }
    ];


    function sorted(items) {
        items.sort((a, b) => a.price - b.price)
        return { cheapest: items[0].name, expensive: items[items.length - 1].name }

        console.log(sorted(items))

    }

    console.log(sorted(drinks))
}