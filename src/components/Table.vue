<template>
  <div>
    <table v-if="isTableShow == '2'" class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Номер накладной</th>
          <th>Тип заказа</th>
          <th>Дата создания</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table__tbody">
        <tr v-for="(item, index) in filteredTableData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.number }}</td>
          <td>{{ translateType(item.type) }}</td>
          <td>{{ item.creationDate }}</td>
          <td @click="clickIcon" class="table__icon">
            <img class="table__image" src="@/assets/icons/Vector.svg" alt="" />
            <div class="modal" @click="removeItem(index)">
              <img class="modal__icon" src="@/assets/icons/three_dots.svg" alt="" />
              Удалить
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else-if="isTableShow == '1'" class="card">
      <div class="card__item" v-for="(item, index) in filteredTableData" :key="item.id">
        <div class="card__title">
          <div class="card__id">{{ item.id }}</div>
          <div class="card__icon" @click="clickIcon">
            <img class="card__image" src="@/assets/icons/Vector.svg" alt="" />
            <div class="modal" @click="removeItem(index)">
              <img class="modal__icon" src="@/assets/icons/three_dots.svg" alt="" />
              Удалить
            </div>
          </div>
        </div>
        <div class="card__body">
          <div class="card__invoice">
            <span class="card__subtitle">Номер накладной:</span> {{ item.number }}
          </div>
          <div class="card__type">
            <span class="card__subtitle">Тип заказа:</span> {{ translateType(item.type) }}
          </div>
          <div class="creation__date">
            <span class="card__subtitle">Дата создания:</span> {{ item.creationDate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Table',
  computed: {
    ...mapState(['filteredTableData', 'tableData', 'isTableShow']),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['REMOVE_TABLE_ITEM']),
    clickIcon(event) {
      const modals = document.querySelectorAll('.modal');

      modals.forEach((item) => {
        item.classList.remove('modal__active');
      });

      console.log('target', event.target.querySelector('.modal'));

      const target = event.target.querySelector('.modal');
      if (target) {
        target.classList.add('modal__active');
      } else {
        console.log('event', event.target);
      }
    },
    removeItem(index) {
      this.REMOVE_TABLE_ITEM(index);
    },
    translateType(type) {
      if (type === 'Pickup') {
        return 'Самовывоз';
      }

      if (type === 'Delivery') {
        return 'Доставка';
      }

      if (type === 'Pick-point') {
        return 'Доставка в пункт выдачи';
      }

      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  & th {
    padding: 12px;

    background-color: #e6e6e6;
  }

  & tr {
    height: 38px;
  }

  &__tbody {
    background-color: #ffffff;
  }

  &__icon {
    position: relative;

    cursor: pointer;
  }

  &__image {
    pointer-events: none;
  }
}

.card {
  flex-wrap: wrap;
  display: flex;

  &__item {
    display: flex;
    flex-direction: column;
    width: 290px;
    margin-right: 16px;
    margin-bottom: 16px;

    border-radius: 3px;

    -webkit-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    -moz-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
    box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  }
  &__title {
    display: flex;
    padding: 12px 16px;
    justify-content: space-between;

    background-color: #ede8f5;
  }

  &__body {
    padding: 16px;

    text-align: left;
    background-color: #f6fafb;
  }

  &__icon {
    position: relative;

    cursor: pointer;
  }

  &__image {
    pointer-events: none;
  }

  &__invoice {
    margin-bottom: 16px;
  }

  &__type {
    margin-bottom: 16px;
  }

  &__subtitle {
    color: #647a8c;
    font-weight: 700;
  }
}

.modal {
  position: absolute;
  top: 30px;
  left: -118px;
  z-index: 100;

  display: none;
  padding: 19px 28px 19px 19px;
  border-radius: 2px;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  -moz-box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);
  box-shadow: 4px 5px 21px 4px rgba(34, 60, 80, 0.08);

  &__active {
    display: flex;
  }

  &__icon {
    margin-right: 20px;
  }
}
</style>
