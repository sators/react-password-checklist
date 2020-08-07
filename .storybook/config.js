import { configure, addDecorator } from "@storybook/react";
import GlobalStyle from "./globalStyle"
import * as React from "react";
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
addDecorator(style => {
    return (
        <>
            <GlobalStyle />
            {style()}
        </>
    )
});
configure(loadStories, module);
