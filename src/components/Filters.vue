<template>
  <div class="filters">
    <h3 class="filters__title">Фильтр</h3>
    <h4 class="filters__subtitle">Номер накладной</h4>
    <v-input @updateValue="setNumberInvoice" placeholder="Введите фрагмент"></v-input>
    <h4 class="filters__subtitle">Тип заказа</h4>
    <v-select
      @input="setDelivery"
      :options="[
        { label: 'Самовывоз', code: 'Pickup' },
        { label: 'Курьерская доставка', code: 'Delivery' },
        { label: 'Доставка в пункт выдачи', code: 'Pick-point' },
      ]"
      placeholder="Выберите из списка"
    ></v-select>
  </div>
</template>

<script>
import VInput from '@/components/Ui/Input.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'FiltersMain',
  components: {
    VInput,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['SET_FILTERED_TABLE_DATA']),
    setNumberInvoice(value) {
      const valueObject = {
        value,
        type: 'field',
      };
      this.SET_FILTERED_TABLE_DATA(valueObject);
    },
    setDelivery(value) {
      const valueObject = {
        value: value?.code,
        name: 'text',
        type: 'select',
      };
      console.log('valueObject', valueObject);
      this.SET_FILTERED_TABLE_DATA(valueObject);
    },
  },
};
</script>
<style scoped lang="scss">
.filters {
  width: 100%;
  max-width: 280px;
  margin-right: 16px;
  padding: 16px;
  height: max-content;

  text-align: left;

  background-color: #ffffff;
  -webkit-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  -moz-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  &__title {
    margin: 0;

    color: #2b2839;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  &__subtitle {
    margin-bottom: 4px;

    font-size: 14px;
    line-height: 16px;
  }
}
</style>
