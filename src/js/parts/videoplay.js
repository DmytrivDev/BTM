let activeVideo = null;

const playVideo = async videoElement => {
  if (activeVideo && activeVideo !== videoElement) {
    activeVideo.pause(); // Ставим на паузу предыдущее видео
  }

  try {
    await videoElement.play(); // Ждем, пока видео начнет воспроизводиться
    videoElement.controls = true; // Добавляем атрибут controls для текущего видео
    activeVideo = videoElement; // Обновляем активное видео
  } catch (err) {
    console.log(err);
  }
};

const videos = document.querySelectorAll('.reviews-video');

videos?.forEach(videoItem => {
  videoItem.addEventListener('click', function () {
    const video = videoItem.querySelector('video');

    if (video !== activeVideo) {
      const button = videoItem.querySelector('.video-play');

      if (button) {
        button.style.display = 'none';
        videoItem.classList.add('bg-hidd');
      }

      playVideo(video);
    }
  });
});

export function pauseVideo() {
  const videos = document.querySelectorAll('.reviews-video video');
  videos.forEach(video => {
    video.pause();
  });
}
