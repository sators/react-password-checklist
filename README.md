# React Password Checklist
A React Component to display the success or failure of password strength rules that updates as a user types.

## Example
![React Password Checklist Demo](demo/demo.gif)

## Install in your project

`npm install --save react-password-strength`

`yarn add react-password-strength`

_Note: react is a peer dependency. You should be using this in a React project._

## Using the component

```
import ReactPasswordChecklist from "react-password-checklist"
...
<ReactPasswordChecklist
	rules={["length","specialChar","number","capital","match"]}
	minLength={5}
	value: "password"
	valueAgain: "password again"
	className="customClass"
	style={{ display: 'none' }}
	iconSize: {18}
	validColor: "#4BCA81",
	invalidColor: "#FF0033",
	onChange: (isValid) => {}
/>
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
|  rules | Rules to display in the order desired. Options are `length`, `specialChar`, `number`, `capital`, `match`  | array  | yes |
|  value | Current potential password  | string  | yes |
|  minLength | Minimum Password Length  | number  | Only when using `length` rule |
|  valueAgain | Current potential password confirmation  | string  | Only when using `match` rule |
|  onChange | Callback that is triggered when the password becomes valid or invalid across all rules | function  |  | `(isValid) => {}`
|  className | Class applied to the entire component  | string  |  |
|  style | Inline styles applied to the outer component wrapper  | object  |  |
|  iconSize | Size of ✔ or 𐄂 icon  | number  |  | `18` |
|  validColor | Color of checkmark icon  | string  |  | `#4BCA81` |
|  invalidColor | Color of X icon  | string  |  | `#FF0033` |


## Run Locally

`npm run storybook`

`yarn storybook`
