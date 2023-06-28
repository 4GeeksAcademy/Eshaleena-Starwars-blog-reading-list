const getState = ({ getStore, getActions, setStore }) => {
	let APIURL="https://swapi.dev/api"
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {

			loadSomeData: () => {
				fetch(APIURL+"/people")
				.then(resp => resp.json())
				.then(data => setStore({characters:data.results}))

				fetch(APIURL+"/planets")
				.then(resp => resp.json())
				.then(data => setStore({planets:data.results}))

				fetch(APIURL+"/starships")
				.then(resp => resp.json())
				.then(data => setStore({starships:data.results}))
			}
		}
	};
};

export default getState;
