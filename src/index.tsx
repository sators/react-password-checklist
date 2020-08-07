import React from "react"
import styled from "styled-components"

interface PasswordProps {
	value: string
	valueAgain: string
	minLength: number
	iconSize?: number
	validColor?: string
	invalidColor?: string
}
type RuleNames = "length"|"specialChar"|"number"|"capital"|"match"

export interface ReactPasswordChecklistProps extends PasswordProps {
	className?: string
	style?: React.CSSProperties
	rules: Array<RuleNames>
}
const ReactPasswordProps:React.FC<ReactPasswordChecklistProps> = ({
	className,
	style,
	rules,
	...remainingProps}) => {
		const ruleComponents: { [key in RuleNames]: React.FC; } = {
			length: Length,
			specialChar: SpecialChar,
			number: Numeric,
			capital: Capital,
			match: Match,
		}
		const enabledRules = rules.filter(rule => Boolean(ruleComponents[rule]))
		return (
			<UL
				className={className}
				style={style}
			>
				{enabledRules.map(rule => {
					const Comp = ruleComponents[rule]
					return (
						<Comp key={rule} {...remainingProps} />
					)
				})}
			</UL>
		)
};

const Length:React.FC<PasswordProps> = ({ value, minLength, ...props }) => {
	const valid = value.length >= minLength
	return (
		<Rule valid={valid} {...props}>Password has more than {minLength} characters.</Rule>
	)
}
const SpecialChar:React.FC<PasswordProps> = ({ value, ...props }) => {
	const valid = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)
	return (
		<Rule valid={valid} {...props}>Password has special characters.</Rule>
	)
}
const Numeric:React.FC<PasswordProps> = ({ value, ...props }) => {
	const valid = /\d/g.test(value)
	return (
		<Rule valid={valid} {...props}>Password has a number.</Rule>
	)
}
const Match:React.FC<PasswordProps> = ({ value, valueAgain, ...props }) => {
	const valid = value.length > 0 && value === valueAgain
	return (
		<Rule valid={valid} {...props}>Passwords match.</Rule>
	)
}
const Capital:React.FC<PasswordProps> = ({ value, ...props }) => {
	let valid = false
	let i = 1
	while ( i <= value.length){
		const character = value.charAt(i);
		if (!isNaN(parseInt(character) * 1)){
			// Character is numeric
		} else {
			if (character == character.toUpperCase()) {
				valid = true;
				break;
			}
		}
		i++;
	}
	return (
		<Rule valid={valid} {...props}>Password has a capital letter.</Rule>
	)
}
interface RuleProps {
	valid: boolean
	iconSize?: number
	validColor?: string
	invalidColor?: string
}
const Rule:React.FC<RuleProps> = ({ valid, iconSize, validColor, invalidColor, children }) => {
	return (
		<LI
			className={valid ? "valid" : "invalid"}
		>
			<Svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 512 512">
				<path fill={valid ? validColor : invalidColor } d={valid ? "M432 64l-240 240-112-112-80 80 192 192 320-320z" : "M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"} />
			</Svg>
			<span>{children}</span>
		</LI>
	)
}

const UL = styled.ul`
	margin: 0;
	padding: 0;
`
const LI = styled.li`
	list-style-type: none;
	display: flex;
	align-items: center;
	margin: 2px 0;
	& > span {
		padding-top: 2px;
		opacity: ${props => props.className === "valid" ? 1 : 0.5}
	}
`
const Svg = styled.svg`
	margin-right: 5px;
`

ReactPasswordProps.defaultProps = {
	iconSize: 18,
	validColor: "#4BCA81",
	invalidColor: "#ff0033",
}

export default ReactPasswordProps
