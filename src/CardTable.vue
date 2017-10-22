<template>
    <div id="cards-table">
        <div id="table-container">
            <div id="toolbar">
                Highlight:
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Rare" class="button is-small b-rare">Rare</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Uncommon" class="button is-small b-uncommon">Uncommon</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Common" class="button is-small b-common">Common</div>
                
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Spell" class="button is-small b-spell">Spell</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Character" class="button is-small b-character">Character</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Adventure" class="button is-small b-adventure">Adventure</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Location" class="button is-small b-location">Location</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Item" class="button is-small b-item">Item</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Creature" class="button is-small b-creature">Creature</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Match" class="button is-small b-match">Match</div>
                
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Transfiguration" class="button is-small b-transfiguration">Transfiguration</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Care of Magical Creatures" class="button is-small b-care-of-magical-creatures">Care of Magical Creatures</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Charms" class="button is-small b-charms">Charms</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Potions" class="button is-small b-potions">Potions</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Quidditch" class="button is-small b-quidditch">Quidditch</div>
           
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Healing" class="button is-small b-healing">Healing</div>
                <div @mouseenter="highlight" @mouseleave="reset" data-card-group="Unique" class="button is-small b-unique">Unique</div>
                
            </div>
            <container width="100%">
                <grid>
                    <grid-item size="1/18" v-for="card in cardsData" :key="card.atomicNumber" v-if="card.symbol && isOnMainTable(card)">
                        <card-details   :card="card"
                                            :highlightedcardGroup="highlightedcardGroup"
                                            :class="buildcardClasses(card)"
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
import CardToken from './CardToken.vue';
import CardModal from './CardModal.vue';
export default {
    name: 'cards-table',
    props: ['cardsData'],
    components: {CardToken, CardModal},
    data () {
        return ({
            highlightedcardGroup: '',
            showModal: false,
            modalcard: {}
        });
    },
    methods: {
        highlight: function(event) {
            this.highlightedcardGroup = event.target.dataset.cardGroup;
        },
        reset: function(event) {
            this.highlightedcardGroup = '';
        },
        buildcardClasses: function(card) {
            var groupBlock = card.groupBlock.replace(new RegExp(' ', 'g'), '-');
            if(this.highlightedcardGroup == '') {
                return('e-'+groupBlock);
            } else {
                return('e-'+groupBlock+' '+(groupBlock != this.highlightedcardGroup ? 'card-muted ' : ''));
            }

        },
        placeholderSize: function(card) {
            return(card.placeholder+'/18')
        },
        isOnMainTable: function(card) {
            var n = card.atomicNumber;
            return(n<=57 || n>=104 || (n>=72 && n<=89));
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

#cards-table {
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
.b-rare {background-color: $eg-rare;}
.b-uncommon {background-color: $eg-uncommon;}
.b-common {background-color: $eg-common;}
.b-spell {background-color: $eg-spell;}
.b-character {background-color: $eg-character}
.b-location {background-color: $eg-location}
.b-item {background-color: $eg-item}
.b-adventure {background-color: $eg-transition-adventure}
.b-match {background-color: $eg-match}
.b-creature {background-color: $eg-creature}
.b-unique {background-color: $eg-unique}
.b-healing {background-color: $eg-healing}
.b-potions {background-color: $eg-potions}
.b-transfiguration {background-color: $eg-transfiguration}
.b-charms {background-color: $eg-charms}
.b-care-of-magical-creatures {background-color: $eg-care-of-magical-creatures}
.b-quidditch {background-color: $eg-quidditch}
.button {
    border: none;
}
</style>
