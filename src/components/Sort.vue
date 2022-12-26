<template>
  <div class="sort">
    <div class="sort__select-wrapper">
      <v-select
        @input="setSort"
        :options="[
          { label: 'Номер накладной вверх', code: 'up' },
          { label: 'Номер накладной вниз', code: 'down' },
        ]"
        class="v-select"
        placeholder="Сортировка"
      ></v-select>
    </div>
    <div class="sort__radio-wrapper">
      <div class="checkbox-wrapper">
        <label>
          <img class="sort__image" src="@/assets/icons/button-left.svg" alt="" />
          <input type="radio" value="1" name="sort-radio" v-model="isShowTable" />
          <span></span>
        </label>
        <label>
          <img class="sort__image" src="@/assets/icons/button-right.svg" />
          <input type="radio" value="2" name="sort-radio" v-model="isShowTable" />
          <span></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Sort',
  data() {
    return {
      isShowTable: '',
    };
  },
  watch: {
    isShowTable(value) {
      this.SET_IS_TABLE_SHOW(value);
    },
  },
  methods: {
    ...mapMutations(['SET_FILTERED_TABLE_SORT', 'SET_IS_TABLE_SHOW']),
    setSort(value) {
      this.SET_FILTERED_TABLE_SORT(value.code);
    },
    setIsTableShow(value) {
      this.SET_IS_TABLE_SHOW(value);
    },
  },
};
</script>
<style scoped lang="scss">
.sort {
  display: flex;
  &__select-wrapper {
    display: flex;
    flex-grow: 1;
    margin: 0px 16px 16px 0px;
    padding: 16px;

    background-color: #ffffff;
    -webkit-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    -moz-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  }

  &__image {
    -webkit-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    -moz-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  }

  &__radio-wrapper {
    display: flex;
  }
}

.v-select {
  // padding: 16px;
  // margin: 16px;
  flex-grow: 1;
  background-color: #ffffff;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-wrapper input {
  position: absolute;

  opacity: 0;
  сursor: pointer;
}

.checkbox-wrapper label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 17px;
  user-select: none;
}

.checkbox-wrapper span {
  // position: absolute;
  // top: 0;
  // left: 0;
  // height: 25px;
  // width: 25px;
  // background-color: #c9c9c9;
  // border-radius: 50%;
}

.checkbox-wrapper label input:checked ~ span {
  background-color: #fec901;
}

.checkbox-wrapper span:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox-wrapper label input:checked ~ span:after {
  display: block;
}

.checkbox-wrapper label span:after {
  // top: 9px;
  // left: 9px;
  // width: 8px;
  // height: 8px;
  // border-radius: 50%;
  // background: white;
}
</style>
