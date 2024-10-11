var slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", () => {
	const arrow_left = document.createElement("div")
	arrow_left.classList.add("arrow_left")
	arrow_left.classList.add("arrow")
	
	const arrow_leftImg = document.createElement("img")
	arrow_leftImg.src = "./assets/images/arrow_left.png"
	arrow_leftImg.alt = "Arrow-left"
	arrow_left.append(arrow_leftImg)

	const arrow_right = document.createElement("div")
	arrow_right.classList.add("arrow_right")
	arrow_right.classList.add("arrow")
	
	const arrow_rightImg = document.createElement("img")
	arrow_rightImg.src = "./assets/images/arrow_right.png"
	arrow_rightImg.alt = "Arrow_right"
	arrow_right.append(arrow_rightImg)

	const banner = document.getElementById("banner")
	banner.append (arrow_left)
	banner.append (arrow_right)

	const dots=document.querySelector(".dots")
	console.log(dots)

	for(const slide of slides){
		console.log(slide)
		const dot=document.createElement("div")
		dot.classList.add("dot")
		dots.append(dot)
	}

	arrow_left.addEventListener("click",()=>{
	moveslide("left")
	})
	arrow_right.addEventListener("click",()=>{
	moveslide("right")
	})


	let index = 0

	
	const moveslide=(direction)=>{
	
	if (direction==="left"){
		if (index<=0){
			index = slides.length -1
		}
		else {
		index -= 1
		}
	}

	else {
		if (index>=slides.length -1){
			index=0
		}
		else {
		index += 1
		}
	}
	console.log(index)
	showslide(index)
	}

	const showslide=(index)=>{
	const slide=slides[index]
	console.log(slide)
	
	const bannerslides=document.querySelector(".banner-img")
	bannerslides.src=`./assets/images/slideshow/${slide.image}`
	console.log(banner-img)

	const bannertagLine=document.querySelector("#banner p")
	bannertagLine.innerHTML = slides[index].tagLine
	console.log(bannerp)

	}
	
});
	
