import { configure, addDecorator } from "@storybook/react";
import "./global-styles.css";
import * as React from "react";
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
addDecorator(style => {
    return (
        <>
            {style()}
        </>
    )
});
configure(loadStories, module);
