import React from "react"
// import * as ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from "enzyme"

import ReactPasswordChecklist from "./index"

describe("ReactPasswordChecklist Test Suite", () => {
	it("calls onChange when items are valid", () => {
		const onChange = jest.fn()
		mount(
			<ReactPasswordChecklist
				rules={["minLength"]}
				minLength={6}
				value="123456"
				onChange={onChange}
			/>,
		)
		expect(onChange).toHaveBeenCalledWith(true)
	})
	it("sets rtl className when `rtl` prop is set", () => {
		const result = mount(
			<ReactPasswordChecklist rules={["minLength"]} minLength={6} value="123456" rtl />,
		)
		expect(result.find("ul").hasClass("rtl")).toBeTruthy()
	})
	it("adds rtl className to additional classes when `rtl` prop is set", () => {
		const result = mount(
			<ReactPasswordChecklist
				className="test"
				rules={["minLength"]}
				minLength={6}
				value="123456"
				rtl
			/>,
		)
		expect(result.find("ul").hasClass("test rtl")).toBeTruthy()
	})
	describe("iconComponents", () => {
		it("has the default icons", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["minLength"]} minLength={6} value="123456" />,
			)
			expect(result.find("svg").hasClass("checklist-icon")).toBeTruthy()
		})
		it("allows for customized icons", () => {
			const validTest = mount(
				<ReactPasswordChecklist
					rules={["minLength"]}
					minLength={6}
					value="123456"
					iconComponents={{
						ValidIcon: <div>I'm Valid</div>,
						InvalidIcon: <div>I'm Invalid</div>,
					}}
				/>,
			)
			expect(validTest.find("li > div").text()).toEqual("I'm Valid")
			const invalidTest = mount(
				<ReactPasswordChecklist
					rules={["minLength"]}
					minLength={6}
					value="12345"
					iconComponents={{
						ValidIcon: <div>I'm Valid</div>,
						InvalidIcon: <div>I'm Invalid</div>,
					}}
				/>,
			)
			expect(invalidTest.find("li > div").text()).toEqual("I'm Invalid")
		})
	})
	describe("minLength", () => {
		it("Displays the default minLength message", () => {
			const result = mount(<ReactPasswordChecklist rules={["minLength"]} minLength={6} value="" />)
			expect(result.find("span").text()).toEqual("Password has more than 6 characters.")
		})
		it("Sets invalid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["minLength"]} minLength={6} value="12345" />,
			)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["minLength"]} minLength={6} value="123456" />,
			)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("maxLength", () => {
		it("Displays the default maxLength message", () => {
			const result = mount(<ReactPasswordChecklist rules={["maxLength"]} maxLength={16} value="" />)
			expect(result.find("span").text()).toEqual("Password has no more than 16 characters.")
		})
		it("Sets invalid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["maxLength"]} maxLength={16} value="12345678123456789" />,
			)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["maxLength"]} maxLength={16} value="1234567812345678" />,
			)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("specialChar", () => {
		it("Displays the default specialChar message", () => {
			const result = mount(<ReactPasswordChecklist rules={["specialChar"]} value="" />)
			expect(result.find("span").text()).toEqual("Password has special characters.")
		})
		it("Sets invalid", () => {
			const result = mount(<ReactPasswordChecklist rules={["specialChar"]} value="" />)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid with !", () => {
			const result = mount(<ReactPasswordChecklist rules={["specialChar"]} value="!" />)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
		it("Sets valid with @", () => {
			const result = mount(<ReactPasswordChecklist rules={["specialChar"]} value="@" />)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
		it("Sets valid with .", () => {
			const result = mount(<ReactPasswordChecklist rules={["specialChar"]} value="." />)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("capital", () => {
		it("Displays the default capital message", () => {
			const result = mount(<ReactPasswordChecklist rules={["capital"]} value="" />)
			expect(result.find("span").text()).toEqual("Password has a capital letter.")
		})
		it("Sets invalid", () => {
			const result = mount(<ReactPasswordChecklist rules={["capital"]} value="as;lkj23408" />)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(<ReactPasswordChecklist rules={["capital"]} value="s;lKj23408" />)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("lowercase", () => {
		it("Displays the default lowercase message", () => {
			const result = mount(<ReactPasswordChecklist rules={["lowercase"]} value="" />)
			expect(result.find("span").text()).toEqual("Password has a lowercase letter.")
		})
		it("Sets invalid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["lowercase"]} value="I'M ALL CAPITALS 1234" />,
			)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["lowercase"]} value="I HAVE a LOWERCASE LETTER 1234" />,
			)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("notEmpty", () => {
		it("Displays the default notEmpty message", () => {
			const result = mount(<ReactPasswordChecklist rules={["notEmpty"]} value="" />)
			expect(result.find("span").text()).toEqual("Password fields are not empty.")
		})
		it("Sets invalid", () => {
			const result = mount(<ReactPasswordChecklist rules={["notEmpty"]} value="" />)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()

			const againResult = mount(
				<ReactPasswordChecklist rules={["notEmpty"]} value="1" valueAgain="" />,
			)
			expect(againResult.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(<ReactPasswordChecklist rules={["notEmpty"]} value="0" valueAgain="1" />)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("match", () => {
		it("Displays the default match message", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["match"]} value="test" valueAgain="test" />,
			)
			expect(result.find("span").text()).toEqual("Passwords match.")
		})
		it("Sets invalid when empty", () => {
			const result = mount(<ReactPasswordChecklist rules={["match"]} value="" valueAgain="" />)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets invalid when non-matching", () => {
			const result = mount(<ReactPasswordChecklist rules={["match"]} value="1" valueAgain="2" />)
			expect(result.find("li").hasClass("invalid")).toBeTruthy()
		})
		it("Sets valid", () => {
			const result = mount(
				<ReactPasswordChecklist rules={["match"]} value="test" valueAgain="test" />,
			)
			expect(result.find("li").hasClass("valid")).toBeTruthy()
		})
	})
	describe("messages", () => {
		it("Displays a custom minLength message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["minLength"]}
					value="test"
					valueAgain="test"
					messages={{ minLength: "Custom minLength Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom minLength Message")
		})
		it("Displays a custom specialChar message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["specialChar"]}
					value="test"
					valueAgain="test"
					messages={{ specialChar: "Custom specialChar Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom specialChar Message")
		})
		it("Displays a custom number message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["number"]}
					value="test"
					valueAgain="test"
					messages={{ number: "Custom number Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom number Message")
		})
		it("Displays a custom capital message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["capital"]}
					value="test"
					valueAgain="test"
					messages={{ capital: "Custom capital Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom capital Message")
		})
		it("Displays a custom match message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["match"]}
					value="test"
					valueAgain="test"
					messages={{ match: "Custom match Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom match Message")
		})
		it("Displays a custom notEmpty message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["notEmpty"]}
					value="test"
					valueAgain="test"
					messages={{ notEmpty: "Custom notEmpty Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom notEmpty Message")
		})
		it("Displays a custom maxLength message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["maxLength"]}
					value="test"
					valueAgain="test"
					messages={{ maxLength: "Custom maxLength Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom maxLength Message")
		})
		it("Displays a custom lowercase message", () => {
			const result = mount(
				<ReactPasswordChecklist
					rules={["lowercase"]}
					value="test"
					valueAgain="test"
					messages={{ lowercase: "Custom lowercase Message" }}
				/>,
			)
			expect(result.find("span").text()).toEqual("Custom lowercase Message")
		})
	})
})
