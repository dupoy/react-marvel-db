import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
import './itemDetails.css'

export default class ItemDetails extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {itemId, fetchData} = this.props
        if (itemId !== prevProps.itemId) {
            fetchData(itemId);
        }
    }

    render() {
        const {item, error, loading} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        const {title, thumbnail: {path, extension}} = item
        console.log(item)
        return (
            <div className="card">
                <img className="card-img-top" src={`${path}.${extension}`} alt={title}/>
                <div className="card-body">
                    <h4>{title}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}