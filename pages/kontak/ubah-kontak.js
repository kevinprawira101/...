import React from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col, FormCheck, Button, Card } from 'react-bootstrap';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';

export default function UbahKontak () {
	return (
		<Layout>
			<div>
				<h4 class="text-gray-500">Kontak</h4>
				<h3 class="text-blue-600">Ubah Kontak</h3>
				<hr />
				<Card>
					<Card.Body>
						<Form>
							{/* Info Kontak */}
							<Row className="mb-2">
								<PersonOutlineOutlinedIcon fontSize="large" />
								<h3>Info Kontak</h3>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Panggilan</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="First name" />
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
										<Col>
											<Form.Control as="select" defaultValue="Choose...">
												<option>(Kosong)</option>
												<option>Mr. </option>
												<option>Ms. </option>
												<option>Mrs. </option>
											</Form.Control>
										</Col>
										<Col>
											<Form.Control placeholder="Nama Awal" />
										</Col>
										<Col>
											<Form.Control placeholder="Nama Awal" />
										</Col>
										<Col>
											<Form.Control placeholder="Nama Awal" />
										</Col>
									</Row>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Handphone</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Handphone" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Identitas</Form.Label>
								</Col>
								<Col sm="10">
									<Row>
										<Col>
											<Form.Control as="select" defaultValue="Choose...">
												<option>Pilih</option>
												<option>Passport</option>
												<option>KTP</option>
												<option>SIM</option>
												<option>BPJS</option>
											</Form.Control>
										</Col>
										<Col>
											<Form.Control placeholder="Handphone" />
										</Col>
									</Row>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Email</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Email" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Info Lain</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Info Lain" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nama Perusahaan</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Perusahaan" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Telepon</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Telepon" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Fax</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Fax" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>NPWP</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="NPWP" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Alamat Pembayaran</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Alamat Pembayaran" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Alamat Pengiriman</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Alamat Pengiriman" />
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
									<Form.Control placeholder="Nama Bank" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Kantor Cabang Bank</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Kantor Cabang Bank" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Pemegang Akun Bank</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Pemegang Akun Bank" />
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Nomor Rekening</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control placeholder="Nomor Rekening" />
								</Col>
								<Col sm="12">
									<Button className="mb-2 mt-4" variant="outline-primary" block>
										<AddIcon fontSize="small" />Tambah Bank Lain
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
									<Form.Control as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Akun Hutang</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							<Row className="mb-2">
								<Col sm="2">
									<Form.Label>Syarat Pembayaran Utama</Form.Label>
								</Col>
								<Col sm="10">
									<Form.Control as="select" defaultValue="Choose...">
										<option>Pilih</option>
										<option>1</option>
										<option>2</option>
									</Form.Control>
								</Col>
							</Row>

							<Row>
								<Col className="d-flex justify-content-end mt-10">
									<Button variant="danger mr-2">Batal</Button>
									<Link href="/kontak/informasi-kontak">
										<Button variant="success">Simpan</Button>
									</Link>
								</Col>
							</Row>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</Layout>
	);
}
