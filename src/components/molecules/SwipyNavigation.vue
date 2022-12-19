<template>
  <nav class="swipy-navigation">
    <ul class="swipy-navigation__list">
      <li class="swipy-navigation__list-item">
        <a href="#">
          <SwipyIcon name="face" />
        </a>
      </li>
      <li class="swipy-navigation__list-item">
        <a href="#">
          <SwipyIcon name="add_circle" />
        </a>
      </li>
      <li class="swipy-navigation__list-item">
        <a href="#">
          <SwipyIcon name="sync" />
        </a>
      </li>
      <li class="swipy-navigation__list-item">
        <button @click="$emit('lock')">
          <SwipyIcon name="lock_open" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import SwipyIcon from "@/components/atoms/SwipyIcon.vue";
export default {
  name: "SwipyNavigation",
  components: {
    SwipyIcon,
  },
};
</script>

<style lang="scss" scoped>
.swipy-navigation {
  height: 100%;
  width: 100%;

  &__list {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  &__list-item a,
  &__list-item button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    color: $text-color;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      background-color: $secondary-light-color;
    }
  }

  &__list-item button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
