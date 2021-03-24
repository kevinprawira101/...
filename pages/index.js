import Head from 'next/Head';
import Layout from '../components/Layout';
import Link from 'next/Link';
import HomeIcon from '@material-ui/icons/Home';

export default function Home ({}) {
	return (
		<Layout>
			<div>
				
				<h1><HomeIcon />Ini adalah dashboard</h1>
			</div>
		</Layout>
	);
}
