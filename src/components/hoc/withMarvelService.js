import React from "react";
import {MarvelConsumer} from "../contexts/marvelContext";

const withMarvelService = (mapMethodToProps) => (Wrapped) => {
    return (props) => {
        return(
            <MarvelConsumer>
                {
                    (marvelService) => {
                        return(
                            <Wrapped {...props} marvelService={marvelService}/>
                        )
                    }
                }
            </MarvelConsumer>
        )
    }

}

export default withMarvelService