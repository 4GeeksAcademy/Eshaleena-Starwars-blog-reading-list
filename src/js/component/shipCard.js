import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ShipCard = props => {
	const { store, actions } = useContext(Context);
	const shipStore = store.starShip.filter(ship => ship.name == props.ship.name);
	useEffect(() => actions.starShipDescription(props.ship.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://raw.githubusercontent.com/NicolasArayaB/starwars-blog-reading-list/master/dist/img/deathstar.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.ship.name}</Card.Title>
					{shipStore[0] ? (
						<Card.Text>
							<p>Model: {shipStore[0].model}</p>
							<p>Class: {shipStore[0].starship_class}</p>
							<p>Passengers: {shipStore[0].passengers}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single_starship/" + props.ship.uid} data={shipStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.ship.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

ShipCard.propTypes = {
	index: PropTypes.number,
	ship: PropTypes.object,
	id: PropTypes.number
};

export default ShipCard;
