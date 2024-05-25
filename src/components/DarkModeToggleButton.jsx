import { useDarkModeData, useDarkModeDispatch } from "../contexts/darkModeContext";

export function DarkModeToggleButton(){

	let darkModeData = useDarkModeData();
	let darkModeDispatch = useDarkModeDispatch();

	return(
		<button onClick={() => darkModeDispatch(!darkModeData)}>
			Toggle Dark Mode
		</button>
	)
}