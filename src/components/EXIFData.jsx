import React from 'react';
import './EXIFData.scss';

const EXIFData = ({exifData}) => {
	const params = {
		blockName: "Описание снимка",
		Model: "Оборудование",
	    conditions: "Условия съемки",
	    animal: "Животное/растение в кадре",
		parameters: {
			blockName: "Параметры съемки",
			ExposureTime: "Выдержка", 
			FNumber: "Диафрагма", 
		    ISOSpeedRatings: "ISO", 
		    FocalLength: "ФР (mm)",
		}
	}

	return (
		iterateParams(params, exifData, "area")
	)
}

const parameterToListItem = (parameter, exifData, inputType) => {
	if (parameter[0] === "blockName") {
		return <h5>{parameter[1]}</h5>
	} else {
		return inputType === "area" ? textArea( parameter[1], 
												"text", 
												parameter[0], 
												exifData[parameter[0]]) :
									inputText(  parameter[1], 
												"text", 
												parameter[0], 
												exifData[parameter[0]])
	}
}

const iterateParams = (params, exifData, inputType) => {
	return Object.entries(params).map((parameter) => {
		if (typeof parameter[1] === "object") {
			return iterateParams(parameter[1], exifData);
		} else {
			return parameterToListItem(parameter, exifData, inputType)
		}
	})
}

const inputText = (label, type, name, value) => {
	return (<li className="labeledInputText">
				<label>{label}</label>
				<input  type={type} 
						name={name} 
						value={value} />
			</li>)
}

const textArea = (label, type, name, value) => {
	return (<div className="labeledTextArea">
				<label>{label}</label>
				<textarea type={type} 
						  name={name} 
						  value={value} />
			</div>)
}

export default EXIFData;