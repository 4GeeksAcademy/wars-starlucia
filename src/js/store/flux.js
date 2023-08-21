const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {






			details: [

			],
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
			loadSomeDataClaudia: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataCecilia: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataLucia: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadSomeDataAgustin: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getDetails: async (type, id) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				
				if (type == "vehicles" || type == "planets") {
					const data = await fetch("https://swapi.dev/api/" + type);
					const response = await data.json();
					setStore({ details: response.results })
				} else {
					const data = await fetch("https://swapi.dev/api/people/" + type);
					const response = await data.json();
					setStore({ details: response.results })
				}
				
				

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
