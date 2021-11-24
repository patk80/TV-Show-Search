const form       = document.querySelector("#search-form");
let imageResults = document.querySelector("#image-results-container");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = "";
});

const makeImages = (shows) => {

    for(let result of shows) {

        if(result.show.image) {
            const img = document.createElement("IMG");
            img.style.margin = "5px";
            img.src = result.show.image.medium;
            imageResults.append(img);
        }

    }

}