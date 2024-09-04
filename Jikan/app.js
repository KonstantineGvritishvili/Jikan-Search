class AnimeCard {

    constructor(item) {

        this.item = item;

    }

    render() {

        return `
        
            <div class="card" style="width: 18rem;">
                <img src="${this.item.images.jpg.image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.item.title} </h5>
                    <p class="card-text">${this.item.duration}</p>
                    <a href="${this.item.url}" class="btn btn-primary">Anime</a>
                </div>
            </div>`;

    }

}

class AnimeSearch {

    constructor(cardsArea, input, button) {

        this.cardsArea = cardsArea;
        this.input = input;
        this.button = button;

        this.button.addEventListener("click", () => this.searchAnime());

    }

    searchAnime() {

        let searchTerm = encodeURIComponent(this.input.value);

        fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`)
            .then(response => response.json())
            .then(animeData => this.renderAnimeCards(animeData.data))
            

    }

    renderAnimeCards(list) {

        this.cardsArea.innerHTML = ""; 

        list.forEach(item => {

            const animeCard = new AnimeCard(item);
            this.cardsArea.innerHTML += animeCard.render();

        });

    }
    
}


const animeSearch = new AnimeSearch(
    
    document.querySelector("section"),
    document.querySelector("input"),
    document.querySelector("button")
);







