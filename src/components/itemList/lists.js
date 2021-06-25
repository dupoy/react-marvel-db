import {bindActionCreators} from "redux";
import {fetchAllComics, fetchComics} from "../../redux/actions";
import {compose} from "../../utils";
import {connect} from "react-redux";
import ItemList from "./itemList";
import withChild from "../hoc/withChild";
import withMarvelService from "../hoc/withMarvelService";

const renderTitle= ({title}) => <span>{title}</span>

const mapComicsStateToProps = ({comicsList: {comics:data , loading, error}}) => {
    return {data, loading, error}
}

const mapComicsDispatchToProps = (dispatch, {marvelService}) => {
    return bindActionCreators({
        fetchData: fetchAllComics(marvelService),
        fetchItem: fetchComics(marvelService)
    }, dispatch)
}

const ComicsList = compose(
    withMarvelService(),
    connect(mapComicsStateToProps, mapComicsDispatchToProps),
    withChild(renderTitle),
)(ItemList)

export {
    ComicsList
}