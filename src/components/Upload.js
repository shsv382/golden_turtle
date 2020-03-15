import React from 'react';
import Image from './Image';
import EXIFData from './EXIFData';
import EXIF from 'exif-js';
import './upload.scss';

class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exifData: {}
		}
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this._addImgFileReader = this._addImgFileReader.bind(this);
	}

	onChange(event) {
		// ------- Checking file format matches to image -------
		let img1 = document.querySelector("#uploading_image").files[0];
		if (img1.type.split("/")[0].toLowerCase() !== "image") {
			alert("Пожалуйста, загрузите файл-изображение!");
			return null;
		}

		// ------- EXIF data fullfill -------
		const exifList = document.getElementById('exif');
		let exifData = {};
    	EXIF.getData(img1, function() {
	        const parameters = ["Model", "ExposureTime", "FNumber", 
	         					"ISOSpeedRatings", "FocalLength"];
	        let exifListInputs = exifList.getElementsByTagName("input");
	        parameters.map(parameter => {
	        	let current = EXIF.getTag(this, parameter);
	        	if (parameter === "ExposureTime" &&
	        		current < 0.3) {
	        		current = `1/${1/parseFloat(current)}`
	        	} else if (current && parameter === "FNumber") {
	        		current = `f/${current}`
	        	}
	        	try {
	        		exifData[parameter] = current.toString();
	        	} catch {
	        		exifData[parameter] = "";
	        	}
				document.getElementsByName(parameter)[0].value = exifData[parameter];
	        })
	    });

	    // ------- File reader operations -------
	    const fr = this._addImgFileReader();
		fr.readAsDataURL(img1);

		this.setState({exifData: exifData});
		console.log(exifData);
	}

	_addImgFileReader() {
			const fr = new FileReader();
			fr.addEventListener("load", function () {
				let oldImg = document.querySelector(".imgPreview");
				if (oldImg) { oldImg.remove() };
			    let image_uploader = document.getElementsByClassName("image_uploader")[0];
		        let img = document.createElement('img');
		        img.src = fr.result;
		        img.classList.add("imgPreview");
		        image_uploader.style.maxHeight = document.body.clientHeight - 200 + 'px';
		        img.style.maxWidth = "100%";
		        img.style.maxHeight = image_uploader.clientHeight;
		        document.querySelector("#uploading_image").style.marginTop = "20px";
		        image_uploader.style.border = "none";
		        image_uploader.style.background = "none";
		        image_uploader.prepend(img);
			}, false);
			return fr;
	}

	handleSubmit(e) {
		alert(`Данные отправлены! Например, выдержка - 
			${this.state.exifData["ExposureTime"]}`);
		e.preventDefault();
	}

	render() {
		return(
			<form id='upload_form'>
				<div className="image_uploader dib tc fl w-40">
					<input type='file' id="uploading_image" onChange={this.onChange}></input>
				</div>
				<ul className="description_inputs dib tc fl w-50" id='exif'>
					<EXIFData exifData={this.state.exifData} />
					<button type="submit" 
							id="submit" 
							className="dim"
							name="Upload" 
							onSubmit={this.handleSubmit}
							onClick={this.handleSubmit}>
							ЗАГРУЗИТЬ
					</button>
				</ul>
			</form>
		);
	}
}

export default Upload;