let video = document.getElementById("video")
let pauseIcon = document.getElementById("icon")

pauseIcon.addEventListener("click", function () {
    if (video.paused) {
        video.play()
        pauseIcon.classList.remove("fa-play-circle")
        pauseIcon.classList.add("fa-pause-circle")
    } else {
        video.pause()
        pauseIcon.classList.remove("fa-pause-circle")
        pauseIcon.classList.add("fa-play-circle")
    }

})