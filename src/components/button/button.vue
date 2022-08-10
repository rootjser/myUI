
<script>
export default {
  methods: {
    onClick() {
      alert("11");
    },
  },
  render() {
    return (
      <div>
        <button>保存</button>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
button {
  color: red;
}
</style>