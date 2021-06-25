import ItemDetails from "../itemDetails";
import React from "react";
import Record from "./record";
import {bindActionCreators} from "redux";
import {fetchComics} from "../../../redux/actions";
import {compose} from "../../../utils";
import {withMarvelService} from "../../hoc";
import {connect} from "react-redux";

const ComicsDetails = (props) => {

    const onsaleDate = {
        objects: ["dates"],
        type: "onsaleDate",
        value: "date",
    }

    const series = {
        objects: ["series", "name"],
    }

    const stories = {
        objects: ["stories", "available"],
    }


    return (
        <ItemDetails {...props}>
            <Record field="format" label="Format"/>
            <Record field="pageCount" label="Pages"/>
            <Record field={onsaleDate} label="Date"/>
            <Record field={series} label="Series"/>
            <Record field={stories} label="Stories is series"/>
            <Record field="description" label="Description"/>
        </ItemDetails>
    )
}

const mapComicsStateToProps = ({selectedComics: {comics: item, loading, error}}) => {
    return {item, loading, error}
}

const mapComicsDispatchToProps = (dispatch, {marvelService, itemId}) => {
    return bindActionCreators({
        fetchData: fetchComics(itemId, marvelService)
    }, dispatch)
}

export default compose(
    withMarvelService(),
    connect(mapComicsStateToProps, mapComicsDispatchToProps)
)(ComicsDetails)