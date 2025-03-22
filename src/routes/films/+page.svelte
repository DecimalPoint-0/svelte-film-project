<script>
    import {FilmStore} from '../../store'

    let handleClick = () => {
        FilmStore.update(prev => {
            let newFilm = {id: 6, name: "King Kong", director: "Kim nana"}
            return [...prev, newFilm]
        })
    }
</script>

<section class="mx-auto max-w-[1024px] py-8">
    <h1 class="mb-4 text-2xl">Film List</h1>
    <div class="rounded-sm border-2">
        <img src="" alt="">

        <div class="m-2">
            <h1>Title</h1>
            <h3>Lorem ipsum dolor sit amet.</h3>

            <a href="/">View</a>
        </div>

    </div>
</section>

<!-- {#each $FilmStore as film}
    <a href="films/{film.id}"><li>{film.name}</li></a>
{/each} -->

