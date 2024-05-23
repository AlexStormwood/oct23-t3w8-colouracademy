import { useEffect, useState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";



export default function GeneratorPage(){

	// Base colour from form 
	let [formBaseColour, setFormBaseColour] = useState("#000000");

	// Base colour from global state 
	let baseColourGlobal = useBaseColourGlobalData();
	// let baseColourGlobalRaw = useContext(BaseColourGlobalDataContext);
	let setBaseColourGlobal = useBaseColourGlobalDispatch();

	// On component mount, set local form value to global state value 
	useEffect(() => {
		setFormBaseColour(baseColourGlobal);
	}, [baseColourGlobal]);

	return(
		<div>
			{/* Base colour input form */}
			<h1>{formBaseColour}</h1>

			{/* CSS theme generator component  */}
		</div>
	)

}