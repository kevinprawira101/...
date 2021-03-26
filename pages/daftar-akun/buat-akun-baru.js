import React from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function BuatAkunBaru () {
	return (
		<Layout>
			<h1>Buat Akun Baru</h1>
			<div class="mt-12 container">
				<Form>
					<Row className="mb-3">
						<Col sm="2">Nama</Col>
						<Col sm="6">
							<Form.Control type="text" placeholder="Nama" />
						</Col>
					</Row>

					<Row className="mb-3">
						<Col sm="2">Password</Col>
						<Col sm="6">
							<Form.Control type="password" placeholder="Password" />
						</Col>
					</Row>

					<Row className="mb-3">
						<Col sm="2">Kategori</Col>
						<Col sm="6">
							<Form.Control as="select">
								<option>Kategori select</option>
							</Form.Control>
						</Col>
					</Row>

					<Row className="mb-3">
						<Col sm="2">Detail</Col>
						<Col sm="6">
							<Form.Control as="select">
								<option>None</option>
								<option>Sub - Akun Dari:</option>
								<option>Akun Header Dari:</option>
							</Form.Control>
						</Col>
					</Row>

					<Row className="mb-3">
						<Col sm="2">Deskripsi</Col>
						<Col sm="6">
							<Form.Control as="textarea" rows={3} />
						</Col>
					</Row>

					<Row className="mb-3">
						<Form.Label column sm="2" />
						<Col sm="6">
							<Button variant="danger mr-4">Batal</Button>
							<Button variant="success">Buat</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</Layout>
	);
}
