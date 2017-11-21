<template>
    <div class="card" @click="$emit('showModal', card)">
        <div class="card-topbar">{{card.number}}</div>
        <div class="card-body">{{card.name}}</div>
        <div class="card-footer">{{card.cost}}</div>
    </div>
</template>

<script>
export default {
    name: 'card',
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

.card-body {
    font-size: 24px;
}

.card-footer {
    font-size: 12px;
}

/* Element groups */
.e-spell {background-color: $eg-spell;}
.e-character {background-color: $eg-character}
.e-location {background-color: $eg-location}
.e-item {background-color: $eg-item}
.e-adventure {background-color: $eg-transition-adventure}
.e-match {background-color: $eg-match}
.e-creature {background-color: $eg-creature}

// .e-nonmetal {background-color: $eg-nonmetal;}
// .e-noble-gas {background-color: $eg-noble-gas;}
// .e-alkali-metal {background-color: $eg-alkali-metal;}
// .e-alkaline-earth-metal {background-color: $eg-alkaline-earth-metal;}
// .e-metalloid {background-color: $eg-metalloid}
// .e-halogen {background-color: $eg-halogen}
// .e-metal {background-color: $eg-metal}
// .e-transition-metal {background-color: $eg-transition-metal}
// .e-lanthanoid {background-color: $eg-lanthanoid}
// .e-actinoid {background-color: $eg-actinoid}
// .e-post-transition-metal {background-color: $eg-post-transition-metal}
</style>
