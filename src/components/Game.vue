<template>
    <div class="game">
        <Board></Board>
        <div>
            <div v-if="getWinner">Winner is {{getWinner}} <button class='reset' @click.prevent="reset()"> reset</button></div>
            <div v-else-if="getHistoryLen == 10">Match Draw <button @click.prevent="reset()"> reset</button></div>
        </div>
  </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
    import Board from './Board'
    export default {
        name: 'game',
        methods:{
            ...mapMutations([
                'changePlayer', 'reset', 'setStepNo', 'setWinner'
            ]),
            goToStep: function( idx ) {
                let current = this.getHistory[ idx ];
                this.setStepNo( idx );
                this.setWinner( current.winner );
                this.changePlayer( current.player );
            }
        },
        components:{
            'Board': Board
        },
        computed: {
            ...mapGetters([
                'getHistory', 'getWinner'
            ]),
            getHistoryLen() {
                return this.getHistory.length
            }
        }
    }
</script>
<style scoped>
.game{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
button.reset{
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>