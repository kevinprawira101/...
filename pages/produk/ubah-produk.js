import React from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Col, Row, FormCheck, Card } from 'react-bootstrap';
import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';

export default function UbahProduk () {
	return (
		<div>
			<Layout>
				<Form>
					<Row className="ml-2 mb-4">
						<LocalMallIcon fontSize="large" />
						<h3>Ubah Produk / Jasa Baru</h3>
					</Row>
					<Card>
						<Card.Body>
							<h4>Info Product / Service</h4>

							{/* Gambar */}
							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Gambar</Form.Label>
								</Col>
								<Col sm="4">
									<Form.File className="mb-2" id="formcheck-api-regular">
										<Form.File.Input />
									</Form.File>
								</Col>
							</Row>

							{/* Nama */}
							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama</Form.Label>
								</Col>
								<Col sm="4">
									<Form.Control className="mb-2" placeholder="" />
								</Col>
							</Row>

							{/* Kode / SKU */}
							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Kode / SKU</Form.Label>
								</Col>
								<Col sm="4">
									<Form.Control className="mb-2" placeholder="" />
								</Col>
							</Row>

							{/* Kategori */}
							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Kategori</Form.Label>
								</Col>
								<Col sm="4">
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							{/* Unit */}
							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Unit</Form.Label>
								</Col>
								<Col sm="4">
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							{/* Deskripsi */}
							<Row className="mb-12">
								<Col sm="2">
									<Form.Label>Deskripsi</Form.Label>
								</Col>
								<Col sm="4">
									<Form.Control className="mb-2" placeholder="" />
								</Col>
							</Row>

							<h4>Harga</h4>
							<hr />
							<Row className="ml-2">
								<FormCheck />
								<h5>Saya Beli Produk Ini</h5>
							</Row>
							<hr />

							<Row sm="6">
								<Col>
									<Form.Label>Harga Beli Satuan</Form.Label>
									<Form.Control className="mb-2" placeholder="Rp. 0,00" />
								</Col>
								<Col>
									<Form.Label>Akun Pembelian</Form.Label>
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
								<Col>
									<Form.Label>Pajak Jual</Form.Label>
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							<hr />
							<Row className="ml-2">
								<FormCheck />
								<h5>Saya Jual Produk Ini</h5>
							</Row>
							<hr />

							<Row sm="6">
								<Col>
									<Form.Label>Harga Beli Satuan</Form.Label>
									<Form.Control className="mb-2" placeholder="Rp. 0,00" />
								</Col>
								<Col>
									<Form.Label>Akun Pembelian</Form.Label>
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
								<Col>
									<Form.Label>Pajak Jual</Form.Label>
									<Form.Control className="mb-2" as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							<Row>
								<Col className="d-flex justify-content-end mt-10">
									<Button variant="danger mr-2">Batal</Button>
									<Link href="">
										<Button variant="success">Tambah</Button>
									</Link>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Form>
			</Layout>
		</div>
	);
}
