import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	console.log(store)

	return (
	<div className="text-center mt-5">

	</div>
);}
