/* @flow */

"use strict";

import React from 'react';
import mui from "material-ui";
import reactMixin from "react-mixin";
import { debounce } from "core-decorators";

import Personalisation from '../../mixins/Personalisation';
import components from '../../components';
import icons from '../../icons';
import storage from '../../storage';
import * as iss from '../../iss';

/*::`*/@reactMixin.decorate(Personalisation)/*::`;*/
class BaseQuestion extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {
            selected: null,  // set when the user makes a choice
        };
    }

    // flow:disable
    static propTypes = {
        /* The question asked of the user */
        question: React.PropTypes.string.isRequired,
        /* possible answers to the question */
        answers: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
    };

    // flow:disable
    static defaultProps = {
    };

    // flow:disable
    static get summaryLabel(): string {
        return this.defaultProps.question;
    }

    // flow:disable
    static get summaryValue(): string {
        return storage.getItem(this.defaultProps.name);
    }

    static getSearch(request: iss.searchRequest): ?iss.searchRequest {
        var value = storage.getItem(this.defaultProps.name);

        if (value) {
            return this.getSearchForAnswer(request, value);
        } else {
            // this question can't been answered
            return null;
        }
    }

    static getSearchForAnswer(request: iss.searchRequest, answer: string):
        ?iss.searchRequest {
        return request;
    }

    /**
     * triggerNext:
     *
     * Trigger next page after a 500ms debounce.
     */
    /*::__(){`*/@debounce(500)/*::`}*/
    triggerNext(): void {
        storage.setItem(this.props.name, this.state.selected);
        this.nextStep();
    }

    onAnswerTouchTap(answer: string, ...rest: any): void {
        this.setState({selected: answer});
        this.triggerNext();
    }

    render(): React.Element {
        var selected =
            this.state.selected || storage.getItem(this.props.name);

        return (
            <div>
                <components.HeaderBar
                    primaryText={
                        <div>
                            <icons.LogoLight />
                            {this.props.question}
                        </div>
                    }
                />
                <mui.List className="List">
                {this.props.answers.map((answer, index) =>
                    <mui.ListItem
                        className="ListItem"
                        key={index}
                        primaryText={answer}
                        leftCheckbox={
                            <mui.RadioButton
                                checked={answer == selected}
                                value={answer}
                                onCheck={this.onAnswerTouchTap.bind(
                                    this, answer)}
                                disableFocusRipple={true}
                                disableTouchRipple={true}
                            />
                        }
                        disableFocusRipple={true}
                        disableTouchRipple={true}
                    />)}
                </mui.List>

            </div>
        );
    }
}

export default BaseQuestion;
