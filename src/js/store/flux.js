import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			details: [],
			Planets: [],

			favoritos: [],
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

			characters: []
			,

			vehiculos: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (email, password) => {
				try {
					let data = await axios.post("https://super-duper-adventure-69ggr54rgpxxf569-3000.app.github.dev/login", {//en esta parte apunta a la url del back, es donde conecto el front y el back, es donde lo uno con mi 
						//api que seria el back
						"email": email,
						"password": password
					})
					console.log(data);
					//esto es para guardar el token en el navegador
					localStorage.setItem("token", data.data.access_token
					);
					return true;

				}
				catch (error) {

					if (error.response.status === 401) {
						alert("usuario no registrado")
					}
				}
			},


			// obtenerFavoritos: async () => {
			// 	let token = localStorage.getItem("token")
			// 	try {
			// 		let data = await axios.get("https://super-duper-adventure-69ggr54rgpxxf569-3000.app.github.dev/user/fav",
			// 			{ headers: { 'Authorization': 'Bearer ' + token } })//en esta parte apunta a la url del back, es donde conecto el front y el back, es donde lo uno con mi 
			// 		//api que seria el back
			// 		console.log(data)
			// 		return true
			// 	}
			// 	catch (error) {
			// 		console.log(error)
			// 		return false;
			// 		// e.status == 401)
			// 		// 	alert("usuario no registrado")
			// 	}
			// },

			obtenerVehiculosClaudia: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				try {
					let response = await fetch("https://swapi.dev/api/vehicles", {
						method: "GET"
					});

					let data = await response.json();
					console.log(data.results);
					setStore({ vehiculos: data.results });


				} catch (error) {
					console.log(error)
				}

			},


			obtenerPersonajes: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				try {
					let response = await fetch("https://swapi.dev/api/people"); //especificamos la url donde vamos a buscar info
					let data = await response.json()
					console.log(data);
					setStore({ characters: data.results })

				} catch (error) {
					console.log(error)

				}
			},
			obtenerplanetas: async function () {
				//accion, funcion que puedo volver a utilizar cuando quiera
				try {
					let response = await fetch("https://swapi.dev/api/planets"); //esto me regresa una respuesta, que la guerdo en un espacio de memoira
					//le digo que espere por esa respuesta
					let data = await response.json(); //le digo que convierta esa respuesta en un jason y lo guardo en un espacio de memoira y que espere por la convercion de esa respuesta
					console.log(data);
					setStore({ Planets: data.results }); //({propiedad:el valor que quiero actuaizar})
				} catch (error) {
					console.log(error);
				}
			},
			agregarFavorito: (name) => {


				setStore({ favoritos: [...getStore().favoritos, name] });



			},
			eliminarFavorito: (name) => {
				const arr = getStore().favoritos.filter((name2) =>
					name2 !== name)
				setStore({ favoritos: arr });

			},
			getDetails: async (type, id) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				if (type !== "characters") {
					const data = await fetch("https://swapi.dev/api/" + type + "/" + id);
					const response = await data.json();
					setStore({ details: response })
				} else {
					const data = await fetch("https://swapi.dev/api/people/" + id);
					const response = await data.json();
					setStore({ details: response })
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





