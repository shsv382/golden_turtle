import React from 'react';

const InputText = (props) => {
	return (<li className="labeledInputText"  
						style={props.style}>
				<label>{props.label}</label>
				<input  type={props.type} 
						name={props.name} 
						value={props.value}
						onChange={props.onChange} 
						onFocus={props.onFocus}
						onBlur={props.onBlur} />
			</li>)
}

const validationError = (e) => {
	if (e.type === "blur" && e.target.value.length < 1) {
		e.target.classList.add("validation-error")
	} else {
		e.target.classList.remove("validation-error")
	}
}

export { InputText, validationError };