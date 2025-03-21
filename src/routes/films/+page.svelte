<script>
    import {FilmStore} from '../../store'

    let films = []

    FilmStore.subscribe(values => films = values)
</script>

{#each films as film}
    <a href="films/{film.id}"><li>{film.director}</li></a>
{/each}