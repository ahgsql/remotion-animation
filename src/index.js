import React, { useState } from 'react';

const CounterComponent = () => {
const [count, setCount] = useState(0);

return (
	<div>
		<p>Currently, the count is {count}</p>
		<button onClick={() => setCount(count - 1)}>Subtract</button>
		<button onClick={() => setCount(count + 1)}>Add</button>
	</div>
	);
};

export { CounterComponent };