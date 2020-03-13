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
	}

	onChange(event) {
		const exifList = document.getElementById('exif');
		let img1 = document.querySelector("#uploading_image").files[0];
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
	        	/*for (let i=0; i<exifListInputs.length; i++) {
					if (exifData[exifListInputs[i].name]) {
						exifListInputs[i].value = exifData[exifListInputs[i].name]
					}
				}*/
				document.getElementsByName(parameter)[0].value = exifData[parameter];
	        })
	    });
	    const fr = new FileReader();
		fr.addEventListener("load", function () {
			let oldImg = document.querySelector(".imgPreview");
			if (oldImg) { oldImg.remove() };
		    let img = document.createElement('img');
	        img.src = fr.result;
	        img.classList.add("imgPreview");
	        document.querySelector("#uploading_image").style.marginTop = "20px";
	        let image_uploader = document.getElementsByClassName("image_uploader")[0];
	        image_uploader.style.border = "none";
	        image_uploader.prepend(img);
		}, false);
		fr.readAsDataURL(img1);

		this.setState({exifData: exifData});
		//let exifListInputs = exifList.getElementsByTagName("input");
		/*for (let i=0; i<exifListInputs.length; i++) {
			if (exifData[exifListInputs[i].name]) {
				exifListInputs[i].value = exifData[exifListInputs[i].name]
			}
		}*/
		console.log(exifData);
	}

	handleSubmit(e) {
		alert(`Данные отправлены! Например, выдержка - 
			${this.state.exifData["ExposureTime"]}`);
		e.preventDefault();
	}

	render() {
		return(
			<form id='upload_form'>
				<div className="image_uploader">
					<input type='file' id="uploading_image" onChange={this.onChange}></input>
				</div>
				<ul className="description_inputs" id='exif'>
					<EXIFData exifData={this.state.exifData} />
					<button type="submit" 
							id="submit" 
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