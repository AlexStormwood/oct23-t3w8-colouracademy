/*

### Colour Object 

```js
{
	hex: "#000000",
	strength: 100,
	rgba: [255, 255, 255, 255]
}
```

### Theme List 

```js
{
	name: "violet eggplant"
	colours: [
		Colour Objects go here 
	]
}
```

*/


import { colorblender, extend } from "colorblender";

// All of this to let us generate names from hex colours
import nameExtension from "colorblender/extensions/name";
import { paletten } from "paletten";
extend([nameExtension]);


// Super Cool Blue
// super-cool-blue
// super-cool-blue-50 
// dark grey 
// dark-grey
// dark-grey-50
export function generateTones(baseColour, themeName = ""){
	let newThemeName = themeName.toLocaleLowerCase().replaceAll(" ", "-") 
		|| 
		colorblender(baseColour).name().toLocaleLowerCase().replaceAll(" ", "-");
	
	let rawPalettenOutput = paletten(baseColour);

	let finalizedOutput = {
		name: newThemeName,
		colours: []
	}

	let formattedColoursList = Object.keys(rawPalettenOutput).map((key) => {
		return {
			strength: key,
			hex: rawPalettenOutput[key],
			rgb: colorblender(rawPalettenOutput[key]).rgb(),
			themeName: newThemeName
		}
	});

	finalizedOutput.colours = formattedColoursList;

	return finalizedOutput;
}