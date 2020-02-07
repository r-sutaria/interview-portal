import React from "react";
import QueryCard from "./QueryCard";
export default class QueryPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <QueryCard />
                <QueryCard />
                <QueryCard />
                <QueryCard />
            </div>
        );
    }
}