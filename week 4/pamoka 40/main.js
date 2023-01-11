{
    const films = [{
        title: 'The Matrix',
        roles: [
            { title: 'Neo', actor: { name: 'Keanu', surname: 'reeves' } },
            { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
            { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
        ],
        ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
        year: 1999,
    }, {
        title: 'The Matrix Reloaded',
        roles: [
            { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
            { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
            { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
        ],
        ratings: [7, 7, 8, 9, 10, 10],
        year: 2003,
    }, {
        title: 'The Matrix Revolutions',
        roles: [
            { title: 'Neo', actor: { name: 'keanu', surname: 'Reeves' } },
            { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
            { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
        ],
        ratings: [7, 8, 9, 10, 10, 10, 7, 8],
        year: 2003,
    }, {
        title: 'The Shawshank Redemption',
        roles: [
            { title: 'Andy Dufresne', actor: { name: 'Tim', surname: 'Robbins' } },
            { title: "Ellis Boyd 'Red' Redding", actor: { name: 'Morgan', surname: 'Freeman' } },
        ],
        ratings: [10, 10, 10, 10, 10, 8, 10, 10],
        year: 1994,
    }, {
        title: 'The Godfather',
        roles: [
            { title: 'Don Vito Corleone', actor: { name: 'Marlon', surname: 'Brando' } },
            { title: 'Michael Corleone', actor: { name: 'Al', surname: 'Pacino' } },
            { title: 'Tom Hagen', actor: { name: 'Robert', surname: 'Duvall' } },
        ],
        ratings: [10, 10, 9, 10, 8, 10, 10],
        year: 1972,
    }, {
        title: 'The Dark Knight',
        roles: [
            { title: 'Joker', actor: { name: 'Heath', surname: 'Ledger' } },
            { title: 'Bruce Wayne', actor: { name: 'Christian', surname: 'Bale' } },
        ],
        ratings: [10, 9, 9, 9, 10, 8, 10, 10],
        year: 2008,
    }];


    console.groupCollapsed("forEach");
    {
        films.forEach((film) => {
            console.log(film.roles);
            film.roles.forEach((filmRole) => {
                console.log(filmRole.actor.name, filmRole.actor.surname)
            })
        })
    }
    console.groupEnd()

    console.groupCollapsed("filter");
    {
        const resultFilter = films.filter((film) => {
            return film.year > 2000
        })

        const filmsWithManyRatings = films.filter((film) => {
            return film.ratings.length >= 8
        })

        console.log(resultFilter, filmsWithManyRatings)
    }
    console.groupEnd()

    console.groupCollapsed("some");
    {
        const existsNewFilms = films.some((film) => {
            return film.year > 2000
        })
        console.log(existsNewFilms)

    }
    console.groupEnd()

    console.groupCollapsed("every");
    {
        const allFilmsNewerThan2000 = films.every((film) => {
            return film.year > 1900
        })
        console.log(allFilmsNewerThan2000)

    }
    console.groupEnd()

    console.groupCollapsed("map");
    {
        const filmTitles = films.map((film) => {
            return film.title
        })

        const filmCardViewModels = films.map((film) => ({
            title: `${film.title} (${film.year})`,
            stars: (film.ratings.reduce((sum, num) => sum + num) / film.ratings.length / 2).toFixed(1)
        }))

        const filmTitlesLong = films.map((film) => {
            const avg = Number((film.ratings.reduce((sum, num) => sum + num) / film.ratings.length / 2).toFixed(1))
            let stars = ""
            for (let i = 1; i < 5; i++) {
                if (avg - i > 0.5) {
                    stars += "★"
                } else {
                    stars += "✰"
                }
            }

            return `${film.title} ${film.year} ${stars}`
        })



        console.log(filmTitles)
        console.table(filmCardViewModels)
        console.table(filmTitlesLong)
    }
    console.groupEnd()

    console.groupCollapsed("reduce");
    {
        const averageMarks = films.map((film) => {
            const averageSum = film.ratings.reduce((a, b) => a + b, 0)
            const avg = averageSum / film.ratings.length;
            return Math.round(avg)
        })
        console.log(averageMarks)
    }
    console.groupEnd()

}