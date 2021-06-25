import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import "./itemList.css"
import {Link} from "react-router-dom";

export default class ItemList extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {

        const {data, loading, error, children} = this.props

        const items = data.map((item) => {
            const {id} = item
            const label = children(item)
            return (
                <li className="list-item list-group-item"
                    key={id}>
                    <Link className="text-decoration-none" to={`comics/${id}`}>
                        {label}
                    </Link>
                </li>
            );
        })

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}