<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop>
                    <div class="modal-header">
                        <div class="modal-card" :class="'e-'+card.type.replace(new RegExp(' ', 'g'), '-')">
                            <span class="modal-card-number">{{card.number}}</span>
                        </div>
                        <div class="modal-header-inner">
                            <span class="modal-card-name">{{card.name}}</span><br />
                            <span class="modal-card-type">{{card.type}}</span>
                        </div>
                        <span @click="$emit('close')"><icon class="modal-icon-close" name="times" scale="1.3"></icon></span>
                    </div>
                    <div class="modal-body">
                        Properties:
                        <table class="table is-narrow">
                            <tbody>
                                <tr>
                                    <td>Card Number:</td>
                                    <td>{{card.set}} {{card.number}}</td>
                                    <td>Name:</td>
                                    <td>{{card.name}}</td>
                                </tr>
                                <tr>
                                    <td>Kind</td>
                                    <td>{{card.kind}}</td>
                                    <td>Cost:</td>
                                    <td>{{card.cost}}</td>
                                </tr>
                                <tr>
                                    <td>Text:</td>
                                    <td>{{card.text}}</td>
                                    <td>Rarity:</td>
                                    <td>{{card.rarity}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <div class="modal-tag" :class="'e-'+card.type.replace(new RegExp(' ', 'g'), '-')">
                            <a :href="'https://en.wikipedia.org/wiki/'+card.name" target="_blank">
                                <icon class="modal-tag-icon" name="wikipedia-w" scale="1"></icon>
                                {{element.name}} on Wikipedia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'element-modal',
    props: ['element'],
    data () {
        return ({});
    }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  background-color: #2C2C2C;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
}

.modal-header {
    position: relative;
    padding: 12px;
    border-radius: 6px 6px 0px 0px;
    background-color: #3C3C3C;
    color: white;
    text-align: left;
    overflow: auto;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
}

.modal-element {
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    color: #2C2C2C;
    text-align: center;
}

.modal-element-symbol {
    height: 40px;
    margin-top: 6px;
    margin-bottom: 4px;
    font-size: 40px;
}

.modal-header-inner {
    position: absolute;
    bottom: 20px;
    margin-left: 100px;
}

.modal-element-name{
    font-size: 24px;
}

.modal-element-group {
    color: #AAAAAA;
}

.modal-icon-close {
    float: right;
}

.modal-icon-close:hover {
    cursor: pointer;
}

.modal-body {
    padding: 8px;
    color: white;
    text-align: left;
}

.table {
    margin-bottom: 0px;
}

.modal-footer {
    padding: 8px;
    border-radius: 0px 0px 6px 6px;
    background-color: #3C3C3C;
    color: white;
    text-align: right;
    overflow: auto;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
}

.modal-footer a{
    color: #2C2C2C;
}

.modal-tag {
    padding-right: 8px;
    border-radius: 18px;
    float: right;
}

.modal-tag-icon {
    float: left;
    margin: 6px;
}

/* Element groups */
.e-nonmetal {background-color: $eg-nonmetal;}
.e-noble-gas {background-color: $eg-noble-gas;}
.e-alkali-metal {background-color: $eg-alkali-metal;}
.e-alkaline-earth-metal {background-color: $eg-alkaline-earth-metal;}
.e-metalloid {background-color: $eg-metalloid}
.e-halogen {background-color: $eg-halogen}
.e-metal {background-color: $eg-metal}
.e-transition-metal {background-color: $eg-transition-metal}
.e-lanthanoid {background-color: $eg-lanthanoid}
.e-actinoid {background-color: $eg-actinoid}
.e-post-transition-metal {background-color: $eg-post-transition-metal}

/* Transiton: modal */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
