/* @flow */

import React from "react";
import icons from "../icons";
import LinkListItem from "./LinkListItem";
import maps, {MapsApi} from "../maps";

type State = {
    maps: ?MapsApi
}

export default class ViewOnMapButton extends React.Component<any, State> {
    constructor() {
        super();
        this.state = {maps: null};
    }

    componentDidMount(): void {
        maps().then(maps => this.setState({maps}));
    }

    render() {
        if (!this.state.maps) {
            return null;
        }

        return (
            <LinkListItem
                className="ViewOnMapButton"
                primaryText="View on a map"
                leftIcon={
                    <icons.Map />
                }
                rightIcon={
                    <icons.Chevron />
                }
                {...this.props}
            />
        );
    }
}


