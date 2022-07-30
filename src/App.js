import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import Password from "./Password";
import Pokemon from "./Pokemon";

const panes = [
	{
		menuItem: "PASSWORD",
		render: () => <Password></Password>,
	},
	{
		menuItem: "POKEMON",
		render: () => <Pokemon></Pokemon>,
	},
];

function App() {
	return (
		<div className="App">
			<Container fluid>
				<Header as="h1" textAlign="left">
					🐵 Simian council
				</Header>
				<Tab
					menu={{
						color: "yellow",
						inverted: true,
						attached: false,
						tabular: false,
					}}
					panes={panes}
				/>
			</Container>
		</div>
	);
}

export default App;
