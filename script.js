// Project by Cuevas Ramiro, Laborde Luciano, Lateana Tomás and Vieta Tomás

window.onload = function() {

	next = function() {
		if (imgNum < images.length-1) {
			imgNum++;
			slideImg.src = images[imgNum];
			imgText.innerHTML = imagesText[imgNum];
		}
	}
		
	prev = function() {
		if (imgNum > 0) {
			imgNum--;
			slideImg.src = images[imgNum];
			imgText.innerHTML = imagesText[imgNum];
		}
	}

	var images = ["https://media.istockphoto.com/id/1215954247/vector/professional-workers-and-freelancers-working-together-online.jpg?s=612x612&w=0&k=20&c=sdq3STqSCma6P2P0l2l1-Y5dgRGlDjlKpxg5eQpLqqA=", "https://media.istockphoto.com/id/1215953761/vector/remote-working-and-virtual-business-team.jpg?s=612x612&w=0&k=20&c=N_PW03yRRn19cuCyBk7JsFH7QYrlrzPHPvStztIazb0=", "https://harmony.solutions/wp-content/uploads/2021/06/telehealth_june-14-scaled.jpg"]
	var imagesText = ['NeuroLingua is the best option for travellers, as it can translate more than 100 languages in the world!', 'NeuroLingua is fast and efficient. With its simple and quick setup, you\'ll be able to communicate with millions of people without having to speak their language.', 'NeuroLingua uses its own translator which includes AI. Thanks to this add-on, the translations provided by the chip become more specific and clear than most translators in the Net.'];

	var slideImg = document.getElementById("slide-img");
	var imgText = document.getElementById("img-text");
	var imgNum = 0;
	slideImg.src = images[imgNum];
	imgText.innerHTML = imagesText[imgNum];

}
