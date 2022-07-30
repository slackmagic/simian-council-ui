import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { Container, Header } from "semantic-ui-react";
import { Divider, Tab } from "semantic-ui-react";

export default function Pokemon() {
	const [pokemon, setPokemon] = useState("Click to generate a pokemon");

	const retrievePokemon = async (e) => {
		e.preventDefault();
		await invoke("get_pokemon_with_adjective").then((result) => {
			setPokemon(result.trim());
		});
	};

	return (
		<>
			<Divider hidden />
			<Input
				fluid
				action={{
					color: "teal",
					labelPosition: "right",
					icon: "copy",
					content: "Generate & copy",
					onClick: retrievePokemon,
				}}
				defaultValue={pokemon}
				value={pokemon}
				size="huge"
			/>

			<Divider hidden />
		</>
	);
}
