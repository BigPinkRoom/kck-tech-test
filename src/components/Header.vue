<template>
  <div class="header header__title">Тестовое задание</div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 32px;

  background: rgb(72, 66, 204);
  background: linear-gradient(47deg, rgba(72, 66, 204, 1) 16%, rgba(236, 0, 241, 1) 93%);
  &__title {
    max-width: 1500px;
    margin: auto;
    padding: 110px;

    text-align: left;
    color: #ffffff;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
  }
}
</style>
