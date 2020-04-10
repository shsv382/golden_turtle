import React from 'react';

const Select = ({name, options, title, onChange}) => {
	return (<div className="labeledInputSelect">
				<h5>{title}</h5>
				<select className="inputSelect" required onChange={onChange} name={name}>
				{options.map((option, i) => {
					return (
						<option value={option.value} selected={(i === 0) ? true : false}>
							{option.description}
						</option>
					)
				})
			}
			</select>
		</div>)
}

export default Select;