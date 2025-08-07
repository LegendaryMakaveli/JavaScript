let person = {
			firstName : "Feyi",
			lastName : "Onaja",
			age :            92,
			nationality : "south Sudan"
		}

	for (let detail in person) {
		if (detail === "age")
		console.log(`${detail} ${person[detail]}`)

	}