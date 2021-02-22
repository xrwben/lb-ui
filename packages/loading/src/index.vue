<template>
    <div class="loading">
      <div class="load-container">
        <div class="container container1">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>
        </div>
        <div class="container container2">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {

      };
    }
  };
</script>

<style lang="scss">
  .load-container {
    margin: 50px auto;
    width: 50px;
    height: 50px;
    position: relative;
    .container {
        position: absolute;
        width: 100%;
        height: 100%;
        .circle{
            width: 25%;
            height: 25%;
            background-color: #00adb5;
            border-radius: 100%;
            position: absolute;
            animation: bouncedelay 1.2s infinite ease-in-out;
            animation-fill-mode: both;
        }
        .circle1 { top: 0; left: 0; }
        .circle2 { top: 0; right: 0; }
        .circle3 { right: 0; bottom: 0; }
        .circle4 { left: 0; bottom: 0; }
    }
    .container1 {
        .circle2 {
            animation-delay: 0.3s;
        }
        .circle3 {
            animation-delay: 0.6s;
        }
        .circle4 {
            animation-delay: 0.9s;
        }
    }
    .container2 {
        transform: rotateZ(45deg);
        .circle1 {
            animation-delay: 0.1s;
        }
        .circle2 {
            animation-delay: 0.4s;
        }
        .circle3 {
            animation-delay: 0.7s;
        }
        .circle4 {
            animation-delay: 1s;
        }
    }
}

@keyframes bouncedelay {
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
}
</style>