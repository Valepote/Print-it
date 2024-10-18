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
	
	// creation de nouveau eléments html (flèches)
	var arrow_left = document.createElement("div")
	arrow_left.classList.add("arrow_left")
	arrow_left.classList.add("arrow")
	
	var arrow_leftImg = document.createElement("img")
	arrow_leftImg.src = "./assets/images/arrow_left.png"
	arrow_leftImg.alt = "Arrow-left"
	arrow_left.append(arrow_leftImg)

	var arrow_right = document.createElement("div")
	arrow_right.classList.add("arrow_right")
	arrow_right.classList.add("arrow")
	
	var arrow_rightImg = document.createElement("img")
	arrow_rightImg.src = "./assets/images/arrow_right.png"
	arrow_rightImg.alt = "Arrow_right"
	arrow_right.append(arrow_rightImg)

	// appel des elements de la bannière
	var banner = document.getElementById("banner")
	banner.append (arrow_left)
	banner.append (arrow_right)

	// compteur de slides
	var index = 0

	// création des boutons
	var dotSelect=()=>{
	var dots=document.querySelector(".dots")
	dots.innerHTML=""
	


	for(var i=0; i<slides.length;i++){
		
	
		var dot=document.createElement("div")
		dot.classList.add("dot")
		dot.classList.remove("dot_selected")
		if (i===index)
		{
			dot.classList.add("dot_selected")
		}
		dots.append(dot)
	}

	}
	// appel de la fonction
	dotSelect()
	

	// création des eventListener flèches gauche et droite
	arrow_left.addEventListener("click",()=>{
	moveslide("left")
	dotSelect()
	})
	arrow_right.addEventListener("click",()=>{
	moveslide("right")
	dotSelect()
	})



	// fonction flèches 
	var moveslide=(direction)=>{
	// si on clique à gauche alors si index est inf ou égal à 0 = max de slides -1, sinon -1
	if (direction==="left"){
		if (index<=0){
			index = slides.length -1
		}
		else {
		index -= 1
		}
	}
	// sinon max de slide -1 =0 sinon +1
	else {
		if (index>=slides.length -1){
			index=0
		}
		else {
		index += 1
		}
	}
	
	showslide(index)
	}

	var showslide=(index)=>{
	var slide=slides[index]

	
	// Selection des images à faire défiler
	var bannerslides=document.querySelector(".banner-img")
	bannerslides.src=`./assets/images/slideshow/${slide.image}`
	
	// Selection des textes à faire defiler 
	var bannertagLine=document.querySelector("#banner p")
	bannertagLine.innerHTML = slides[index].tagLine
	


	}
	

	
