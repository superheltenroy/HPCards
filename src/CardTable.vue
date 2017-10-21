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
                    <grid-item size="16/18" v-else-if="card.placeholder && card.placeholder==16"></grid-item>
                    <grid-item size="10/18" v-else-if="card.placeholder && card.placeholder==10"></grid-item>
                </grid>
                <grid>
                    <grid-item size="3/18"></grid-item>
                    <grid-item size="1/18" v-for="card in cardsData" :key="card.atomicNumber" v-if="card.symbol && !isOnMainTable(card)">
                        <card-details   :card="card"
                                            :highlightedcardGroup="highlightedcardGroup"
                                            :class="buildcardClasses(card)"
                                            @showModal="triggerModal">
                        </card-details>
                    </grid-item>
                    <grid-item size="3/18" v-else-if="card.placeholder && card.placeholder==3"></grid-item>
                </grid>
            </container>
            <card-modal v-if="showModal" :card="modalcard" @close="showModal = false"></card-modal>
        </div>
    </div>
</template>

<script>
import CardDetails from './CardDetails.vue';
import cardModal from './cardModal.vue';
export default {
    name: 'cards-table',
    props: ['cardsData'],
    components: {CardDetails, cardModal},
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
.b-nonmetal {background-color: $eg-nonmetal;}
.b-noble-gas {background-color: $eg-noble-gas;}
.b-alkali-metal {background-color: $eg-alkali-metal;}
.b-alkaline-earth-metal {background-color: $eg-alkaline-earth-metal;}
.b-metalloid {background-color: $eg-metalloid}
.b-halogen {background-color: $eg-halogen}
.b-metal {background-color: $eg-metal}
.b-transition-metal {background-color: $eg-transition-metal}
.b-lanthanoid {background-color: $eg-lanthanoid}
.b-actinoid {background-color: $eg-actinoid}
.b-post-transition-metal {background-color: $eg-post-transition-metal}
.button {
    border: none;
}
</style>
