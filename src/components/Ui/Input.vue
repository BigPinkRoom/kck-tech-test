<template>
  <div>
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('updateValue', value);
    },
  },
};
</script>

<style lang="scss">
.input {
  width: calc(100% - 21px);
  padding: 8px 10px 8px 9px;

  font-size: 16px;

  outline: 0;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  &::placeholder {
    font-size: 16px;
    color: #000000;
  }
}
</style>
