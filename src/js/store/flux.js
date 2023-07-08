const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		people: [],
		planets: [],
		vehicles: [],
		favorites: [],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},

		addFavorites: (name) => {
		  const store = getStore();
		  setStore({ favorites: [...store.favorites, name] });
		},

		deleteItem: (i) => {
		  const store = getStore();
		  let newFavorites = store.favorites.filter((item, index) => {
			return i != index;
		  });
		  setStore({ favorites: newFavorites });
		},

		loadSomeData: () => {
		  fetch("https://swapi.dev/api/people/")
			.then((res) => res.json())
			.then((data) => {
			  console.log(data);
			  setStore({ people: data.results });
			})
			.catch((err) => console.error(err));

		  fetch("https://swapi.dev/api/planets/")
			.then((res) => res.json())
			.then((data) => {
			  console.log(data);
			  setStore({ planets: data.results });
			})
			.catch((err) => console.error(err));

		  fetch("https://swapi.dev/api/vehicles/")
			.then((res) => res.json())
			.then((data) => {
			  console.log(data);
			  setStore({ vehicles: data.results });
			})
			.catch((err) => console.error(err));
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
		},
	  },
	};
  };

  export default getState;
