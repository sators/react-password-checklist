import React from "react";
import { storiesOf } from "@storybook/react";
import ReactPasswordChecklist from "./";
import { withKnobs, text, number, array} from '@storybook/addon-knobs';
storiesOf("ReactPasswordChecklist", module)
    .addDecorator(withKnobs)
    .add("Default",
		() =>
			<ReactPasswordChecklist
				value={text("Password", "")}
				valueAgain={text("Password Again", "")}
				minLength={number("Minimum Length", 8)}
				rules={array("Rules", ["length","specialChar","number","capital","match"])}
			/>
    )