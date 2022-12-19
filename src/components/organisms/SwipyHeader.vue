<template>
  <div class="swipy-header" :class="[{ 'swipy-header--unlocked': !isLocked }]">
    <SwipyIcon v-if="isLocked" name="lock" />
    <div v-else class="swipy-header__navigation-wrapper">
      <SwipyNavigation @lock="$emit('lockContent')" />
    </div>
  </div>
</template>

<script>
import SwipyIcon from "@/components/atoms/SwipyIcon.vue";
import SwipyNavigation from "@/components/molecules/SwipyNavigation.vue";

export default {
  name: "SwipyHeader",
  components: {
    SwipyIcon,
    SwipyNavigation,
  },
  props: {
    isLocked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.swipy-header {
  @include border-default;
  transition: border-color 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $header-height;
  width: $header-width;
  border-radius: 100%;
  cursor: pointer;

  &--unlocked {
    @include border-success;
    width: $header-width-unlocked;
    max-width: $header-max-width-unlocked;
    height: $header-height-unlocked;
    border-radius: 15px;
    cursor: auto;
  }

  &--error {
    @include border-error;
  }

  &__navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
}
</style>
