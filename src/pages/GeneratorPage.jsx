import { useEffect, useState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";
import { useCurrentThemeData } from "../contexts/currentThemeContext";
import { ColourBlock } from "../components/ColourBlock";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';


export default function GeneratorPage(){

	const [modal, setModal] = useState(false);

	// Base colour from global state 
	let baseColourGlobal = useBaseColourGlobalData();
	// let baseColourGlobalRaw = useContext(BaseColourGlobalDataContext);
	let setBaseColourGlobal = useBaseColourGlobalDispatch();

	let currentTheme = useCurrentThemeData();

	// Base colour from form 
	let [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);


	// On component mount, set local form value to global state value 
	useEffect(() => {
		setFormBaseColour(baseColourGlobal);
	}, [baseColourGlobal]);

	useEffect(() => {
		setBaseColourGlobal(formBaseColour);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formBaseColour]);

	return(
		<div>
			<PureModal
				header={currentTheme.displayName}
				footer={
					<div>
					<h6>Thankyou for generating some colours!</h6>
					</div>
				}
				isOpen={modal}
				closeButton="X"
				closeButtonPosition="bottom"
				onClose={() => {
					setModal(false);
					return true;
				}}
			>
				<p>Your content</p>
			</PureModal>
			<button onClick={() => setModal(!modal)}>
				Toggle Modal
			</button>

			{/* Base colour input form */}
			<h1>{formBaseColour}</h1>
			{/* <input type="color" name="" id="" /> */}
			<Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />

			{/* CSS theme display component  */}
			{currentTheme.colours?.map((colourEntry, index) => {
				return <ColourBlock key={currentTheme.name + index} colourEntry={colourEntry} />
			})}
		</div>
	)

}