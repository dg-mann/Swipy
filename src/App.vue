<template>
  <SwipySwipe>
    <template v-slot:swipeContentSlot="slotProps">
      <div>
        <button 
          class="swipy__content-lock"
          @click="slotProps.onLock"
        >
          <SwipyIcon name="lock_open" />
        </button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet
          sodales pharetra. Pellentesque lacinia, leo a sodales pharetra, ante velit
          elementum tellus, id sodales risus augue ac elit. Morbi ullamcorper quis
          augue sit amet dictum. Integer felis magna, bibendum sit amet vehicula at,
          consectetur et ante. Cras id pharetra nunc. Nunc suscipit felis eu quam
          congue rhoncus. Maecenas maximus nulla urna, a varius est euismod eget.
          Donec tempor, urna ac egestas vehicula, ligula justo viverra lectus, a
          ultrices ante mauris at turpis. Integer aliquam diam ut lacinia dictum. In
          efficitur, quam sed lacinia posuere, eros ligula accumsan ex, eu blandit
          leo justo vitae nibh. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Vestibulum vel hendrerit metus,
          tincidunt pretium lorem. Duis orci elit, laoreet sit amet mauris nec,
          finibus semper dolor. Sed vitae venenatis turpis. Nunc pharetra eros
          pulvinar magna elementum, vitae fringilla turpis lacinia. Quisque ex
          ipsum, pulvinar nec massa mollis, fringilla efficitur nunc. Vestibulum sed
          placerat quam. Nam ornare fermentum sapien, ut auctor tortor ornare
          consectetur. Sed tincidunt maximus porta. Nam quis lacus eros. Nunc nec
          libero vitae magna pretium ornare eu vel tellus. Morbi sodales turpis et
          urna scelerisque commodo. Mauris nunc mauris, tincidunt et pharetra ac,
          egestas a orci. Proin id est quis sem lobortis facilisis. Donec blandit
          ipsum eget diam posuere, vel feugiat urna fringilla. Praesent viverra
          malesuada odio, ac iaculis purus eleifend sed. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Nunc aliquam rutrum egestas. Sed dolor
          justo, interdum ac purus id, porta tincidunt ligula. Aliquam blandit vitae
          erat nec aliquam. Quisque egestas quam tristique egestas pellentesque.
          Vivamus gravida tincidunt magna, in semper dolor porttitor tempus.
          Vestibulum elementum lectus vel nunc lobortis, sit amet efficitur lacus
          porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          viverra dolor non tortor sagittis condimentum. Duis vulputate, neque sit
          amet malesuada gravida, risus ligula tincidunt ante, a feugiat nulla
          mauris eget purus. Cras quis porta elit. Mauris tincidunt varius urna, non
          molestie nisl ultrices in. Nam convallis, leo et imperdiet feugiat, mi
          erat facilisis erat, vitae tempor sem quam ut arcu. Duis dui arcu,
          placerat quis nibh porttitor, fermentum finibus sem. Nunc tempor odio in
          massa pulvinar commodo. Mauris diam velit, finibus aliquam elementum eu,
          blandit eget augue. Pellentesque ut lacus a dui dapibus blandit vel id
          est. Donec vel lacus ac velit faucibus ultrices sit amet at nisl. Donec ex
          neque, varius non magna eget, lobortis dapibus sapien. Praesent at dolor
          quis magna pretium varius. Aenean posuere faucibus mauris. Sed tortor
          urna, lobortis a nunc sed, porta fringilla dolor. Suspendisse eget tortor
          tincidunt, hendrerit lacus a, vehicula mauris. Pellentesque vitae dui
          urna. Mauris sodales quam faucibus elit vulputate, sed placerat ligula
          porta. Donec interdum maximus sapien, vitae tincidunt sem accumsan eu. In
          id vestibulum libero, ac aliquet sem. Nam in nunc eget mauris ultricies
          ullamcorper. Donec vestibulum elementum metus in blandit. In vitae
          suscipit sem, eget laoreet mauris. Maecenas eget feugiat nisl. Suspendisse
          potenti. Integer dapibus iaculis metus ac ultricies. Morbi scelerisque
          rutrum nulla, ac porta augue dapibus scelerisque. Pellentesque in ligula
          ac risus venenatis pellentesque quis vehicula ipsum.
        </div>
      </div>
    </template>
    <template v-slot:swipeComponentSlot="slotProps">
      <SwipyHeader 
        :is-locked="slotProps.isLocked"
        @lockContent="slotProps.onLock"
      />
    </template>
  </SwipySwipe>
</template>

<script>
import SwipyHeader from "./components/organisms/SwipyHeader.vue";
import SwipyIcon from "./components/atoms/SwipyIcon.vue";
import SwipySwipe from "./components/organisms/SwipySwipe.vue";

export default {
  name: "App",

  components: {
    SwipyHeader,
    SwipyIcon,
    SwipySwipe,
  },
};
</script>

<style lang="scss" scoped>
.swipy {
  &__content-lock {
    @include border-success;
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 50px;
    color: $text-color;
    background-color: transparent;
    border-radius: 15px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: $secondary-light-color;
    }
  }
}
</style>
