<template>
    <div id="card-table">
        <div id="table-container">
            <div id="toolbar">
                Highlight:
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="spell" class="button is-small b-spell">Spell</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="character" class="button is-small b-character">Character</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="adventure" class="button is-small b-adventure">Adventure</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="location" class="button is-small b-location">Location</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="item" class="button is-small b-item">Item</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="creature" class="button is-small b-creature">Creature</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="match" class="button is-small b-match">Match</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="lesson" class="button is-small b-lesson">Lesson</div>
            </div>
            <container width="100%">
                <grid>
                    <grid-item size="1/16" v-for="card in cardsData" :key="card.id">
                        <card-details   :card="card"
                                            :highlightedCardGroup="highlightedCardGroup"
                                            :class="buildCardClasses(card)"
                                            @showModal="triggerModal">
                        </card-details>
                    </grid-item>
                </grid>
            </container>
            <card-modal v-if="showModal" :card="modalcard" @close="showModal = false"></card-modal>
        </div>
    </div>
</template>

<script>
import CardDetails from './CardDetails.vue';
import CardModal from './CardModal.vue';
export default {
    name: 'card-table',
    props: ['cardsData'],
    components: {CardDetails, CardModal},
    data () {
        return ({
            highlightedCardGroup: '',
            showModal: false,
            modalcard: {}
        });
    },
    methods: {
        highlight: function(event) {
            console.log(JSON.stringify(event.target.dataset));
            this.highlightedCardGroup = event.target.dataset.cardGroup;
        },
        reset: function(event) {
            this.highlightedCardGroup = '';
        },
        buildCardClasses: function(card) {
            var groupBlock = card.groupBlock.replace(new RegExp(' ', 'g'), '-');
            if(this.highlightedCardGroup == '') {
                return('e-'+groupBlock);
            } else {
                return('e-'+groupBlock+' '+(groupBlock != this.highlightedCardGroup ? 'card-muted ' : ''));
            }

        },
        placeholderSize: function(card) {
            return(card.placeholder+'/20')
        },
        triggerModal: function(card) {
            this.modalcard = card;
            this.showModal = true;
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#toolbar {
    margin: 4px;
    margin-bottom: 8px;
    color: white;
    text-align: left;
}

#card-table {
    height: 100%;
    background-color: #2C2C2C;
    background-image: url('./assets/bg.png');
}

#table-container {
    height: 100%;
    padding: 12px;
    overflow: auto;
}

.vfg-grid-item {
    margin-bottom: 8px;
}

/* Buttons */
.b-spell {background-color: $eg-spell;}
.b-character {background-color: $eg-character}
.b-location {background-color: $eg-location}
.b-item {background-color: $eg-item}
.b-adventure {background-color: $eg-adventure}
.b-match {background-color: $eg-match}
.b-creature {background-color: $eg-creature}
.b-lesson {background-color: $eg-lesson}
.button {
    border: none;
}
</style>
