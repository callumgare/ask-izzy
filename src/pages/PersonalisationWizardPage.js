/* @flow */

import React from "react";

import BasePersonalisationPage from "./BasePersonalisationPage";
import Intro from "./personalisation/Intro";
import components from "../components";
import Chevron from "../icons/Chevron";

class PersonalisationWizardPage extends BasePersonalisationPage {

    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    previousStep(): void {
        const prevSubPage = this.prevSubPage();

        this.setState({nextDisabled: false});

        if (prevSubPage) {
            this.goToSubPage(prevSubPage);
        } else {
            this.props.history.pushState(
                null,
                "/",
                {}
            );
        }
    }

    goToCategoryPage(): void {
        this.navigate("");
    }

    goToSubPage(subpage: ReactClass): void {
        this.navigate(`personalise/page/${subpage.defaultProps.name}`);
    }

    nextSubPage(): ?ReactClass {
        const nextSubpageIdx = this.currentComponentIdx + 1;

        return this.personalisationComponents[nextSubpageIdx];
    }

    prevSubPage(): ?ReactClass {
        const nextSubpageIdx = this.currentComponentIdx - 1;

        return this.personalisationComponents[nextSubpageIdx];
    }

    nextStep(): void {
        if (this.state.nextDisabled) {
            return
        }

        super.nextStep();
        this.setState({nextDisabled: false});

        const nextPage = this.nextSubPage()

        if (!nextPage) {
            this.goToCategoryPage();
        } else {
            this.goToSubPage(nextPage);
        }
    }

    render(): ReactElement {
        const Subpage = this.currentComponent || Intro;
        // FIXME: Back message is 'Categories' for the
        // first personalisation, should be 'Intro'
        const prevPage = this.prevSubPage()
        const backMessage = prevPage ?
            prevPage.title
            : "Categories";

        // FIXME: Tap-up is hitting the new questions on the next page
        return (
            <div className="PersonalisationPage">
                <components.AppBar
                    title={Subpage.title || this.title}
                    onBackTouchTap={this.previousStep.bind(this)}
                    backMessage={backMessage}
                    forwardMessage="Next"
                    forwardIcon={<Chevron alt="" />}
                    forwardEnabled={
                        !this.state.nextDisabled
                    }
                    slideForwardIn={true}
                />
                <Subpage
                    ref="subpage"
                    onDoneTouchTap={this.nextStep.bind(this)}
                />
            </div>
        );
    }

}

export default PersonalisationWizardPage;
