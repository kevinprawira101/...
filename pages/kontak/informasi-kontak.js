import React from 'react';
import Layout from '../../components/Layout';
import { Form, FormControl, Row, Col, Button, Card, Tabs, Tab, InputGroup } from 'react-bootstrap';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

export default function InformasiKontak () {
	return (
		<Layout>
			<div>
				<h4 class="text-gray-500">Kontak</h4>
				<h3 class="text-blue-600">Informasi Kontak</h3>
				<hr />
				<Card>
					<Card.Body>
						<Row>
							<Col>
								<h4>Nama Kontak</h4>
							</Col>
							<Col className="d-flex justify-content-end">
								<Link href="/kontak/ubah-kontak">
									<Button variant="primary">Ubah Profil</Button>
								</Link>
							</Col>
						</Row>
						<p>Tipe : </p>

						<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
							<Tab eventKey="profil" title="Profil" />
							<Tab eventKey="transaksi" title="Transaksi" />

							<div eventKey="profil">
								<div class="mt-8">
									{/* Informasi Umum */}
									<Card className="mb-4">
										<Card.Body>
											<Row>
												<BusinessCenterOutlinedIcon fontSize="large" />
												<h3>Informasi Umum</h3>
											</Row>
											<hr />
											<Row>
												<Col>
													<p class="text-lg font-medium">Nama Kontak</p>
													<p>John Smith</p>

													<p class="text-lg font-medium">Nama Perushaan</p>
													<p>PT. Hexaon MitrasIndo</p>

													<p class="text-lg font-medium">Email</p>
													<p>hexoanmitrasindo@gmail.com</p>

													<p class="text-lg font-medium">Handphone</p>
													<p>+62 81212345678</p>
												</Col>

												<Col>
													<p class="text-lg font-medium">Telepon</p>
													<p>021-1234-5678</p>

													<p class="text-lg font-medium">Fax</p>
													<p>-</p>

													<p class="text-lg font-medium">Alamat Pembayaran</p>
													<p>-</p>

													<p class="text-lg font-medium">Alamat Pengiriman</p>
													<p>-</p>
												</Col>

												<Col>
													<p class="text-lg font-medium">NPWP</p>
													<p>09.254.294.3-407.000</p>

													<p class="text-lg font-medium">Identitas</p>
													<p>KTP</p>

													<p class="text-lg font-medium">Identitas</p>
													<p>1234 5678 9087</p>

													<p class="text-lg font-medium">Info Lain</p>
													<p>-</p>
												</Col>
											</Row>
										</Card.Body>
									</Card>

									{/* Akun Bank */}
									<Card className="mb-4">
										<Card.Body>
											<Row>
												<AccountBalanceOutlinedIcon fontSize="large" />
												<h3>Akun Bank</h3>
											</Row>
											<hr />
											<Row>
												<Col>
													<Row>
														<Col>
															<p class="text-lg font-medium">Nama Bank</p>
															<p>Bank Central Asia</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Kantor Cabang Bank</p>
															<p>Central Park</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Pemegang Akun Bank</p>
															<p>PT. Hexaon Mitrasindo</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Nomor Rekening</p>
															<p>7351498815</p>
														</Col>
													</Row>
													<hr />
													<Row>
														<Col>
															<p class="text-lg font-medium">Nama Bank</p>
															<p>Mandiri</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Kantor Cabang Bank</p>
															<p>Central Park</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Pemegang Akun Bank</p>
															<p>PT. Hexaon Mitrasindo</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Nomor Rekening</p>
															<p>1234567890</p>
														</Col>
													</Row>
													<hr />
													<Row>
														<Col>
															<p class="text-lg font-medium">Nama Bank</p>
															<p>BTPN</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Kantor Cabang Bank</p>
															<p>Central Park</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Pemegang Akun Bank</p>
															<p>PT. Hexaon Mitrasindo</p>
														</Col>
														<Col>
															<p class="text-lg font-medium">Nomor Rekening</p>
															<p>56781239</p>
														</Col>
													</Row>
												</Col>
											</Row>
										</Card.Body>
									</Card>

									{/* Pemetaan Akun */}
									<Card className="mb-4">
										<Card.Body>
											<Row>
												<InsertDriveFileOutlinedIcon fontSize="large" />
												<h3>Pemetaan Akun</h3>
											</Row>
											<hr />

											<Col>
												<p class="text-lg font-medium">Akun Piutang</p>
												<p>-</p>
												<p class="text-lg font-medium">Akun Hutang</p>
												<p>-</p>
												<p class="text-lg font-medium">Syarat Pembayaran Utama</p>
												<p>-</p>
											</Col>
										</Card.Body>
									</Card>
								</div>
							</div>

							<div eventKey="transaksi">
								<div class="mt-8">
									<Card>
										<Card.Body>
											<div class="flex flex-row-reverse mb-2">
												<Form.Group as={Row}>
													<Col sm="12">
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
											<div class="mt-2">
												<table class="min-w-full table-auto">
													<thead class="justify-between">
														<tr class="bg-dark">
															<th class="px-2 py-2">
																<span class="text-gray-300">Tanggal</span>
															</th>
															<th class="px-2 py-2">
																<span class="text-gray-300">Nomor</span>
															</th>
															<th class="px-2 py-2">
																<span class="text-gray-300">Tanggal Jatuh Tempo</span>
															</th>
															<th class="px-2 py-2">
																<span class="text-gray-300">Status</span>
															</th>
															<th class="px-2 py-2">
																<span class="text-gray-300">Jumlah</span>
															</th>
														</tr>
													</thead>
													<tbody class="bg-white divide-y divide-gray-200">
														<tr>
															<td class="px-2 py-2 whitespace-nowrap">
																<div class="text-sm text-gray-900">3/23/2021</div>
															</td>
															<td class="px-2 py-2 whitespace-nowrap">
																<div class="text-sm text-gray-900">000001</div>
															</td>
															<td class="px-2 py-2 whitespace-nowrap">
																<div class="text-sm text-gray-900">3/29/2021</div>
															</td>
															<td class="px-2 py-2 whitespace-nowrap">
																<div class="text-sm text-gray-900">Pending</div>
															</td>
															<td class="px-2 py-2 whitespace-nowrap">
																<div class="text-sm text-gray-900">Rp. 335,340,000</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</Card.Body>
									</Card>
								</div>
							</div>
						</Tabs>
					</Card.Body>
				</Card>
			</div>
		</Layout>
	);
}
