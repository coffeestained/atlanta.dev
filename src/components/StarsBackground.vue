<script lang="ts">
    export default {
      mounted() {
        const bg = (this.$refs.star_background as HTMLElement);
        let startedAt : number, duration : number = 1000;

        function start() {
          startedAt = Date.now();
          createStar();
          requestAnimationFrame(update)
        }

        function update() {
          let elapsedTime = Date.now() - startedAt;

          // playback is a value between 0 and 1
          // being 0 the start of the animation and 1 its end
          let playback = elapsedTime / duration;

          if (playback > 0 && playback < 1) {
            // Queue the next frame
            requestAnimationFrame(update);
          } else {
            // Wait for a while and restart the animation
            setTimeout(start, duration / 10);
          }
        }

        /* assign el to a property or ref */
        const createStar = () => {
          let right = 0;
          const top = Math.random() * bg.offsetHeight;
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.top = top + 'px';
          bg.appendChild(star);

          let lastTime: number;
          const runStar = () => {
            const time = Date.now();
            if (lastTime != null) {
              const delta = time - lastTime;
              console.log(delta)
              // 6.9998
            }
            try {
              if (right >= bg.offsetWidth) {
                star.remove();
              } else {
                requestAnimationFrame(runStar)
              }
              right += 1;
              star.style.right = right + 'px';
            } catch (err) {
              this;
            }
          }

          requestAnimationFrame(runStar)
        }

        start();
      }
    }
</script>

<template>
  <div id="star_container" ref="star_background" >

  </div>
</template>

<style>
#star_container {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 1;
}
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  right: 0;
  animation: starTwinkle 3s infinite linear;
}

@keyframes starTwinkle {
  0% {
      background: rgba(255,255,255,0.4);
  }
  25% {
    background: rgba(255,255,255,0.8);
  }
  50% {
    background: rgba(255,255,255,1);
  }
  75% {
    background: rgba(255,255,255,0.8);
  }
  100% {
    background: rgba(255,255,255,0.4);
  }
}
</style>
