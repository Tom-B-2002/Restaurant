const filterFavourites = () => {
    const elements = document.querySelectorAll("article > article");
    const checkedFavourites = document.getElementById("favourites").checked;

    for (let i = 0; i < elements.length; i++) {
        const article = document.getElementById(`card${i}`);

        const heart = document.getElementById(`hartje${i}`);
        const favouriteStatus = heart.dataset.hartje;

        if (!checkedFavourites) {
            article.style.display = "";
        }

        const isFavourite = favouriteStatus === "isFavourite" && checkedFavourites;
        const isNotFavourite = favouriteStatus === "isNotFavourite" && checkedFavourites;

        if (isFavourite) {
            article.style.display = "";
        }
        if (isNotFavourite) {
            article.style.display = "none";
        }
    }
}

const makeFavourite = (id) => {
    const element = document.getElementById(id);
    const favouriteStatus = element.dataset.hartje;
    const topRightCircle = document.getElementsByClassName('topRightCircle');
    const topLeftCircle = document.getElementsByClassName('topLeftCircle');
    const lastCharOfId = id.slice(-1);
    if(favouriteStatus === 'isFavourite') {
        element.dataset.hartje = 'isNotFavourite';

        element.style.backgroundColor = "white";
        topRightCircle[lastCharOfId].style.backgroundColor = "white";
        topLeftCircle[lastCharOfId].style.backgroundColor = "white";
    } else {
        element.dataset.hartje = 'isFavourite';

        element.style.backgroundColor = "#7f1a1a";
        topRightCircle[lastCharOfId].style.backgroundColor = "#7f1a1a";
        topLeftCircle[lastCharOfId].style.backgroundColor = "#7f1a1a";
    }
}
