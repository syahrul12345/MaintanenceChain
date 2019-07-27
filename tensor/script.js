/**
@notice Get data and clean it
@dev
**/

const getData = async() => {
	const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
	const carsData = await carsDataReq.json();  
	const cleaned = carsData.map(car => ({
	    mpg: car.Miles_per_Gallon,
	    horsepower: car.Horsepower,
	  }))
	  .filter(car => (car.mpg != null && car.horsepower != null));
	  
	 return cleaned;
}

const run = async() => {
	const data = await getData();
	const values = data.map(d => ({
		x: d.horsepower,
		y:d.mpg
	}));
	tfvis.render.scatterplot(
		{name:'Horsepower vs MPG'},
		{values},
		{xLabel:'Horsepower',yLabel:'MPG',height:300}

	)
}

const createModel = async() => {
	const model = tf.sequential(); 
	// Add a single hidden layer
	model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
	// Add an output layer
	model.add(tf.layers.dense({units: 1, useBias: true}));
}
document.addEventListener('DOMContentLoaded', run);