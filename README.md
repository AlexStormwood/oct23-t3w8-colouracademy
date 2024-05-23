# ColourAcademy - CSS Variable Generator Website 

## Routes 

- "/" : homepage
	- CSS generator available here 
- "/generator" - CSS generator page 
	- CSS generator available here 
- "/generator/saved" - view list of saved themes 
	- reads localstorage 


## Contexts 

- Base Colour 
	- hex colour of new theme 
- Current CSS theme
	- one theme list 
	- localstorage 
- List of CSS themes
	- array of theme list
	- localstorage 




## Data 

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


# Note for Next Lesson

- [x] Alex needs to find the autoimport package and share that 