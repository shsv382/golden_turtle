import React from 'react';
import ReactDOM from 'react-dom';
import ImageEdit from './ImageEdit';
import './ModalComponent.scss';

class ModalComponent extends React.Component {
	constructor(props) {
		super(props);
		this.unmount = this.unmount.bind(this);
	}

	componentDidMount() {
		const top = 100;
		const modal = document.getElementById("modal-background");
		modal.style.left =  document.body
							.getBoundingClientRect().left * (-1) + "px";
		modal.style.height = document.documentElement.scrollHeight + "px";

		const modalContainer = document.getElementById("modal-container");
		modalContainer.style.width = document.documentElement.clientWidth + "px";
		
		const modalWindow = document.getElementById("modal-window");
		modalWindow.style.height = document.documentElement.clientHeight - top + "px";
		modalWindow.style.marginTop = `${top/2}px`;
		modalWindow.style.marginBottom = `${top/2}px`;
	}

	unmount(e) {
		if (e.target === document.getElementById("modal-window")) {
			e.stopPropagation();
			return false;
		}
		ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentElement)
	}

	render() {
		const { image } = this.props;
		return (<div id="modal-background" onClick={this.unmount}>
					<div id="modal-container">
						<div id="modal-window">
							<span id="closeWindow">&#10006;</span>
							<ImageEdit image={image} />
						</div>
					</div>
				</div>)
	}
}

export default ModalComponent;