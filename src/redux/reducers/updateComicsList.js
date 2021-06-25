const initialState = {
    comicsList: {
        comics: [],
        loading: true,
        error: null
    },
}

const updateComicsList = (state =initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_COMICS_SUCCESS':
            return {
                comics: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_ALL_COMICS_REQUEST':
            return {
                comics: [],
                loading: true,
                error: null
            }
        case 'FETCH_ALL_COMICS_FAILURE':
            return {
                comics: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.comicsList

    }
}

export default updateComicsList