import Head from 'next/Head';
import Layout from '../components/Layout';
import Link from 'next/Link';
import { Form, Row, Col, FormCheck, Button, Card } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';

export default function Home ({}) {
	return (
		<Layout>
			<div>
				<h1> <HomeIcon fontSize="medium"/>Ini adalah dashboard</h1>
			</div>
		</Layout>
	);
}
