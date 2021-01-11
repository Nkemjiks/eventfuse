import React from 'react';

const CounterContext = React.createContext(0);

const CounterContextProvider = () => {
	const [counter, setCounter] = React.useState(0);
	const increment = () => setCounter(counter + 1);
	const decrement = () => setCounter(counter - 1);

	return (
		<CounterContext.Provider value={{ counter, increment, decrement }}>
			<CounterComponent />
		</CounterContext.Provider>
	);
};

const CounterComponent = () => {
	const { counter, increment, decrement } = React.useContext(CounterContext);

	return (
		<div>
			<button onClick={() => decrement()}>decrement</button>
			{counter}
			<button onClick={() => increment()}>increment</button>
		</div>
	);
};

export default CounterContextProvider;
