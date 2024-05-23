
export function ColourBlock({colourEntry}){

	return(
		<div className="colourBlock" style={{backgroundColor: colourEntry.hex}}>
			<h1>{colourEntry.hex}</h1>
			<h2>{colourEntry.themeName + "-" + colourEntry.strength}</h2>
		</div>
	)
}