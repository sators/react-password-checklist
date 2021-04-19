import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ReactPasswordChecklist, { RuleNames } from "./index"

import { withKnobs, text, number, array } from "@storybook/addon-knobs"
storiesOf("ReactPasswordChecklist", module)
	.addDecorator(withKnobs)
	.add("Default", () => (
		<ReactPasswordChecklist
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			onChange={action("onChange")}
			rules={
				array("Rules", [
					"length",
					"specialChar",
					"number",
					"capital",
					"match",
				]) as Array<RuleNames>
			}
		/>
	))
	.add("Custom Messages", () => (
		<ReactPasswordChecklist
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			onChange={action("onChange")}
			rules={
				array("Rules", [
					"length",
					"specialChar",
					"number",
					"capital",
					"match",
				]) as Array<RuleNames>
			}
			messages={{
				length: "La contraseña tiene más de 8 caracteres.",
				specialChar: "La contraseña tiene caracteres especiales.",
				number: "La contraseña tiene un número.",
				capital: "La contraseña tiene una letra mayúscula.",
				match: "Las contraseñas coinciden.",
			}}
		/>
	))
