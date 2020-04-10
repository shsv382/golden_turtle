import React from 'react';
import EXIFData from './EXIFData';
import Select from './Select';
import EXIF from 'exif-js';
import { Line } from 'rc-progress';
import './upload.scss';
import { connect } from 'react-redux';
import { changeExif, changeInput } from '../actions';

const mapStateToProps = state => {
	return {
		exifData: state.changeExifData.exifData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChangeExif: (parameters) => dispatch(changeExif(parameters)),
		onChangeInput: (event) => dispatch(changeInput(event.target))
	}
}

class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			percent: 0
		}

		this.onChange = this.onChange.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadBtnClick = this.uploadBtnClick.bind(this);
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		
		this._addImgFileReader = this._addImgFileReader.bind(this);
		this._restartProgressBar = this._restartProgressBar.bind(this);
		this._increaseProgressBar = this._increaseProgressBar.bind(this);
		this._scrollToBlockHeader = this._scrollToBlockHeader.bind(this);
		this._uploadingImageHandle = this._uploadingImageHandle.bind(this);
	}

	// ------- Event Handlers -------
	onChange() {
		// ------- Checking file format matches to image -------
		const img = document.querySelector("#uploading_image");
		this._uploadingImageHandle(img.files[0]);
	}

	handleSubmit(e) {
		alert(`Данные отправлены! Например, выдержка - 
			${this.props.exifData["ExposureTime"]}`);
		e.preventDefault();
	}

	uploadBtnClick() {
		const file = document.getElementById("uploading_image");
		file.click();
	}

	handleDragOver(e) {
		e.target.classList.add("dragover");
		e.preventDefault();
	}

	handleDragLeave(e) {
		e.target.classList.remove("dragover")
	}

	handleDrop(e) {
		e.preventDefault();
		e.target.classList.remove("dragover");
		const img = e.dataTransfer.files[0];
		this._uploadingImageHandle(img);
		return false;
	}

	get categories() {
		return [
			{value: "landscape",
			 description: "Пейзаж"},
			{value: "bird",
			 description: "Птицы"},
			{value: "wild_animals",
			 description: "Дикие животные"},
			{value: "flowers",
			 description: "Цветы"},
		]
	}

	// ------- Service Methods -------
	_increaseProgressBar() {
	    const { percent } = this.state;
	    const newPercent = percent + 1;
	    if (newPercent >= 100) {
	      clearTimeout(this.tm);
	      return;
	    }
	    this.setState({ percent: newPercent });
	    this.tm = setTimeout(this._increaseProgressBar, 10);
  }

    _restartProgressBar() {
	    clearTimeout(this.tm);
	    this.setState({ percent: 0 }, () => {
	      this._increaseProgressBar();
	    });
    }

	_uploadingImageHandle(img) {
		if (!img) {
			return null;
		}
		if (img && img.type.split("/")[0].toLowerCase() !== "image") {
			alert("Пожалуйста, загрузите файл-изображение!");
			return null;
		}

		// ------- Progress bar start -------
		this._restartProgressBar();

		// ------- EXIF data fullfill -------
		const exifList = document.getElementById('exif');
		let exifData = {};
    	EXIF.getData(img, function() {
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
	        		// let changingInput = document.getElementsByName(parameter)[0];
	        		// this.props.onChangeInput(changingInput)
				
	        	} catch {
	        		exifData[parameter] = "";
	        	}
	        	document.getElementsByName(parameter)[0].value = exifData[parameter];
	        })
	    });

	    // ------- File reader operations -------
	    const fr = this._addImgFileReader();
		fr.readAsDataURL(img);
		let descriptionInputs = document.getElementsByClassName("description_inputs")[0];
	    this._scrollToBlockHeader(descriptionInputs);

		
	    // ------- Setting state -------
		this.props.onChangeExif(exifData);
	}

	_addImgFileReader() {
		const fr = new FileReader();
		fr.addEventListener("load", function () {
			let oldImg = document.querySelector(".imgPreview");
			if (oldImg) { oldImg.remove() };
		    const image_uploader = document.getElementsByClassName("image_uploader")[0];
	        const img = document.createElement('img');
	        img.src = fr.result;
	        img.classList.add("imgPreview");

	        // ------- Change it to Image-heighted div height -------
	        if (document.documentElement.clientWidth >= 768) {
	        	image_uploader.style.height = document.body.offsetHeight - 130 + 'px';	
	        } else {
	        	image_uploader.style.maxHeight = document.body.offsetHeight - 130 + 'px';
	        }
	        // ------------------------------------------------------

	        img.style.maxHeight = image_uploader.clientHeight - 70 + 'px';
	        img.style.maxWidth = "100%";
	        document.querySelector("#uploading_image").style.marginTop = "20px";
	        image_uploader.style.border = "none";
	        image_uploader.style.background = "none";
	        image_uploader.prepend(img); 
		}, false);
		return fr;
	}

	_scrollToBlockHeader(target) {
		if (document.body.offsetWidth >= 768) {
			return false
		}
		let interval = setInterval(()=>{
			document.documentElement.scrollTop += 8;
			if (target.getBoundingClientRect().top <= 77 || 
				document.documentElement.scrollTop >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 20) {
				clearInterval(interval);
			}
		}, 10)
	}

	// ------- Rendering -------
	render() {
		return(
			<form id='upload_form'>
				<div className="service"></div>
				<div className="image_uploader dib tc fl w-40"
					onDragOver = {this.handleDragOver}
					onDragLeave={this.handleDragLeave}
					onDrop={this.handleDrop}>
					<input  type='file' 
							id="uploading_image"
							onChange={this.onChange}
							></input>
					<input  type="button" 
							className="dim" 
							id="upload_btn"
							onClick={this.uploadBtnClick}
							value="ИЗМЕНИТЬ"
					/>
					<Line   percent={this.state.percent} 
							strokeWidth="1" 
							strokeColor="#d7b900" 
							width="100%"
							style={{
								position: "absolute",
								bottom: 0,
								left: 0
							}}
					/>
				</div>
				<ul className="description_inputs dib tc fl w-50" id='exif'>
					<Select name="category"
							title="Номинация"
							options={this.categories}
							onChangeInput={this.props.onChangeInput} />
					<EXIFData exifData={this.props.exifData}
							onChangeInput={this.props.onChangeInput} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Upload);