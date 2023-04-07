<template>
  <div class="products">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (1).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (2).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (3).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (4).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (6).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <video width="640" height="480" autoplay muted loop>
            <source src="../assets/Video (5).mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="carousel-item">
          <img src="../assets/ProjectTwo.png" class="d-block w-100" alt="A ATL Project">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style>
.products {
  position: relative;
  z-index: 3;
}
@media (min-width: 1024px) {
  .products {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
