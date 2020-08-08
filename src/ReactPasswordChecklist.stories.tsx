import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import ReactPasswordChecklist, { RuleNames } from "./index";

import { withKnobs, text, number, array} from '@storybook/addon-knobs';
storiesOf("ReactPasswordChecklist", module)
    .addDecorator(withKnobs)
    .add("Default",
		() =>
			<ReactPasswordChecklist
				value={text("Password", "")}
				valueAgain={text("Password Again", "")}
				minLength={number("Minimum Length", 8)}
				onChange={action("onChange")}
				rules={array("Rules", ["length","specialChar","number","capital","match"]) as Array<RuleNames>}
			/>
    )