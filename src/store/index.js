import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableData: [],
    filteredTableData: [],
    isTableShow: '2',
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      state.tableData = payload;
      state.filteredTableData = state.tableData;
    },
    SET_FILTERED_TABLE_DATA(state, payload) {
      state.filteredTableData = state.tableData;
      if (payload.type === 'field') {
        state.filteredTableData = state.tableData.filter((item) => {
          return item.number.toLowerCase().includes(payload.value.toLowerCase());
        });
      } else if (payload.type === 'select') {
        if (payload.value === undefined) return;
        state.filteredTableData = state.filteredTableData.filter((item) => {
          return item.type === payload.value;
        });
      }
    },
    // prettier-ignore
    SET_FILTERED_TABLE_SORT(state, payload) {
      if (payload === 'up') {
        state.filteredTableData = state.filteredTableData.sort((a, b) => {
          return a.number.localeCompare(b.number);
        });
      } else if (payload === 'down') {
        state.filteredTableData = state.filteredTableData.sort((a, b) => {
          return b.number.localeCompare(a.number);
        });
      }
    },
    SET_IS_TABLE_SHOW(state, payload) {
      state.isTableShow = payload;
    },
    REMOVE_TABLE_ITEM(state, payload) {
      state.filteredTableData.splice(payload, 1);
    },
  },
  actions: {},
  getters: {
    tableData(state) {
      return state.tableData;
    },
  },
});
