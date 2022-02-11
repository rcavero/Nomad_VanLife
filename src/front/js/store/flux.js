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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getNomadVanPlaceList: () => {
				// fetching data from the backend
				const data = fetch(process.env.BACKEND_URL + "/api/places-list") // otra forma es: ..."/places-list/" + cardId)
					.then(resp => resp.json())
					.catch(error => console.log("Error loading Nomad Van Place List from backend", error));
					// .then(resp => {nomadVanPlace: resp})
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
