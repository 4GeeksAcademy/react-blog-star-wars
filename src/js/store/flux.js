const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],          
			detailsCharacter: null,  
			planets: [],             
			detailsPlanet: null,     
			favorites: []           
		},
		actions: {
			//Accion para obtener los personajes desde la API
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					if (!response.ok) {
						throw new Error("Error al obtener personajes"); // Mensaje de error si la respuesta no es correcta
					}
					const data = await response.json();
					setStore({ characters: data.results }); // Actualiza el estado con los personajes obtenidos
					console.log(data.results);
				} catch(error) {
					console.log(error); // Muestra el error en la consola si ocurre
				}
			},

			//Accion para obtener los detalles de un personaje específico
			getDetailsCharacter: async (id) => {
				setStore({ detailsCharacter: null }); // Resetea los detalles del personaje antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					if (!response.ok) {
						throw new Error("Error al obtener detalles del personaje");
					}
					const data = await response.json();
					setStore({ detailsCharacter: data.result.properties }); // Actualiza el estado con los detalles del personaje
					console.log(data.result);
				} catch(error) {
					console.log(error);
				}
			},

			//Accion para obtener los planetas desde la API
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					if (!response.ok) {
						throw new Error("Error al obtener planetas");
					}
					const data = await response.json();
					setStore({ planets: data.results }); // Actualiza el estado con los planetas obtenidos
					console.log(data.results);
				} catch(error) {
					console.log(error);
				}
			},

			//Accion para obtener los detalles de un planeta específico
			getDetailsPlanet: async (id) => {
				setStore({ detailsPlanet: null }); // Resetea los detalles del planeta antes de la nueva solicitud
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					if (!response.ok) {
						throw new Error("Error al obtener detalles del planeta");
					}
					const data = await response.json();
					setStore({ detailsPlanet: data.result.properties }); // Actualiza el estado con los detalles del planeta
					console.log(data.result);
				} catch(error) {
					console.log(error);
				}
			},

			//Accion para agregar un elemento a favoritos
			addFavorite: (item, type) => {
				const newFavorites = [...getStore().favorites, { ...item, type }];
				setStore({ favorites: newFavorites }); // Actualiza el estado con el nuevo favorito
			},

			//Accion para eliminar un elemento de favoritos
			deleteFavorite: async (uid, type) => {
				const newFavorites = getStore().favorites.filter(favorite => favorite.uid !== uid || favorite.type !== type);
				setStore({ favorites: newFavorites }); // Actualiza el estado eliminando el favorito seleccionado
			},
			
			//Accion para eliminar un personaje específico en caso sea requerido usarse
			deleteFavoriteCharacter: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (!response.ok) {
						throw new Error("Error al eliminar el personaje");
					}
				} catch(error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
