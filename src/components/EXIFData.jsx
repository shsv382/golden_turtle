import React from 'react';
import { InputText, validationError } from './InputText';
import './EXIFData.scss';

const EXIFData = ({exifData, onChangeInput}) => {
	const params = {
		blockName: "Описание снимка",
		Model: "Оборудование$Камера, объектив...",
	    conditions: "Условия съемки$Ночью, в лесу, в дождь...",
	    animal: "Животное/растение в кадре$Серна, пихта...",
		parameters: {
			blockName: "Параметры съемки",
			ExposureTime: "Выдержка", 
			FNumber: "Диафрагма", 
		    ISOSpeedRatings: "ISO", 
		    FocalLength: "ФР (mm)",
		}
	}

	return (
		iterateParams(params, exifData, onChangeInput, "area")
	)
}

const parameterToListItem = (parameter, exifData, onChange, inputType) => {
	if (parameter[0] === "blockName") {
		return <h5 className="blockHeader">{parameter[1]}</h5>
	} else {
		return inputType === "area" ? textArea( parameter[1], 
												"text", 
												parameter[0], 
												exifData[parameter[0]],
												onChange) :
									inputText(  parameter[1], 
												"text", 
												parameter[0], 
												exifData[parameter[0]],
												onChange)
	}
}

const iterateParams = (params, exifData, onChange, inputType) => {
	return Object.entries(params).map((parameter) => {
		if (typeof parameter[1] === "object") {
			return iterateParams(parameter[1], exifData, onChange);
		} else {
			return parameterToListItem(parameter, exifData, onChange, inputType)
		}
	})
}

const inputText = (label, type, name, value, onChange) => {
	return <InputText 
			label={label}
			type={type}
			name={name}
			value={value}
			onChange={onChange} 
			onFocus={validationError}
			onBlur={validationError}
			/>
}

const textArea = (label, type, name, value, onChange) => {
	return (<div className="labeledTextArea">
				<label>{label.split("$")[0]}</label>
				<textarea type={type} 
						  name={name} 
						  value={value} 
						  placeholder={label.split("$")[1]}
						  onFocus={extendTextArea(true)}
						  onBlur={extendTextArea(false)}
						  onChange={onChange} />
			</div>)
}

const extendTextArea = (expand) => (event) => {
	if (expand && event.target.classList.contains("validation-error")) {
		event.target.classList.remove("validation-error");
	} else if (!expand) {
		validationError(event);
	}
	let height = event.target.clientHeight;
	const endHeight = expand ? height * 3 : height/3;
	const area = event.target;
	area.style.minHeight = `${height}px`;
	// area.style.minHeight = `${90}px`;
	const interval = setInterval(() => {
		height += expand ? 5 : -5;
		area.style.minHeight = `${height}px`;
		if ((height >= endHeight && expand) || (height <= endHeight && !expand)) {
			clearInterval(interval);
		}
	}, 10);
}



export default EXIFData;