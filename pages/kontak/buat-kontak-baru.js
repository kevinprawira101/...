import React from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, FormCheck } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

export default function BuatKontakBaru () {
	return (
		<Layout>
			<div class="mt-12">
				<Form>
					<Form.Group as={Row}>
						<PersonIcon fontSize="large" />
						<h3>Info Kontak</h3>
					</Form.Group>
					<Form.Group as={Row} controlId="formPlaintext">
						<Form.Label column sm="2">
							Nama Panggilan
						</Form.Label>
						<Col sm="8">
							<Form.Control type="text" placeholder="Nama Panggilan" />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPlaintext">
						<Form.Label column sm="2">
							Tipe Kontak (dapat lebih dari 1)
						</Form.Label>
						<Col sm="6">
							<Form.Group as={Row} className="ml-4">
								<FormCheck />
								<p class="ml-2 mr-4">Pelanggan</p>
								<FormCheck />
								<p class="ml-2 mr-4">Supplier</p>
								<FormCheck />
								<p class="ml-2 mr-4">Karyawan</p>
								<FormCheck />
								<p class="ml-2 mr-4">Lainnya</p>
							</Form.Group>
						</Col>
					</Form.Group>
				</Form>

				<Form>
					<Form.Group as={Row}>
						<BusinessCenterIcon fontSize="large" />
						<h3>Informasi Umum</h3>
					</Form.Group>
					<Form.Group as={Row} controlId="formPlaintext">
						<Form.Label column sm="2">
							Nama Kontak
						</Form.Label>
						<Col sm="8">
							<Form.Group as={Row} column sm="5">
								<Form.Control as="select" className="ml-4 mr-2">
									<option>(kosong)</option>
									<option>Mr. </option>
									<option>Ms. </option>
									<option>Mrs. </option>
								</Form.Control>
								<Form.Control type="text" placeholder="Nama Panggilan" className="mr-2" />
								<Form.Control type="text" placeholder="Nama Panggilan" className="mr-2" />
								<Form.Control type="text" placeholder="Nama Panggilan" className="mr-2" />
							</Form.Group>
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPlaintext">
						<Form.Label column sm="2">
							Handphone
						</Form.Label>
						<Col sm="8">
							<Form.Control type="text" placeholder="Handphone" />
						</Col>
					</Form.Group>
				</Form>
			</div>
		</Layout>
	);
}
