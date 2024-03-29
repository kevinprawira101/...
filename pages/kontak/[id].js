import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, FormCheck, Button, Card } from 'react-bootstrap';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { Formik, Form as Forms } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

<<<<<<< HEAD

export default function BuatKontakBaru({data}) {
		
	const BuatKontakBaruSchema = Yup.object().shape({
		nama_panggilan: Yup.string().required('*Required'),
		nama_awalkontak: Yup.string().required('*Required'),
		no_hp: Yup.string().required('*Required'),
		no_hp: Yup.string().required('*Required'),
		no_id: Yup.string().required('*Required'),
		nama_perusahaan: Yup.string().required('*Required'),
		email: Yup.string().required('*Required'),
		no_telp: Yup.string().required('*Required'),
		no_fax: Yup.string().required('*Required'),
		no_npwp: Yup.string().required('*Required'),
		alamat_pembayaran: Yup.string().required('*Required'),
		alamat_pengiriman: Yup.string().required('*Required'),
		nama_bank: Yup.string().required('*Required'),
		kantor_cabang: Yup.string().required('*Required'),
		pemegang_akunbank: Yup.string().required('*Required'),
		no_rek: Yup.string().required('*Required'),
=======
export default function BuatKontakBaru({ data, data2 }) {
	// Form validation
	const KontakSchema = Yup.object().shape({
		namaPanggilan: Yup.string().min(4).required('*required'),
		nama: Yup.string().min(4).required('*required'),
		nomorHp: Yup.number().required('*required'),
		nomorIdentitas: Yup.string().required('*required'),
		email: Yup.string().min(5).email().required('*required'),
		infoLain: Yup.string().min(1).required('*required'),
		namaPerusahaan: Yup.string().min(5).required('*required'),
		nomorTelepon: Yup.number().min(1).required('*required'),
		nomorFax: Yup.number().min(1).required('*required'),
		nomorNpwp: Yup.number().min(15).required('*required'),
		alamatPembayaran: Yup.string().min(10).required('*required'),
		alamatPengiriman: Yup.string().min(10).required('*required'),
		namaBank: Yup.string().min(3).required('*required'),
		kantorCabangBank: Yup.string().min(3).required('*required'),
		pemegangAkunBank: Yup.string().min(3).required('*required'),
		nomorRekening: Yup.number().min(8).required('*required'),
>>>>>>> e9d5b93f777e6450fb5d804f5573001bb925498e
	});

	//Kontak API
	const getkontak = 'http://localhost:3000/api/kontak/getKontak';
	const updatekontak = 'http://localhost:3000/api/kontak/updateKontak';

	//Take Parameter [ID]
	const router = useRouter();
	const { id } = router.query

	// Get Existing Role data based on [id]
<<<<<<< HEAD
    const formikref = useRef(null)
    const getdata = async () => {
        Axios.post(getkontak, {

            id: id

        }).then(function (response) {
            formikref.current.setFieldValue('nama_panggilan', response.data.data.nama_panggilan)
            formikref.current.setFieldValue('gelar', response.data.data.gelar)
			formikref.current.setFieldValue('nama_awalkontak', response.data.data.nama_awalkontak)
            formikref.current.setFieldValue('no_hp', response.data.data.no_hp)
			formikref.current.setFieldValue('kartu_identitas', response.data.data.kartu_identitas)
            formikref.current.setFieldValue('no_id', response.data.data.no_id)
			formikref.current.setFieldValue('email', response.data.data.email)
            formikref.current.setFieldValue('nama_perusahaan', response.data.data.nama_perusahaan)
			formikref.current.setFieldValue('no_telp', response.data.data.no_telp)
            formikref.current.setFieldValue('no_fax', response.data.data.no_fax)
			formikref.current.setFieldValue('no_npwp', response.data.data.no_npwp)
            formikref.current.setFieldValue('alamat_pembayaran', response.data.data.alamat_pembayaran)
			formikref.current.setFieldValue('alamat_pengiriman', response.data.data.alamat_pengiriman)
            formikref.current.setFieldValue('nama_bank', response.data.data.nama_bank)
			formikref.current.setFieldValue('kantor_cabang', response.data.data.kantor_cabang)
            formikref.current.setFieldValue('pemegang_akunbank', response.data.data.pemegang_akunbank)
			formikref.current.setFieldValue('no_rek', response.data.data.no_rek)
        }).
            catch(function (error) {
                console.log(error)
            })
    };
    useEffect(() => {
        getdata()
    }, [])

    // Batal Button Function
    function cancelButton() {
        router.push('')
    }

=======
	const formikref = useRef(null)
	const getdata = async () => {
		Axios.post(getkontak, {

			id: id

		}).then(function (response) {
			formikref.current.setFieldValue('namaPanggilan', response.data.data.nama_panggilan)
			formikref.current.setFieldValue('nama', response.data.data.nama)
			formikref.current.setFieldValue('nomorHp', response.data.data.nomor_hp)
			formikref.current.setFieldValue('nomorIdentitas', response.data.data.nomor_identitas)
			formikref.current.setFieldValue('email', response.data.data.email)
			formikref.current.setFieldValue('infoLain', response.data.data.info_lain)
			formikref.current.setFieldValue('namaPerusahaan', response.data.data.nama_perusahaan)
			formikref.current.setFieldValue('nomorTelepon', response.data.data.nomor_telepon)
			formikref.current.setFieldValue('nomorFax', response.data.data.nomor_fax)
			formikref.current.setFieldValue('nomorNpwp', response.data.data.nomor_npwp)
			formikref.current.setFieldValue('alamatPembayaran', response.data.data.alamat_pembayaran)
			formikref.current.setFieldValue('alamatPengiriman', response.data.data.alamat_pengiriman)
			formikref.current.setFieldValue('namaBank', response.data.data.nama_bank)
			formikref.current.setFieldValue('kantorCabangBank', response.data.data.kantor_cabang_bank)
			formikref.current.setFieldValue('pemegangAkunBank', response.data.data.pemegang_akun_bank)
			formikref.current.setFieldValue('nomorRekening', response.data.data.nomor_rekening)
		}).
			catch(function (error) {
				console.log(error)
			})
	};
	useEffect(() => {
		getdata()
	}, [])

	// Batal Button Function
	function cancelButton() {
		router.push('')
	}

>>>>>>> e9d5b93f777e6450fb5d804f5573001bb925498e
	return (
		<Layout>
			<Formik
				innerRef={formikref}
				initialValues={{
<<<<<<< HEAD
				nama_panggilan: '',
				gelar: '',
				nama_awalkontak: '',
				no_hp: '',
				kartu_identitas: '',
				no_id: '',
				email: '',
				nama_perusahaan: '',
				no_telp: '',
				no_fax: '',
				no_npwp: '',
				alamat_pembayaran: '',
				alamat_pengiriman: '',
				nama_bank: '',
				kantor_cabang: '',
				pemegang_akunbank: '',
				no_rek: '',
				akunPiutang: '',
				akunHutang: '',
				pembayaran_utama: '',
=======
					namaPanggilan: '',
					gelar: '',
					nama: '',
					nomorHp: '',
					tipeIdentitas: '',
					nomorIdentitas: '',
					email: '',
					infoLain: '',
					namaPerusahaan: '',
					nomorTelepon: '',
					nomorFax: '',
					nomorNpwp: '',
					alamatPembayaran: '',
					alamatPengiriman: '',
					namaBank: '',
					kantorCabangBank: '',
					pemegangAkunBank: '',
					nomorRekening: '',
					akunPiutang: '',
					akunHutang: '',
					syaratPembayaranUtama: '',
>>>>>>> e9d5b93f777e6450fb5d804f5573001bb925498e
				}}
				validationSchema={KontakSchema}
				onSubmit={async (values) => {
					let data = { ...values, id }
					Axios.post(updatekontak, data).
						then(function (response) {
							console.log(response)
							router.push('../kontak/tabel-kontak')

						}).
						catch(function (error) {
							console.log(error)

						})
				}}
			>
				{(props) => (
					<Forms noValidate>
<<<<<<< HEAD
			<div>
				<h4>Kontak</h4>
				<h3>Edit Kontak</h3>
				<hr />
				<Card>
					<Card.Body>
						<Form>
							{/* Info Kontak */}
							<Row className="mb-2">
								<PersonOutlineOutlinedIcon fontSize="medium" className="mt-1.5" />
								<h3>Info Kontak</h3>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Panggilan</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.nama_panggilan} type="text" name="nama_panggilan" onChange={props.handleChange} onBLur={props.handleBlur} />
								{props.errors.nama_panggilan && props.touched.nama_panggilan ? <div class="text-red-500 text-sm">{props.errors.nama_panggilan}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Tipe Kontak (dapat lebih dari 1)</Form.Label>
								</Col>
								<Col sm="10" class="ml-8">
									<Row>
										<FormCheck />
										<p class="ml-2 mr-4">Pelanggan</p>
										<FormCheck />
										<p class="ml-2 mr-4">Supplier</p>
										<FormCheck />
										<p class="ml-2 mr-4">Karyawan</p>
										<FormCheck />
										<p class="ml-2 mr-4">Lainnya</p>
									</Row>
								</Col>
							</Row>

							{/* Info Kontak */}
							<Row className="mb-2">
								<BusinessCenterOutlinedIcon fontSize="large" />
								<h3>Informasi Umum</h3>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Kontak</Form.Label>
								</Col>
								<Col sm="10">
									<Row>
										<Col sm="3">
											<Form.Control as="select" defaultValue="Choose..." name="gelar" onChange={props.handleChange} onBLur={props.handleBlur}>
												<option disabled>(Kosong)</option>
												<option value="Mr.">Mr. </option>
												<option value="Ms.">Ms. </option>
												<option value="Mrs.">Mrs. </option>
											</Form.Control>
										</Col>
										<Col>
											<Form.Control placeholder={props.values.nama_awalkontak} type="text" name="nama_awalkontak" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.nama_awalkontak && props.touched.nama_awalkontak ? <div class="text-red-500 text-sm">{props.errors.nama_awalkontak}</div> : null}
										</Col>
									</Row>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Handphone</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.no_hp} type="text" name="no_hp" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.no_hp && props.touched.no_hp ? <div class="text-red-500 text-sm">{props.errors.no_hp}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Identitas</Form.Label>
								</Col>
								<Col sm="10">
									<Row>
										<Col>
											<Form.Control as="select" defaultValue="Choose..." name="kartu_identitas" onChange={props.handleChange} onBLur={props.handleBlur}>
												<option disabled>Pilih</option>
												<option value="Passport">Passport</option>
												<option value="KTP">KTP</option>
												<option value="SIM">SIM</option>
												<option value="BPJS">BPJS</option>
											</Form.Control>
										</Col>
										<Col>
										<Form.Control placeholder={props.values.no_id} type="text" name="no_id" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.no_id && props.touched.no_id ? <div class="text-red-500 text-sm">{props.errors.no_id}</div> : null}
										</Col>
									</Row>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Email</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.email} type="email" name="email" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.email && props.touched.email ? <div class="text-red-500 text-sm">{props.errors.email}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Info Lain</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.info_lain} type="text" name="infolain" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.infolain && props.touched.infolain ? <div class="text-red-500 text-sm">{props.errors.infolain}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Perusahaan</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.nama_perusahaan} type="text" name="nama_perusahaan" onChange={props.handleChange} onBLur={props.handleBlur} />
									{props.errors.nama_perusahaan && props.touched.nama_perusahaan ? <div class="text-red-500 text-sm">{props.errors.nama_perusahaan}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Telepon</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.no_telp} type="text" name="no_telp" onChange={props.handleChange} onBLur={props.handleBlur} />
									{props.errors.no_telp && props.touched.no_telp ? <div class="text-red-500 text-sm">{props.errors.no_telp}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Fax</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.no_fax} type="text" name="no_fax" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.no_fax && props.touched.no_fax ? <div class="text-red-500 text-sm">{props.errors.no_fax}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>NPWP</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.no_npwp} type="text" name="no_npwp" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.no_npwp && props.touched.no_npwp ? <div class="text-red-500 text-sm">{props.errors.npwp}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Alamat Pembayaran</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.alamat_pembayaran} type="text" name="alamat_pembayaran" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.alamat_pembayaran && props.touched.alamat_pembayaran ? <div class="text-red-500 text-sm">{props.errors.alamat_pembayaran}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Alamat Pengiriman</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.alamat_pengiriman} type="text" name="alamat_pengiriman" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.alamat_pengiriman && props.touched.alamat_pengiriman ? <div class="text-red-500 text-sm">{props.errors.alamat_pengiriman}</div> : null}
								</Col>
							</Row>

							{/* Daftar Bank */}
							<Row className="mb-2">
								<AccountBalanceOutlinedIcon fontSize="large" />
								<h3>Daftar Bank</h3>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<h5>Akun Bank</h5>
								</Col>
								<Col className="d-flex justify-content-end mr-3">
									<Row>
										<DeleteIcon fontSize="medium" />
										<h5>Hapus</h5>
									</Row>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Bank</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.nama_bank} type="text" name="nama_bank" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.nama_bank && props.touched.nama_bank ? <div class="text-red-500 text-sm">{props.errors.nama_bank}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Kantor Cabang Bank</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.kantor_cabang} type="text" name="kantor_cabang" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.kantor_cabang && props.touched.kantor_cabang ? <div class="text-red-500 text-sm">{props.errors.kantor_cabang}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Pemegang Akun Bank</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.pemegang_akunbank} type="text" name="pemegang_akunbank" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.pemegang_akunbank && props.touched.pemegang_akunbank ? <div class="text-red-500 text-sm">{props.errors.pemegang_akunbank}</div> : null}
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nomor Rekening</Form.Label>
								</Col>
								<Col sm="10">
								<Form.Control placeholder={props.values.no_rek} type="text" name="no_rek" onChange={props.handleChange} onBLur={props.handleBlur} />
											{props.errors.no_rek && props.touched.no_rek ? <div class="text-red-500 text-sm">{props.errors.no_rek}</div> : null}
								</Col>
								<Col sm="12">
									<Button className="mb-2 mt-4" variant="outline-primary" block>
										<AddIcon fontSize="small" />Tambah Bank Lain
