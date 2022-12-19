<template>
  <div class="swipy-direction">
    <SwipyIcon name="expand_less" class="swipy-direction__arrow" />
    <SwipyIcon name="expand_less" class="swipy-direction__arrow" />
    <SwipyIcon name="expand_less" class="swipy-direction__arrow" />
  </div>
</template>

<script>
import SwipyIcon from "@/components/atoms/SwipyIcon.vue";
export default {
  name: "SwipyDirection",
  components: {
    SwipyIcon,
  },

  props: {
    direction: {
      validator(value) {
        return ["up", "right", "left", "bottom"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.swipy-direction {
  display: flex;
  flex-direction: column;
  color: $secondary-light-color;

  &__arrow {
    font-size: 100px;
    line-height: 40px;
    animation: 1s infinite linear color-change;
    animation-delay: 0.3s;

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.1s;
    }
  }
}

@keyframes color-change {
  50% {
    color: $secondary-color;
  }

  100% {
    color: $secondary-light-color;
  }
}
</style>
