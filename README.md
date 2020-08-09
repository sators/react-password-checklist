# React Password Checklist
[![npm version](https://badge.fury.io/js/react-password-checklist.svg)](https://badge.fury.io/js/react-password-checklist) ![Minzipped Size](https://img.shields.io/bundlephobia/minzip/react-password-checklist) ![NPM Downloads](https://img.shields.io/npm/dw/react-password-checklist) ![NPM License](https://img.shields.io/npm/l/react-password-checklist) 
<br /> [![Build Status](https://travis-ci.org/sators/react-password-checklist.svg?branch=master)](https://travis-ci.org/sators/react-password-checklist) [![Coverage Status](https://coveralls.io/repos/github/sators/react-password-checklist/badge.svg?branch=master)](https://coveralls.io/github/sators/react-password-checklist?branch=master) [![Issues](https://img.shields.io/github/issues/sators/react-password-checklist)](https://github.com/sators/react-password-checklist/issues) [![Pull Requests](https://img.shields.io/github/issues-pr/sators/react-password-checklist)](https://github.com/sators/react-password-checklist/pulls) [![Twitter](https://img.shields.io/twitter/follow/sators.svg?style=social&label=@sators)](https://twitter.com/sators)

A React Component to display the success or failure of password strength rules that updates as a user types.

## Example
![React Password Checklist Demo](demo/demo.gif)

## Install in your project

`npm install --save react-password-checklist`

`yarn add react-password-checklist`

_Note: react is a peer dependency. You should be using this in a React project._

## Example Usage

```
import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"

const SignUp = () => {
	const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
	return (
		<form>
			<label>Password:</label>
			<input type="password" onChange={e => setPassword(e.target.value)}>
			<label>Password Again:</label>
			<input type="password" onChange={e => setPasswordAgain(e.target.value)}>

			<PasswordChecklist
				rules={["length","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordAgain}
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

## Available Classes
* `.valid` - Valid Message
* `.invalid` - Invalid Message

## Run Locally

`npm run storybook`

`yarn storybook`
