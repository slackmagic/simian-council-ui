import "./App.css";
import { Container, Header } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import Password from "./components/Password";
import Pokemon from "./components/Pokemon";

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
