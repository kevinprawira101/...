import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
	Tabs,
	Tab,
	Card,
	Button,
	DropdownButton,
	Dropdown,
	InputGroup,
	FormControl,
	Form,
	Col,
	Row
} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

export default function Kontak () {
	return (
		<Layout>
			<div variant="container">
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<Tab eventKey="pelanggan" title="Pelanggan" />
					<Tab eventKey="supplier" title="Supplier" />
					<Tab eventKey="karyawan" title="Karyawan" />
					<Tab eventKey="lainnya" title="Lainnya" />

					<div eventKey="pelanggan">
						<div class="mt-8">
							<div class="flex flex-row-reverse mb-2">
								<Form.Group as={Row}>
									<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
										<Dropdown.Item>
											<a>Excel</a>
										</Dropdown.Item>
										<Dropdown.Item>
											<a>Hapus</a>
										</Dropdown.Item>
									</DropdownButton>
									<Col sm="8">
										<InputGroup>
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													<SearchIcon />
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												placeholder="cari"
												aria-label="cari"
												aria-describedby="basic-addon1"
											/>
										</InputGroup>
									</Col>
								</Form.Group>
							</div>

							<Card>
								<Card.Body>
									<h1>Trial Balance</h1>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="supplier">
						<div class="mt-8">
							<div class="flex flex-row-reverse mb-2">
								<Button variant="primary">Cetak</Button>
							</div>
							<Card>
								<Card.Body>
									<h1>Laba - Rugi</h1>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="karyawan">
						<div class="mt-8">
							<div class="flex flex-row-reverse mb-2">
								<Button variant="primary">Cetak</Button>
							</div>
							<Card>
								<Card.Body>
									<h1>Neraca</h1>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div eventKey="lainnya">
						<div class="mt-8">
							<div class="flex flex-row-reverse mb-2">
								<Button variant="primary">Cetak</Button>
							</div>
							<Card>
								<Card.Body>
									<h1>Arus Kas</h1>
								</Card.Body>
							</Card>
						</div>
					</div>
				</Tabs>

				<div class="float-right mt-8">
					<Button variant="danger mr-2">Kembali</Button>
					<Link href="/daftar-akun/tutup-buku-berhasil">
						<Button variant="success">Konfirmasi Tutup Buku</Button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}
