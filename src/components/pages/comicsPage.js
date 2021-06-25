import Row from "./row";
import {ComicsList} from "../itemList/lists";
import React from "react";
import {ComicsDetails} from "../itemDetails";
import {withRouter} from "react-router-dom";

const ComicsPage = ({match: {params: {id}}}) => {
    return id ? (
        <Row
            left={<ComicsList/>}
            right={<ComicsDetails itemId={id}/>}
        />
    ) : <Row
        left={<ComicsList/>}
        right={<></>}
    />
}

export default withRouter(ComicsPage);