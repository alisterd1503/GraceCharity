function toggleReadMore(id) {
    var dots = document.getElementById("dots" + id);
    var moreText = document.getElementById("more" + id);
    var btnText = document.getElementById("read-more-btn" + id);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
}