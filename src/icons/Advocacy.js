/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconAdvocacy extends React.Component {
    props: Object;
    state: Object;
    static propTypes = {
        className: React.PropTypes.string,
    };

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "AdvocacyIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="advocacy"><g id="XMLID_580_"><path fill="#231F20"  d="M31.791,55.166c-0.525,0-1.013-0.274-1.284-0.725l-4.49-7.437H14.496 c-2.798,0-5.074-2.275-5.074-5.073l-1.45-27.122c-0.002-2.504,1.97-4.477,4.394-4.477h38.847c2.424,0,4.396,1.973,4.396,4.396 l-1.454,27.958c0.002,2.346-1.97,4.317-4.394,4.317H37.564l-4.489,7.437C32.803,54.89,32.316,55.166,31.791,55.166z M12.366,13.333c-0.77,0-1.396,0.626-1.396,1.396l1.45,27.122c0.002,1.224,0.932,2.153,2.076,2.153h12.367 c0.525,0,1.013,0.274,1.284,0.725l3.644,6.034l3.643-6.034c0.271-0.449,0.759-0.725,1.284-0.725h13.045 c0.77,0,1.396-0.626,1.396-1.396l1.454-27.958c-0.002-0.692-0.628-1.318-1.398-1.318H12.366z"></path></g><g id="XMLID_477_"><path fill="#231F20"  d="M31.791,32.459c-0.828,0-1.5-0.672-1.5-1.5V20.292c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v10.667C33.291,31.787,32.619,32.459,31.791,32.459z"></path></g><g id="XMLID_474_"><circle fill="#231F20"  cx="31.79" cy="36.671" r="1.774"></circle></g></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
