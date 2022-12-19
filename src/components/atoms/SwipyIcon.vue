<template>
  <span class="swipy-icon">
    {{ name }}
  </span>
</template>

<script>
export default {
  name: "SwipyIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.swipy-icon {
  font-family: "Material Symbols Rounded";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  user-select: none;
}
</style>
