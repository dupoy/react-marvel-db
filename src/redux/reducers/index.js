import updateComicsList from "./updateComicsList";
import updateSelectedComics from "./updateSelectedComics";

const reducer = (state, action) => {
    return {
        comicsList: updateComicsList(state, action),
        selectedComics: updateSelectedComics(state, action)
    }
}

export default reducer