=======
						<div>
							<h4>Kontak</h4>
							<h3>Edit Kontak</h3>
							<hr />
							<Card>
								<Card.Body>
									<Form>
										{/* Info Kontak */}
										<Row className="mb-2">
											<PersonOutlineOutlinedIcon fontSize="medium" className="mt-1.5" />
											<h3>Info Kontak</h3>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Nama Panggilan</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.namaPanggilan} type="text" name="namaPanggilan" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.namaPanggilan && props.touched.namaPanggilan ?
													<div class="text-red-500 text-sm">
														{props.errors.namaPanggilan}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Tipe Kontak (dapat lebih dari 1)</Form.Label>
											</Col>
											<Col sm="10" class="ml-8">
												<Row>
													<FormCheck />
													<p class="ml-2 mr-4" value="1">Pelanggan</p>
													<FormCheck />
													<p class="ml-2 mr-4" value="2">Supplier</p>
													<FormCheck />
													<p class="ml-2 mr-4" value="3">Karyawan</p>
													<FormCheck />
													<p class="ml-2 mr-4" value="4">Lainnya</p>
												</Row>
											</Col>
										</Row>

										{/* Info Kontak */}
										<Row className="mb-2">
											<BusinessCenterOutlinedIcon fontSize="large" />
											<h3>Informasi Umum</h3>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Nama Kontak</Form.Label>
											</Col>
											<Col sm="10">
												<Row>
													<Col sm="2">
														<Form.Control as="select" defaultValue="Choose..." name="gelar" onChange={props.handleChange} onBLur={props.handleBlur}>
															<option disabled>(Kosong)</option>
															<option value="Mr.">Mr. </option>
															<option value="Ms.">Ms. </option>
															<option value="Mrs.">Mrs. </option>
														</Form.Control>
													</Col>
													<Col>
														<Form.Control placeholder={props.values.nama} type="text" name="nama" onChange={props.handleChange} onBLur={props.handleBlur} />
														{props.errors.nama && props.touched.nama ?
															<div class="text-red-500 text-sm">
																{props.errors.nama}
															</div>
															: null}
													</Col>
												</Row>
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Handphone</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.nomorHp} type="text" name="nomorHp" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.nomorHp && props.touched.nomorHp ?
													<div class="text-red-500 text-sm">
														{props.errors.nomorHp}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Identitas</Form.Label>
											</Col>
											<Col >
												<Row>
													<Col sm="2">
														<Form.Control as="select" defaultValue="Choose..." name="tipeIdentitas" onChange={props.handleChange} onBLur={props.handleBlur}>
															<option disabled>Pilih</option>
															<option value="Passport">Passport</option>
															<option value="KTP">KTP</option>
															<option value="SIM">SIM</option>
															<option value="BPJS">BPJS</option>
														</Form.Control>
													</Col>
													<Col>
														<Form.Control placeholder={props.values.nomorIdentitas} type="text" name="nomorIdentitas" onChange={props.handleChange} onBLur={props.handleBlur} />
														{props.errors.nomorIdentitas && props.touched.nomorIdentitas ?
															<div class="text-red-500 text-sm">
																{props.errors.nomorIdentitas}
															</div>
															: null}
													</Col>
												</Row>
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Email</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder="Email" type={props.values.email} name="email" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.email && props.touched.email ?
													<div class="text-red-500 text-sm">
														{props.errors.email}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Info Lain</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.infoLain} type="text" name="infoLain" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.infoLain && props.touched.infoLain ?
													<div class="text-red-500 text-sm">
														{props.errors.infoLain}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Nama Perusahaan</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.namaPerusahaan} type="text" name="namaPerusahaan" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.namaPerusahaan && props.touched.namaPerusahaan ?
													<div class="text-red-500 text-sm">
														{props.errors.namaPerusahaan}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Telepon</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.nomorTelepon} type="text" name="nomorTelepon" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.nomorTelepon && props.touched.nomorTelepon ?
													<div class="text-red-500 text-sm">
														{props.errors.nomorTelepon}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Fax</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder="Fax" type={props.values.nomorFax} name="nomorFax" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.nomorFax && props.touched.nomorFax ?
													<div class="text-red-500 text-sm">
														{props.errors.nomorFax}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>NPWP</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder="NPWP" type={props.values.nomorNpwp} name="nomorNpwp" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.nomorNpwp && props.touched.nomorNpwp ?
													<div class="text-red-500 text-sm">
														{props.errors.npwp}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Alamat Pembayaran</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.alamatPembayaran} type="text" name="alamatPembayaran" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.alamatPembayaran && props.touched.alamatPembayaran ?
													<div class="text-red-500 text-sm">
														{props.errors.alamatPembayaran}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Alamat Pengiriman</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.alamatPengiriman} type="text" name="alamatPengiriman" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.alamatPengiriman && props.touched.alamatPengiriman ?
													<div class="text-red-500 text-sm">
														{props.errors.alamatPengiriman}
													</div>
													: null}
											</Col>
										</Row>

										{/* Daftar Bank */}
										<Row className="mb-2">
											<AccountBalanceOutlinedIcon fontSize="large" />
											<h3>Daftar Bank</h3>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<h5>Akun Bank</h5>
											</Col>
											<Col className="d-flex justify-content-end mr-3">
												<Row>
													<DeleteIcon fontSize="medium" />
													<h5>Hapus</h5>
												</Row>
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Nama Bank</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.namaBank} type="text" name="namaBank" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.namaBank && props.touched.namaBank ?
													<div class="text-red-500 text-sm">
														{props.errors.namaBank}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Kantor Cabang Bank</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.kantorCabangBank} type="text" name="kantorCabangBank" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.kantorCabangBank && props.touched.kantorCabangBank ?
													<div class="text-red-500 text-sm">
														{props.errors.kantorCabangBank}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Pemegang Akun Bank</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.pemegangAkunBank} type="text" name="pemegangAkunBank" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.pemegangAkunBank && props.touched.pemegangAkunBank ?
													<div class="text-red-500 text-sm">
														{props.errors.pemegangAkunBank}
													</div>
													: null}
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Nomor Rekening</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control placeholder={props.values.nomorRekening} type="text" name="nomorRekening" onChange={props.handleChange} onBLur={props.handleBlur} />
												{props.errors.nomorRekening && props.touched.nomorRekening ?
													<div class="text-red-500 text-sm">
														{props.errors.nomorRekening}
													</div>
													: null}
											</Col>
											<Col sm="12">
												<Button className="mb-2 mt-4" variant="outline-primary" block>
													<AddIcon fontSize="small" />Tambah Bank Lain
