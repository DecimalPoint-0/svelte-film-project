import { writable } from "svelte/store";

export const FilmStore = writable(
    [
        {id: 1, name: "The Godfather", director: "Francis Ford Coppola"},
        {id: 2, name: "Jurassic Park", director: "Steven Spielberg"},
        {id: 3, name: "Christopher Nolan", director: "Inception"},
        {id: 4, name: "Pulp Fiction", director: "Quentin Tarantino"},
        {id: 5, name: "Goodfellas", director: "Martin Scorsese"},
    ]
)