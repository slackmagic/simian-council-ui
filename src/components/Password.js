import { invoke } from "@tauri-apps/api";
import { useState } from "react";
import { Form, Grid, Input } from "semantic-ui-react";
import { Divider, Tab } from "semantic-ui-react";

export default function Password() {
	const [password, setPassword] = useState("Click to generate a password");
	const [minEntropy, setMinEntropy] = useState(2);
	const [maxEntropy, setMaxEntropy] = useState(6);
	const [wordsNumber, setWordsNumber] = useState(5);

	const retrievePassword = async (e) => {
		e.preventDefault();
		var generatedPassword = await invoke("get_password", {
			num: parseInt(wordsNumber),
			min: parseInt(minEntropy),
			max: parseInt(maxEntropy),
		}).then((result) => {
			return result.trim();
		});

		navigator.clipboard.writeText(generatedPassword);
		setPassword(generatedPassword);
	};

	const handleMinEntropyChange = (e, { name, value }) => setMinEntropy(value);
	const handleMaxEntropyChange = (e, { name, value }) => setMaxEntropy(value);
	const handleWordsdNumberChange = (e, { name, value }) =>
		setWordsNumber(value);

	return (
		<>
			<Divider hidden />
			<Grid>
				<Grid.Column as={Form}>
					<Form.Input
						min={1}
						max={7}
						label={"Minimum entropy " + minEntropy}
						name="min entropy"
						step={1}
						type="range"
						defaultValue={minEntropy}
						onChange={handleMinEntropyChange}
					/>
					<Form.Input
						min={2}
						max={8}
						label={"Maximum entropy " + maxEntropy}
						name="max entropy"
						step={1}
						type="range"
						defaultValue={maxEntropy}
						onChange={handleMaxEntropyChange}
					/>
					<Form.Input
						min={1}
						max={10}
						label={"Word number " + wordsNumber}
						name="word number"
						step={1}
						type="range"
						defaultValue={wordsNumber}
						onChange={handleWordsdNumberChange}
					/>
				</Grid.Column>
			</Grid>

			<Input
				fluid
				action={{
					color: "teal",
					labelPosition: "right",
					icon: "copy",
					content: "Generate & copy",
					onClick: retrievePassword,
				}}
				defaultValue={password}
				value={password}
				size="huge"
			/>

			<Divider hidden />
		</>
	);
}
