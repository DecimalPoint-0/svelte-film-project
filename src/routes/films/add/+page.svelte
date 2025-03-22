<script>
    import {FilmStore} from '../../../store'
    import {goto} from '$app/navigation'

    let name = ""
    let director = ""

    let handleSubmit = () => {

        FilmStore.update(prev => {
            let newId = prev[prev.length - 1].id + 1
            let newFilm = {id: newId, name: name, director: director}
            return [...prev, newFilm]
        })

        goto(`/films/${$FilmStore[$FilmStore.length - 1].id}`)
    }

</script>


<form action="" on:submit|preventDefault={handleSubmit}>
    <input class="bg-red-200" type="text" placeholder="Enter Film Name" bind:value={name}>
    <input type="text" placeholder="Enter Film Director" bind:value={director}>

    <button type="submit">Add Film</button>
</form>