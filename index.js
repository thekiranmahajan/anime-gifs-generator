const animePicContainer = document.getElementById("anime-pic-container");
const options = document.querySelectorAll('input[name="options"]');

const getAnimeGifs = async (category) => {
  const url = `https://api.waifu.pics/sfw/${category}`;
  const gif = await fetch(url).then((res) => res.json());

  animePicContainer.innerHTML += `<div class="card" id="card">
                <img src="${gif.url}" alt="gif" />
              </div>`;
};

const removeStyles = () => {
  options.forEach((option) => {
    option.parentNode.classList.remove("active");
  });
};
options.forEach((option) => {
  option.addEventListener("click", () => {
    removeStyles(option);
    animePicContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      getAnimeGifs(option.value);
    }
    option.parentNode.classList.add("active");
  });
});



