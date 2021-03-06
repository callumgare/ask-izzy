/* @flow */

import React from "react";
import DemographicAboriginal from "../icons/DemographicAboriginal";
import DemographicTorresStrait from "../icons/DemographicTorresStrait";
import type { Service } from "../iss";

type Props = {
    object: Service
}

class IndigenousServiceIcon extends React.Component<Props, void> {
    render() {
        if (!this.props.object.Indigenous()) {
            return null;
        }

        return (
            <div className="IndigenousServiceIcon">
                <DemographicAboriginal
                    className="inline-icon"
                />
                <DemographicTorresStrait
                    className="inline-icon"
                />
            </div>
        );
    }
}

export default IndigenousServiceIcon;
