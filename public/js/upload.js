document.getElementById("musicUpload").onclick = function () {
  let xhr = new XMLHttpRequest();

  const selectedMusic = document.getElementById("selectedMusic");
  const musicStatus = document.getElementById("musicStatus");

  xhr.onload = function () {
    if (this.status == 200) {
      console.log("yes");
      musicStatus.innerHTML = "successful !";
      selectedMusic.value = "";
    } else {
      console.log("no");
      musicStatus.innerHTML = this.responseText;
    }
  };

  xhr.open("POST", "/music-upload");

  let formData = new FormData();
  if (selectedMusic.files.length > 0) {
    formData.append("music", selectedMusic.files[0]);
    xhr.send(formData);
  } else {
    musicStatus.innerHTML = "you should choose an audio file to upload";
  }
};
