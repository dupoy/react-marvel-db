const initialState = {
    selectedComics: {
        comics: {},
        loading: true,
        error: null
    },
}

const updateSelectedComics = (state =initialState, action) => {
    switch (action.type) {
        case 'FETCH_COMICS_SUCCESS':
            return {
                comics: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_COMICS_REQUEST':
            return {
                comics: {},
                loading: true,
                error: null
            }
        case 'FETCH_COMICS_FAILURE':
            return {
                comics: {},
                loading: false,
                error: action.payload
            }
        default:
            return state.selectedComics

    }
}

export default updateSelectedComics