<template>
    <div>
        <div> Next Player is <b>{{ getCurrentPlayer }}</b></div>
        <div v-for="i in 3" :key="i" class="tic-tac-row">
            <Square v-for="j in 3" :key="j" :idx="getIndex( i, j )" ></Square>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Square from './Square'
    export default {
        name: 'board',
        methods: {
            getIndex( i, j ) {
                return 3 * ( i - 1 ) + ( j - 1 )
            }
        },
        components:{
            'Square': Square
        },
        computed: {
            ...mapGetters([
                'getCurrentPlayer'
            ]),
        }
    }
</script>
<style scoped>
    .tic-tac-row {
        width: 330px;
        height: 110px;
        display: flex;
    }
</style>