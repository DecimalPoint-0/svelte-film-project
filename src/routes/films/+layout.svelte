

<header class="bg-gray-100 p-4 flex space-x-4 items-center font-bold">
    <h1 class="text-color-secondary">Svelte</h1>
    <nav>
        <ul class="flex space-x-4">
            <li><a href="/films">Home</a></li>
            <li><a href="/films/add">Add Film</a></li>
        </ul>
    </nav>
</header>


<div class="container">
    <slot />
</div>


<!-- <script>import "../../app.css";</script><slot></slot> -->