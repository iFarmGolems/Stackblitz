const log = console.log;

const app = new Vue({
  el: '#app',
  template: `
    <div>
      <input type="range" :min="min" :max="max" :step="step" v-model.number="value" />
      <button @click="playOrStop">{{isPlaying ? 'Stop' : 'Play'}}</button>
    </div>
  `,
  data: {
    value: 0,
    isPlaying: false,
    min: 0,
    max: 100,
    step: 10,
    intervalRef: null,
  },
  methods: {
    playOrStop() {
      this.isPlaying = !this.isPlaying;
    },
    next() {
      this.value =
        this.value + this.step > this.max ? this.min : this.value + this.step;
    },
    previous() {},
  },
  watch: {
    value(val) {
      log(val);
    },
    isPlaying(play) {
      if (play) {
        this.intervalRef = setInterval(() => {
          this.next();
        }, 1000);
      } else {
        clearInterval(this.intervalRef);
      }
    },
  },
});
