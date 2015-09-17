/* @flow */

"use strict";

import React from "react";
import mui from "material-ui";
import _ from "underscore";

import Collapser from "./Collapser";
import Icons from "../icons";
import Phone from "./Phone";
import ScreenReader from "./ScreenReader";
import fixtures from "../../fixtures/services";

class ContactMethods extends React.Component {

    // flow:disable not supported yet
    static sampleProps = {
        default: {object: {phones: fixtures.ixa.phones, expanded: false}},
        open: {object: {phones: fixtures.ixa.phones, expanded: true}},
        "two numbers": {object: {phones: [
            {kind: "phone", number: "(03) 3333 3333"},
            {kind: "phone", number: "(03) 5555 5555"},
        ],},},
    };

    render(): React.Element {
        var {
            phones,
            emails,
            web,
        } = this.props.object;

        var contacts = [].concat(
            phones.map(phone => Object.assign({ component: Phone }, phone)),
            emails.map(email => Object.assign({ component: null }, email)),
            [{ component: null, url: web }],
        );

        if (contacts.length > 2) {
            /* render one contact method and then put the rest in a
             * collapser */
            return (
                <div className="ContactMethods">
                    {this.renderContactMethod(_.first(contacts), 0)}
                    <Collapser
                        message="Other contact options"
                        expanded={this.props.expanded}
                    >
                        {_.rest(contacts).map(this.renderContactMethod)}
                    </Collapser>
                </div>
            );

        } else if (contacts.length > 0) {
            /* render 2 contact methods */
            return (
                <div className="ContactMethods">
                    {contacts.map(this.renderContactMethod)};
                </div>
            );
        } else {
            return null;
        }

    }

    renderContactMethod(record: Object, idx: number): React.Element {
        console.log(record);
        if (record.component) {
            return React.createElement(record.component, record);
        } else {
            return (
                <div>Unhandled {record}</div>
            );
        }
    }
}

export default ContactMethods;
