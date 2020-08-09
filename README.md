# React Password Checklist
[![Build Status](https://travis-ci.org/sators/react-password-checklist.svg?branch=master)](https://travis-ci.org/sators/react-password-checklist) [![Coverage Status](https://coveralls.io/repos/github/sators/react-password-checklist/badge.svg?branch=master)](https://coveralls.io/github/sators/react-password-checklist?branch=master) [![npm version](https://badge.fury.io/js/react-password-checklist.svg)](https://badge.fury.io/js/react-password-checklist) [![GitHub version](https://badge.fury.io/gh/sators%2Freact-password-checklist.svg)](https://badge.fury.io/gh/sators%2Freact-password-checklist)

A React Component to display the success or failure of password strength rules that updates as a user types.

## Example
![React Password Checklist Demo](demo/demo.gif)

## Install in your project

`npm install --save react-password-strength`

`yarn add react-password-strength`

_Note: react is a peer dependency. You should be using this in a React project._

## Example Usage

```
import React, {useState} from "react"
import ReactPasswordChecklist from "react-password-checklist"

const SignUp = () => {
	const [password, setPassword] = useState("")
	const [passwordVerify, setPasswordVerify] = useState("")
	return (
		<form>
			<label>Password:</label>
			<input type="password" onChange={e => setPassword(e.target.value)} value={password}>
			<label>Password Again:</label>
			<input type="password" onChange={e => setPasswordVerify(e.target.value)} value={passwordVerify}>

			<ReactPasswordChecklist
				rules={["length","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordVerify}
				iconSize={18}
				validColor="#4BCA81",
				invalidColor="#FF0033",
				onChange={(isValid) => {}}
			/>
		</form>
	)
}
```



## Available Rules

Customize the component to display only the rules you need in the desired order you wish to display them.

#### length
Valid if the password meets the minimum length. Requires `minLength` prop to be included.

#### specialChar

Valid if the password contains a special character from `~!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?`.

#### number

Valid if the password contains a number.

#### capital

Valid if the password contains a capital letter.

#### match

Valid if the password matches the confirm password valud. Requires `valueAgain` prop to be included.


## Props

| Prop  | Description  | Type  | Required  | Default  |
|---|---|---|---|---|
|  rules | Rules to display in the order desired.<br />Options are `length`, `specialChar`,<br />`number`, `capital`, `match`  | array  | yes |
|  value | Current potential password  | string  | yes |
|  minLength | Minimum Password Length  | number  | Only with<br />`length` rule |
|  valueAgain | Current potential password confirmation  | string  | Only with<br />`match` rule |
|  onChange | Callback that is triggered when the<br />password becomes valid or invalid across<br />all rules. | function  |  | `(isValid) => {}`
|  className | Class applied to the entire component  | string  |  |
|  style | Inline styles applied to the<br />outer component wrapper  | object  |  |
|  iconSize | Size of ✔ or 𐄂 icon  | number  |  | `18` |
|  validColor | Color of checkmark icon  | string  |  | `#4BCA81` |
|  invalidColor | Color of X icon  | string  |  | `#FF0033` |

## Classes
* `valid` - Valid Message
* `invalid` - Invalid Message

## Run Locally

`npm run storybook`

`yarn storybook`
