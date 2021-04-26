import React from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form as Forms } from 'formik';
import * as Yup from 'yup';

export default function BuatAkunBaru() {

	const BuatAkunBaruSchema = Yup.object().shape({
		nama_akun: Yup.string().required('*required'),
		kode_akun: Yup.string().required('*required'),
		// kategori_akun: Yup.string().required('kategori_akun harus dipilih'),
		// detail: Yup.string().required('detail harus dipilih'),
		// deskripsi: Yup.string().required('*deskripsi tidak boleh kosong'),
	});

	return (
		<Layout>
			<Formik
				initialValues={{
					nama_akun: '',
					kode_akun: '',
					kategori_akun: '',
					// detail: '',
					// deskripsi: '',
				}}
				validationSchema={BuatAkunBaruSchema}
				onSubmit={(values) => {
					console.log(values)
				}}
			>
				{(props) => (
					<Forms noValidate>
						<h1>Buat Akun Baru</h1>
						<div class="mt-12 container">
							<Form>
								<Row className="mb-3">
									<Col sm="2">Nama Akun</Col>
									<Col sm="6">
										<Form.Control type="text" placeholder="Nama" name="nama_akun" onChange={props.handleChange} onBLur={props.handleBlur} />
										{props.errors.nama_akun && props.touched.nama_akun ? <div class="text-red-500 text-sm">{props.errors.nama_akun}</div> : null}
									</Col>
								</Row>

								<Row className="mb-3">
									<Col sm="2">Kode Akun</Col>
									<Col sm="6">
										<Form.Control type="text" placeholder="Auto" name="kode_akun" onChange={props.handleChange} onBLur={props.handleBlur} />
										{props.errors.kode_akun && props.touched.kode_akun ? <div class="text-red-500 text-sm">{props.errors.kode_akun}</div> : null}
									</Col>
								</Row>

								<Row className="mb-3">
									<Col sm="2">Kategori Akun</Col>
									<Col sm="6">
										<Form.Control as="select" name="kategori_akun" onChange={props.handleChange} onBLur={props.handleBlur}>
											<option value='' disabled>Kategori select</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</Form.Control>
										{props.errors.kategori_akun && props.touched.kategori_akun ? <div class="text-red-500 text-sm">{props.errors.kategori_akun}</div> : null}
									</Col>
								</Row>

								<Row className="mb-3">
									<Col sm="2">Detail</Col>
									<Col sm="6">
										<Form.Control as="select" nama_akun="detail" onChange={props.handleChange} onBLur={props.handleBlur}>
											<option value='' disabled>None</option>
											<option value="sub1">Sub - Akun Dari:</option>
											<option value="sub2">Akun Header Dari:</option>
										</Form.Control>
										{props.errors.detail && props.touched.detail ? <div class="text-red-500 text-sm">{props.errors.detail}</div> : null}
									</Col>
								</Row>

								<Row className="mb-3">
									<Col sm="2">Deskripsi</Col>
									<Col sm="6">
										<Form.Control as="textarea" rows={3} name="deskripsi" onChange={props.handleChange} onBLur={props.handleBlur} />
										{props.errors.deskripsi && props.touched.deskripsi ? <div class="text-red-500 text-sm">{props.errors.deskripsi}</div> : null}
									</Col>
								</Row>

								<Row className="mb-3">
									<Form.Label column sm="2" />
									<Col sm="6">
										<Button variant="danger mr-4" onClick={props.handleReset}>Batal</Button>
										<Button variant="success" type="submit" onClick={props.handleSubmit}>Buat</Button>
									</Col>
								</Row>
							</Form>
						</div>
					</Forms>
				)}
			</Formik>
		</Layout >
	);
}

// export default async (req, res) => {
// 	try {
// 		const createAkunBaru = await prisma.user.create({
// 			data:
// 			{
// 				nama_akun: Form.nama_akun,
// 				kode_akun: Form.kode_akun,
// 				kategori_akun: Form.kategori_akun,
// 				detail: Form.detail,
// 				deskripsi: Form.deskripsi,
// 			},
// 		})

// 		res.status(200).json({ message: 'success!', data: createAkunBaru })
// 	} catch (error) {
// 		res.status(400).json({ nama_akun: 'error', error })
// 	}
// }
