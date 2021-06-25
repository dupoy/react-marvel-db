import React from "react";

const Record = ({item, field, label}) => {

    if (typeof field === 'object') {
        const {objects, type = '', value = ''} = field;
        const values = objects.reduce((prev, next) => prev[next], item)
        if (Array.isArray(values)) {
            const element = values.find((el) => el.type === type)
            return element[value] ? <li className="list-group-item">
                <span className="term">{label}</span>
                <span>{element[value]}</span>
            </li> : <></>
        }
        return values ? <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{values}</span>
        </li> : <></>
    }

    return (
        item[field] ? <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li> : <></>
    );
}


export default Record