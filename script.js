const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const video = params.get("video");

if (name) {
  document.getElementById("title").innerText =
    "✨ A Special Memory For " + name + " ✨";
}

if (video) {
  document.getElementById("videoPlayer").src = video;
}