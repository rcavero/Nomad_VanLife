const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			// Create the variable token in the storage
			token: null,
			currentLocation: [0, 0],
			nomadVanPlaceList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// This is for assign the token saved on sessionStorage to its variable on the store once the app charge
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) {
					setStore({ token: token });
				}
			},
			// This is for login in
			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				try {
					const resp = await fetch(process.env.BACKEND_URL + '/api/token', opts)
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}
					const data = await resp.json();
					console.log("This came from the backend", data);
					sessionStorage.setItem("token", data.token);
					setStore({ token: data.token })
					return true;
				}
				catch (error) {
					console.error("There was an error login in")
				}

			},
			logout: () => {
				sessionStorage.removeItem("token");
				setStore({ token: null });
			},
			// function to register a new user with email and password
			register: (email, password) => {
				const data = {
					email: email,
					password: password
				}
				const opts = {
					method: "POST",
					body: JSON.stringify(data),
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/registerUser", opts)
					.then(resp => resp.json())
					// .then(data => setStore({ message: data.message }))
					.catch(error => console.log("There was some error creating the new user", error));
			},
			// -----------------------------------------------------------------------
			// Create a new NomadVanPlace with the info caming from the form
			createNomadVanPlace: (title, picture, latitude, longitude, kindOfPlace, services, description, rating) => {
				const store = getStore();
				let body = new FormData()
				body.append('title',title)
				body.append('picture',picture[0])
				body.append('latitude',latitude)
				body.append('longitude',longitude)
				body.append('kindOfPlace',kindOfPlace)
				body.append('services',services)
				body.append('description',description)
				body.append('rating',rating)
				// const data = {
				// 	title: title,
				// 	picture: picture[0],
				// 	location: location,
				// 	kindOfPlace: kindOfPlace,
				// 	services: services,
				// 	description: description,
				// 	rating: rating
				// }
				// console.log(data.picture)
				console.log(body)
				const opts = {
					method: "POST",
					body: body,
					// mode: no-cors,
					// body: JSON.stringify(data), //body
					headers: {
						"Authorization": "Bearer " + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/newNomadVanPlace", opts)
					.then(resp => resp.json())
					// .then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			// ------------------------------------------------------------------------
			// Example for making an authenticated request ¡¡¡IMPORTANT!!!
			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			// -------------------------------------------------------------
			getNomadVanPlaceList: () => {
				// fetching data from the backend
				const data = fetch(process.env.BACKEND_URL + "/api/places-list") // otra forma es: ..."/places-list/" + cardId)
					.then(resp => resp.json())
					.then(resp => setStore({nomadVanPlaceList: resp}))
					.catch(error => console.log("Error loading Nomad Van Place List from backend", error));
				return data
			},
			getNomadVanPlace: (cardId) => {
				// fetching data from the backend
				const data = fetch(process.env.BACKEND_URL + `/api/places-list/${cardId}`) // otra forma es: ..."/places-list/" + cardId)
					.then(resp => resp.json())
					.catch(error => console.log("Error loading Nomad Van Place from backend", error));
				// .then(resp => {nomadVanPlace: resp})
				return data
			},
			filterPlaces: (kindOfPlace, services, rating) => {
				const filter = { kindOfPlace: kindOfPlace, services: services, rating: rating }
				const opts = {
					method: "POST",
					body: JSON.stringify(filter),
				}
				// fetching data from the backend
				const data = fetch(process.env.BACKEND_URL + "/api/places-list-filtered", opts) // otra forma es: ..."/places-list/" + cardId)
					.then(resp => resp.json())
					.then(resp => setStore({nomadVanPlaceList: resp}))
					.catch(error => console.log("Error loading Nomad Van Place List from backend", error));
				// .then(resp => {nomadVanPlace: resp})
				return data
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
