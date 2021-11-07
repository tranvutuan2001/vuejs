
new Vue({
  el: "#app",
  data: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isThisFirstRun: true,
  },
  methods: {
    countDownTimer() {
      setTimeout(() => {
        if (this.days > 0 || this.hours > 0 || this.minutes > 0 || this.seconds > 0 || this.isThisFirstRun) {
          const countDownDate = new Date("Nov 27, 2021 00:00:00").getTime();
          const now = new Date().getTime();
          this.isThisFirstRun = false;
          // Find the distance between now and the count down date
          const distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
          this.countDownTimer();
        }
      }, 1000);
    },
  },

  created: function () {
    this.countDownTimer();
  },
});
