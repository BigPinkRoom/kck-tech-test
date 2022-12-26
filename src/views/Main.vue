<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <FiltersMain />
      <div class="content">
        <Sort />
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import FiltersMain from '@/components/Filters.vue';
import Sort from '@/components/Sort.vue';
import Table from '@/components/Table.vue';
import apiResult from '@/API/api';
import { mapMutations } from 'vuex';

export default {
  name: 'Main',
  components: {
    Header,
    FiltersMain,
    Sort,
    Table,
  },

  created() {
    this.SET_TABLE_DATA(apiResult);
  },
  methods: {
    ...mapMutations(['SET_TABLE_DATA']),
  },
};
</script>
<style scoped lang="scss">
.main-content {
  display: flex;
  max-width: 1500px;
  margin: auto;
  margin-top: 22px;
  padding: 0 110px 0;
}

.content {
  width: 100%;
}
</style>
