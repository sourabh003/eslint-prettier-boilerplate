import { useEffect } from 'react';

export default function feature() {
	useEffect(() => {
		console.log('hello');
	}, []);

	return <div>feature</div>;
}
