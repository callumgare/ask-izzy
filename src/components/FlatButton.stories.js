import React from "react";
import FlatButton from "./FlatButton";

export default {
    title: "Basic UI Components/FlatButton",
    component: FlatButton,
    parameters: {
        zeplinLink: "https://app.zeplin.io/project/603770b45ed7b30183b01a07/styleguide/components?coid=6037734317b4e8270a6cef9c",
    },
};

const Template = (args) => <FlatButton {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
    label: "Example Button",
};