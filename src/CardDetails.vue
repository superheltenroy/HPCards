<template>
    <div class="card" @click="$emit('showModal', card)">
        <div class="card-topbar">{{card.number}}</div>
        <div>{{card.name}}</div>
        <div class="card-footer">{{card.cost}}</div>
    </div>
</template>

<script>
export default {
    name: 'card-details',
    props: ['card', 'highlightedCardGroup'],
    data () {
        return ({});
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

.card {
    width: 100%;
    min-width: 64px;
    height: 84px;
    border-radius: 4px;
    text-align: center;
    opacity: 0.8;
    font-size: 1em;
}

.card:hover {
    opacity: 1.0;
    cursor: pointer;
}

.card-muted {
    opacity: 0.3;
}

.card-topbar {
    font-size: 14px;
    padding-right: 4px;
    text-align: right;
}

//.card-body {}

.card-footer {
    font-size: 12px;
    border: none;
}

/* Element groups */
.e-spell {background-color: $eg-spell;}
.e-character {background-color: $eg-character}
.e-location {background-color: $eg-location}
.e-item {background-color: $eg-item}
.e-adventure {background-color: $eg-adventure}
.e-match {background-color: $eg-match}
.e-creature {background-color: $eg-creature}
.e-lesson {background-color: $eg-lesson}
</style>