>>>>>>> e9d5b93f777e6450fb5d804f5573001bb925498e
									</Button>
											</Col>
										</Row>

										{/* Pemetaan Akun*/}
										<Row className="mb-2">
											<InsertDriveFileOutlinedIcon fontSize="large" />
											<h3>Pemetaan Akun</h3>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Akun Piutang</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control as="select" defaultValue="Choose..." name="akunPiutang" onChange={props.handleChange} onBLur={props.handleBlur} >
													{data.map((akunPiutang) => (
														<option key={akunPiutang.id} value={akunPiutang.id}>{akunPiutang.nama_akun}</option>
													))}
												</Form.Control>
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Akun Hutang</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control as="select" defaultValue="Choose..." name="akunHutang" onChange={props.handleChange} onBLur={props.handleBlur}>
													{data2.map((akunHutang) => (
														<option key={akunHutang.id} value={akunHutang.id}>{akunHutang.nama_akun}</option>
													))}
												</Form.Control>
											</Col>
										</Row>

										<Row className="mb-2">
											<Col sm="2">
												<Form.Label>Syarat Pembayaran Utama</Form.Label>
											</Col>
											<Col sm="10">
												<Form.Control as="select" defaultValue="Choose..." name="syaratPembayaranUtama" onChange={props.handleChange} onBLur={props.handleBlur}>
													<option>Pilih</option>
													<option value="1">Tunai / Cash</option>
													<option value="2">Kredit / Term of Payment</option>
													<option value="3">15 hari</option>
													<option value="4">30 hari</option>
													<option value="5">End of Month (EOM)</option>
												</Form.Control>
											</Col>
										</Row>

										<Row>
											<Col className="d-flex justify-content-end mt-10">
												<Button variant="danger mr-2" onClick={cancelButton}>Batal</Button>
												<Link href="/kontak/informasi-kontak">
													<Button variant="success" type="submit" onClick={props.handleSubmit}>Simpan</Button>
												</Link>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</div>
					</Forms>
				)}
			</Formik>
		</Layout>
	);
}

export async function getServerSideProps() {
	const getAkunPiutang = await prisma.akun.findMany({
		where:
		{
			kategoriId: 1
		}
	});

	const getAkunHutang = await prisma.akun.findMany({
		where:
		{
			kategoriId: 8
		}
	});

	return {
		props: {
			data: getAkunPiutang,
			data2: getAkunHutang
		}
	}
}