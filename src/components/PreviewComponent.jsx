import "../styles/PreviewCard.css"

export function PreviewCard({colourEntry, textColour}){

	return <div className="previewCard" style={{backgroundColor: colourEntry.hex, color: textColour}}>
		<h1>Preview Content Card</h1>
		<h5>Subtitle of card</h5>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse maiores dolorum animi velit illum, inventore dolorem, quas sequi soluta modi eius culpa! Deserunt mollitia maxime suscipit, rerum possimus id.
		</p>

		<button>
			Example button
		</button>
	</div>
}