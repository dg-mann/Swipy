<template>
  <div class="swipy-swipe">
    <div v-if="!isLocked" class="swipy-swipe__content-wrapper">
      <div class="swipy-swipe__content">
        <slot
          name="swipeContentSlot"
          :is-locked="isLocked"
          :onLock="lockContent"
        />
      </div>
    </div>
    <div class="swipy-swipe__swipe-component-wrapper">
      <SwipyDirection direction="up" />
      <div
        ref="swipeComponent"
        class="swipy-swipe__swipe-component"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @touchstart="startDrag"
        @touchmove="drag"
        @touchend="stopDrag"
      >
        <slot
          name="swipeComponentSlot"
          :is-locked="isLocked"
          :onLock="lockContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SwipyDirection from "@/components/molecules/SwipyDirection.vue";

const MIN_DRAG_HEIGHT = 300;

export default {
  name: "SwipySwipe",

  components: {
    SwipyDirection,
  },

  data() {
    return {
      isLocked: true,
      isTouching: false,
      isMouseDown: false,
      swipeComponentPosition: [0, 0],
      startHeight: 0,
    };
  },

  watch: {
    swipeComponentPosition: {
      handler(newVal) {
        let diff = this.startHeight - newVal[1];
        if (this.isLocked && diff > MIN_DRAG_HEIGHT) {
          this.unlockContent();
        }
      },
      deep: true,
    },
  },

  methods: {
    startDrag(e) {
      if (this.isLocked) {
        if (e.type === "touchstart") {
          this.isTouching = true;
          this.swipeComponentPosition[1] = e.touches[0].clientY;
          this.startHeight = this.swipeComponentPosition[1];
        } else if (e.type === "mousedown") {
          this.isMouseDown = true;
          this.swipeComponentPosition[1] = e.clientY;
          this.startHeight = this.swipeComponentPosition[1];
        }
      }
    },

    stopDrag(e) {
      if (this.isLocked) {
        if (e.type === "touchend") {
          this.isTouching = false;
        } else if (e.type === "mouseup") {
          this.isMouseDown = false;
        }

        let diff = this.startHeight - this.swipeComponentPosition[1];
        if (diff < MIN_DRAG_HEIGHT) {
          this.lockContent();
        }
      }
    },

    drag(e) {
      if (this.isLocked && (this.isTouching || this.isMouseDown)) {
        this.swipeComponentPosition[0] =
          this.swipeComponentPosition[1] -
          (this.isTouching ? e.touches[0].clientY : e.clientY);

        this.swipeComponentPosition[1] = this.isTouching
          ? e.touches[0].clientY
          : e.clientY;

        this.$refs.swipeComponent.style.top =
          this.$refs.swipeComponent.offsetTop -
          this.swipeComponentPosition[0] +
          "px";
      }
    },

    unlockContent() {
      this.isLocked = false;
      this.isTouching = false;
      this.isMouseDown = false;
      this.$refs.swipeComponent.style.top = "auto";
      this.$refs.swipeComponent.style.bottom = "0";
    },

    lockContent() {
      this.isLocked = true;
      this.$refs.swipeComponent.style.top = "auto";
      this.$refs.swipeComponent.style.bottom = "100px";
    },
  },
};
</script>

<style lang="scss" scoped>
.swipy-swipe {
  height: 100%;

  &__swipe-component-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__swipe-component {
    position: absolute;
    bottom: 100px;
  }

  &__content-wrapper {
    $padding: 30px;
    height: calc(100% - $header-height - ($header-height / 2));
    margin-top: calc($header-height / 2);
    margin-bottom: $header-height;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 $padding;
  }

  &__content {
    animation: 1s linear visible;
  }
}

@keyframes visible {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
