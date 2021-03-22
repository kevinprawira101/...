import React from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function BuatAkunBaru () {
	return (
		<Layout>
			<h1>Buat Akun Baru</h1>
			<div class="mt-12 container">
				<Form>
					<Form.Group as={Row} controlId="formPlaintext">
						<Form.Label column sm="2">
							Nama
						</Form.Label>
						<Col sm="6">
							<Form.Control type="text" placeholder="Nama" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPlaintextPassword">
						<Form.Label column sm="2">
							Password
						</Form.Label>
						<Col sm="6">
							<Form.Control type="password" placeholder="Password" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPlainText">
						<Form.Label column sm="2">
							Kategori
						</Form.Label>
						<Col sm="6">
							<Form.Control as="select">
								<option>Kategori select</option>
							</Form.Control>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPlainText">
						<Form.Label column sm="2">
							Detail
						</Form.Label>
						<Col sm="6">
							<Form.Control as="select">
								<option>None</option>
								<option>Sub - Akun Dari:</option>
								<option>Akun Header Dari:</option>
							</Form.Control>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm="2">
							Deskripsi
						</Form.Label>
						<Col sm="6">
							<Form.Control as="textarea" rows={3} />
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm="2" />
						<Col sm="6">
							<Button variant="danger mr-4">Batal</Button>
							<Button variant="success">Buat</Button>
						</Col>
					</Form.Group>
				</Form>
			</div>
		</Layout>
	);
}
