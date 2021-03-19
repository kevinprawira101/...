import Head from 'next/Head';
import Layout from '../components/Layout';
import Link from 'next/Link';

export default function Home ({}) {
	return (
		<Layout>
			<div>
				<span class="d-block p-2 bg-primary text-white">d-block</span>
				<span class="d-block p-2 bg-dark text-white">d-block</span>
			</div>
		</Layout>
	);
}
