import React from "react";
// import * as ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';

import ReactPasswordChecklist from './index';

describe('ReactPasswordChecklist Test Suite', () => {
	it('calls onChange when items are valid', () => {
		const onChange = jest.fn()
		mount(<ReactPasswordChecklist
			rules={["length"]}
			minLength={6}
			value="123456"
			onChange={onChange}
		/>)
		expect(onChange).toHaveBeenCalledWith(true)
	})
	describe('length', () => {
		it('Displays the length message', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["length"]}
				minLength={6}
				value=""
			/>)
			expect(result.find('span').text()).toEqual("Password has more than 6 characters.")
		});
		it('Sets invalid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["length"]}
				minLength={6}
				value="12345"
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets valid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["length"]}
				minLength={6}
				value="123456"
			/>)
			expect(result.find('li').hasClass('valid')).toBeTruthy()
		});
	})
	describe('specialChar', () => {
		it('Displays the specialChar message', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["specialChar"]}
				value=""
			/>)
			expect(result.find('span').text()).toEqual("Password has special characters.")
		});
		it('Sets invalid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["specialChar"]}
				value=""
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets valid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["specialChar"]}
				value="!"
			/>)
			expect(result.find('li').hasClass('valid')).toBeTruthy()
		});
	})
	describe('capital', () => {
		it('Displays the capital message', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["capital"]}
				value=""
			/>)
			expect(result.find('span').text()).toEqual("Password has a capital letter.")
		});
		it('Sets invalid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["capital"]}
				value="as;lkj23408"
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets valid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["capital"]}
				value="s;lKj23408"
			/>)
			expect(result.find('li').hasClass('valid')).toBeTruthy()
		});
	})
	describe('number', () => {
		it('Displays the capital message', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["number"]}
				value=""
			/>)
			expect(result.find('span').text()).toEqual("Password has a number.")
		});
		it('Sets invalid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["number"]}
				value="asdf;lkj!"
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets valid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["number"]}
				value="1asdf;lkj!"
			/>)
			expect(result.find('li').hasClass('valid')).toBeTruthy()
		});
	})
	describe('match', () => {
		it('Displays the match message', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["match"]}
				value="test"
				valueAgain="test"
			/>)
			expect(result.find('span').text()).toEqual("Passwords match.")
		});
		it('Sets invalid when empty', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["match"]}
				value=""
				valueAgain=""
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets invalid when non-matching', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["match"]}
				value="1"
				valueAgain="2"
			/>)
			expect(result.find('li').hasClass('invalid')).toBeTruthy()
		});
		it('Sets valid', () => {
			const result = mount(<ReactPasswordChecklist
				rules={["match"]}
				value="test"
				valueAgain="test"
			/>)
			expect(result.find('li').hasClass('valid')).toBeTruthy()
		});
	})
});