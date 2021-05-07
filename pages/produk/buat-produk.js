import React from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Col, Row, FormCheck, Card } from 'react-bootstrap';
import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import * as Yup from 'yup';
import { Formik, Form as Forms } from 'formik';
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function BuatProduk({ data, data2 }) {

	const url = 'http://localhost:3000/api/produk/produk';
	return (
		<Layout>
			<Formik
				initialValues={{
					file_upload: "",
					nama: "",
					kode_sku: "",
					kategori_akun: "",
					unit: "",
					deskripsi: "",
					hbs: "",
					akun_pembelian1: "",
					pajak_beli: "",
					hjs: "",
					akun_pembelian2: "",
					pajak_jual: "",
				}}

				// validationSchema={UserSchema}
				onSubmit={async (values) => {
					console.log(values);
					Axios.post(url, values).
						then(function (response) { console.log(response) }).
						catch(function (error) { console.log(error) })
				}}
			>
				{(props) => (
					<Forms noValidate>
						<Form>
							<Row className="ml-2 mb-4">
								<LocalMallIcon fontSize="large" />
								<h3>Buat Produk / Jasa Baru</h3>
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
											{/* <Form.File className="mb-2" id="formcheck-api-regular" name="file_upload" onChange={props.handleChange}>
												<Form.File.Input />
											</Form.File> */}
											<Form.Control className="mb-2" placeholder="" name="file_upload" onChange={props.handleChange} />
										</Col>
									</Row>

									{/* Nama */}
									<Row className="mb-2">
										<Col sm="2">
											<Form.Label>Nama</Form.Label>
										</Col>
										<Col sm="4">
											<Form.Control className="mb-2" placeholder="" name="nama" onChange={props.handleChange} />
										</Col>
									</Row>

									{/* Kode / SKU */}
									<Row className="mb-2">
										<Col sm="2">
											<Form.Label>Kode / SKU</Form.Label>
										</Col>
										<Col sm="4">
											<Form.Control className="mb-2" placeholder="" name="kode_sku" onChange={props.handleChange} />
										</Col>
									</Row>

									{/* Kategori */}
									<Row className="mb-2">
										<Col sm="2">
											<Form.Label>Kategori</Form.Label>
										</Col>
										<Col sm="4">
											<Form.Control className="mb-2" as="select" name="kategori_akun" onChange={props.handleChange}>
												{/* loop over kategori and show them */}
												<option disabled>Pilih</option>
												{data.map((kategori) => (
													<option key={kategori.id} value={kategori.id}>{kategori.name}</option>

												))}
											</Form.Control>
										</Col>
									</Row>

									{/* Unit */}
									<Row className="mb-2">
										<Col sm="2">
											<Form.Label>Unit</Form.Label>
										</Col>
										<Col sm="4">
											<Form.Control className="mb-2" as="select" name="unit" onChange={props.handleChange}>
												<option disabled>Pilih</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</Form.Control>
										</Col>
									</Row>

									{/* Deskripsi */}
									<Row className="mb-12">
										<Col sm="2">
											<Form.Label>Deskripsi</Form.Label>
										</Col>
										<Col sm="4">
											<Form.Control className="mb-2" placeholder="" name="deskripsi" onChange={props.handleChange} />
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
											<Form.Control className="mb-2" placeholder="Rp. 0,00" name="hbs" onChange={props.handleChange} />
										</Col>
										<Col>
											<Form.Label>Akun Pembelian</Form.Label>
											<Form.Control className="mb-2" as="select" name="akun_pembelian1" onChange={props.handleChange}>
												<option disabled>Pilih</option>
												{data2.map((akun) => (
													<option key={akun.id} value={akun.id}>{akun.nama_akun}</option>
												))}


											</Form.Control>
										</Col>
										<Col>
											<Form.Label>Pajak Jual</Form.Label>
											<Form.Control className="mb-2" as="select" nama="pajak_beli" onChange={props.handleChange}>
												<option disabled>Pilih</option>
												<option value="1">1</option>
												<option value="2">2</option>
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
											<Form.Control className="mb-2" placeholder="Rp. 0,00" name="hjs" onChange={props.handleChange} />
										</Col>
										<Col>
											<Form.Label>Akun Pembelian</Form.Label>
											<Form.Control className="mb-2" as="select" name="akun_pembelian2" onChange={props.handleChange}>
												<option disabled>Pilih</option>
												{data2.map((akun) => (
													<option key={akun.id} value={akun.id}>{akun.nama_akun}</option>
												))}
											</Form.Control>
										</Col>
										<Col>
											<Form.Label>Pajak Jual</Form.Label>
											<Form.Control className="mb-2" as="select" name="pajak_jual" onChange={props.handleChange}>
												<option disabled>Pilih</option>
												<option value="1">1</option>
												<option value="2">2</option>
											</Form.Control>
										</Col>
									</Row>

									<Row>
										<Col className="d-flex justify-content-end mt-10">
											<Button variant="danger mr-2">Batal</Button>

											<Button variant="success" onClick={props.handleSubmit}>Tambah</Button>

										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Form>
					</Forms>
				)}
			</Formik>
		</Layout >

	);
}

export async function getServerSideProps() {
	const kategories = await prisma.kategori.findMany({
		orderBy: [
			{
				id: 'asc'
			}
		],
	});

	const akuns = await prisma.akun.findMany({
		orderBy: [
			{
				kategoriId: 'asc'
			}
		]
	})

	return {
		props: {
			data: kategories,
			data2: akuns
		}
	}
}
