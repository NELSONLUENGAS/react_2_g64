import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductosContext } from '../context/ProductosProvider';

export const ProductDetail = () => {
	const { productos } = useContext(ProductosContext);

	const { product_id } = useParams();

	const pokemonFound = productos.find((product) =>
		product.name.includes(product_id)
	);
	console.log(pokemonFound);

	return (
		<>
			{pokemonFound ? (
				<div>
					<img
						src={pokemonFound.image}
						alt=""
					/>
					<p>
						<strong>Name: {pokemonFound.name}</strong>
					</p>
				</div>
			) : (
				<h1>Pokemon cargando</h1>
			)}
		</>
	);
};
