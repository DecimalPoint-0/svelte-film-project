<script>
    export let data;
    import {FilmStore} from '../../../store'

    let film = $FilmStore.find(film => film.id == data.id);
</script>
<h1>{film?.id} </h1>
<h1>{film?.name} </h1>
<h1>{film?.director} </h1>