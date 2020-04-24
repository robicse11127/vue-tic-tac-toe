<template>
    <div>
        <button class="square" @click="handleClick( idx )">{{ getVal }}</button>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
    export default {
        name: 'square',
        props:[
            'idx'
        ],
        methods: {
            ...mapMutations([
                'addHistory', 'setWinner', 'togglePlayer'
            ]),
            calculateWinner: function(squares) {
                const winnningCombination = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ];
                for ( let i = 0; i < winnningCombination.length; i++ ) {
                    const [ a, b, c ] = winnningCombination[ i ];
                    if ( squares[ a ] && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ] ) {
                        return squares[ a ];
                    }
                }
                return null;
            },
            handleClick: function(idx) {
                let history = this.getHistory.slice(0, this.getStepNo+1);
                let current = history[history.length - 1];
                let squares = current.squares.slice();
                if(current.winner || squares[idx]){
                    return ;
                }
                squares[idx] = this.getCurrentPlayer;
                let winner = this.calculateWinner(squares);
                let payload = {
                    'squares':squares,
                    'winner': winner,
                    'player':this.getCurrentPlayer == 'X'? '0':'X'
                }
                this.addHistory( history.concat([payload]) );
                if(winner){
                    this.setWinner(winner);
                }
                this.togglePlayer();
            },
        },
        computed: {
            ...mapGetters([
            'getHistory','getStepNo','getCurrentPlayer'
            ]),
            getVal: function () {
            return this.getHistory[this.getStepNo]['squares'][this.idx];
            },
            getCurrent: function() {
            return this.getHistory[this.getStepNo]
            }
        }
    }
</script>
<style scoped>
  .square{
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 60px;
    font-weight: bold;
    line-height: 110px;
    width: 110px;
    height: 110px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
  }
</style>