import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    currentPlayer:'X',
  	history:[
  		{squares: Array(9).fill(null),winner:null,player:'X'}
  	],
  	stepNo:0,
    winner:null
  },
  actions:{

  },
  getters:{
    getHistory: (state) => state.history,
    getStepNo: (state) => state.stepNo,
    getCurrentPlayer: (state) => state.currentPlayer,
    getWinner: (state) => state.winner
  },
  mutations:{
    changePlayer(state, player){
      state.currentPlayer = player
    },
    togglePlayer(state){
      state.currentPlayer = state.currentPlayer == 'X' ? '0' : 'X'
    },
    reset(state){
      state.history = [
    		{squares: Array(9).fill(null),winner:null}
    	]
      state.stepNo=0
      state.currentPlayer = state.winner ? state.winner : state.currentPlayer
      state.winner=null
    },
    addHistory(state, payload){
      state.history = payload
      state.stepNo = state.history.length-1
    },
    setWinner(state,winner){
      state.winner=winner;
    },
    setStepNo(state, no){
      state.stepNo = no;
    }
  }
})