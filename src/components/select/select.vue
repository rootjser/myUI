<template>
  <div>
    <select @click="onClick">
      <option>苹果</option>
      <option>桃子</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("11");
    },
  },
};
</script>
<style lang="scss" scoped>
select {
  font-size: 20px;
}
</style>