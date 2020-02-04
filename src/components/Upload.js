import React from 'react';
import Image from './Image';
import EXIF from 'exif-js';

class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this)
	}

	onChange(event) {
		const exifList = document.getElementById('exif');
		exifList.innerHTML = "";
		let img1 = document.querySelector("input").files[0];
    	EXIF.getData(img1, function() {
	        const parameters = ["Model", "ExposureTime", "FNumber", 
	         					"ISOSpeedRatings","ShutterSpeedValue", 
	         					"ApertureValue", "FocalLength", "ImageWidth", 
	         					"ImageHeight", "DigitalZoomRation", "Make"];
	        parameters.map(parameter => {
	        	let current = EXIF.getTag(this, parameter);
	        	let li = document.createElement('li');
	        	li.innerHTML = `${parameter}: ${current}`;
	        	exifList.append(li);
	        })
	    });
	    const fr = new FileReader();
		fr.addEventListener("load", function () {
		    let img = document.createElement('img');
	        img.src = fr.result;
	        img.style.width = "100px";
	        exifList.append(img);
		}, false);
		fr.readAsDataURL(img1);
	}

	render() {
		return(
			<div>
				<input type='file' onChange={this.onChange}></input>
				<ul id='exif'></ul>
			</div>
		);
	}
}

export default Upload;