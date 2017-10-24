<template>
    <div id="app">
        <sidebar></sidebar>
        <card-table :cardsData="cardsData"></card-table>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import CardTable from './CardTable.vue';
import cardsData from './cards.js';
export default {
    name: 'app',
    components: {Sidebar, CardTable},
    data () {
        return {
            cardsData: cardsData
        }
    }
}
</script>

<style>
@import '~bulma/css/bulma.css';
@import url('https://fonts.googleapis.com/css?family=Raleway');

#app {
    text-align: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    right: 0px;
    font-family: 'Raleway', sans-serif;
}

a:link {color: white;}
a:hover {color: white;}
a:active {color: white;}
a:visited {color: white;}
</style>
