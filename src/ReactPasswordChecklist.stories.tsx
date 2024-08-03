import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ReactPasswordChecklist, { RuleNames } from "./index"

import { withKnobs, text, number, array, boolean } from "@storybook/addon-knobs"
import { getDirection } from "@pxblue/storybook-rtl-addon"

storiesOf("ReactPasswordChecklist", module)
	.addDecorator(withKnobs)
	.add("Default", () => (
		<ReactPasswordChecklist
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			maxLength={number("Maximum Length", 16)}
			onChange={action("onChange")}
			hideIcon={boolean("Hide Icon", false)}
			rtl={boolean("rtl", getDirection() == "rtl")}
			rules={
				array("Rules", [
					"minLength",
					"specialChar",
					"number",
					"capital",
					"match",
					"notEmpty",
					"maxLength",
					"lowercase",
					"noSpaces",
					"capitalAndLowerase",
				]) as Array<RuleNames>
			}
		/>
	))
	.add("With a custom class name", () => (
		<ReactPasswordChecklist
			className={text("Class Name", "my-custom-class")}
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			maxLength={number("Maximum Length", 16)}
			onChange={action("onChange")}
			hideIcon={boolean("Hide Icon", false)}
			rtl={boolean("rtl", getDirection() == "rtl")}
			rules={
				array("Rules", [
					"minLength",
					"specialChar",
					"number",
					"capital",
					"match",
					"notEmpty",
					"maxLength",
					"lowercase",
				]) as Array<RuleNames>
			}
		/>
	))
	.add("In a small container", () => (
		<div style={{ width: "225px" }}>
			<ReactPasswordChecklist
				value={text("Password", "")}
				valueAgain={text("Password Again", "")}
				minLength={number("Minimum Length", 8)}
				maxLength={number("Maximum Length", 16)}
				onChange={action("onChange")}
				hideIcon={boolean("Hide Icon", false)}
				rtl={boolean("rtl", getDirection() == "rtl")}
				rules={
					array("Rules", [
						"minLength",
						"specialChar",
						"number",
						"capital",
						"match",
						"notEmpty",
						"maxLength",
						"lowercase",
					]) as Array<RuleNames>
				}
			/>
		</div>
	))
	.add("Custom Icon and Colors", () => (
		<ReactPasswordChecklist
			className={text("Class Name", "my-custom-class")}
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			maxLength={number("Maximum Length", 16)}
			onChange={action("onChange")}
			hideIcon={boolean("Hide Icon", false)}
			rtl={boolean("rtl", getDirection() == "rtl")}
			rules={
				array("Rules", [
					"minLength",
					"specialChar",
					"number",
					"capital",
					"match",
					"notEmpty",
					"maxLength",
					"lowercase",
				]) as Array<RuleNames>
			}
			iconSize={number("Icon Size", 24)}
			validColor={text("Valid Icon Color", "#c7ad00")}
			invalidColor={text("Invalid Icon Color", "#380091")}
			validTextColor={text("Valid Text Color", "ForestGreen")}
			invalidTextColor={text("Invalid Text Color", "fuchsia")}
		/>
	))
	.add("Custom Messages", () => (
		<ReactPasswordChecklist
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={number("Minimum Length", 8)}
			onChange={action("onChange")}
			hideIcon={boolean("Hide Icon", false)}
			rtl={boolean("rtl", getDirection() == "rtl")}
			rules={
				array("Rules", [
					"minLength",
					"specialChar",
					"number",
					"capital",
					"match",
				]) as Array<RuleNames>
			}
			messages={{
				minLength: "La contraseña tiene más de 8 caracteres.",
				specialChar: "La contraseña tiene caracteres especiales.",
				number: "La contraseña tiene un número.",
				capital: "La contraseña tiene una letra mayúscula.",
				match: "Las contraseñas coinciden.",
			}}
		/>
	))
	.add("Custom Messages RTL (Persian)", () => (
		<ReactPasswordChecklist
			value={text("Password", "")}
			valueAgain={text("Password Again", "")}
			minLength={8}
			onChange={action("onChange")}
			hideIcon={boolean("Hide Icon", false)}
			rtl={true}
			rules={array("Rules", ["minLength", "specialChar", "number", "capital"]) as Array<RuleNames>}
			messages={{
				minLength: "رمز عبور باید حداقل ۸ کارکتر باشد.",
				specialChar: "رمز عبور باید شامل کاراکترهای خاص (نمادها) باشد",
				number: "رمز عبور باید شامل اعداد باشد ",
				capital: "رمز عبور باید ترکیبی از حروف کوچک و بزرگ باشد.",
			}}
		/>
	))
