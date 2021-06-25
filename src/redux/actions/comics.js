const allComicsRequested = () => {
    return {
        type: 'FETCH_ALL_COMICS_REQUEST',
    }
}

const allComicsLoaded = (newComics) => {
    return {
        type: 'FETCH_ALL_COMICS_SUCCESS',
        payload: newComics,
    }
}

const allComicsError = (error) => {
    return {
        type: 'FETCH_ALL_COMICS_FAILURE',
        payload: error
    }
}

const comicsRequested = () => {
    return {
        type: 'FETCH_COMICS_REQUEST',
    }
}

const comicsLoaded = (newComics) => {
    return {
        type: 'FETCH_COMICS_SUCCESS',
        payload: newComics,
    }
}

const comicsError = (error) => {
    return {
        type: 'FETCH_COMICS_FAILURE',
        payload: error
    }
}

const fetchAllComics = (marvelService) => () => (dispatch) => {
    dispatch(allComicsRequested());
    marvelService.getAllComics()
        .then((res) => dispatch(allComicsLoaded(res.data.results)))
        .catch((error) => dispatch(allComicsError(error)));
}

const fetchComics = (id, marvelService) => () => (dispatch) => {
    dispatch(comicsRequested());
    marvelService.getComics(id)
        .then((res) => dispatch(comicsLoaded(res.data.results[0])))
        .catch((error) => dispatch(comicsError(error)));
}


export {
    fetchAllComics,
    fetchComics
}