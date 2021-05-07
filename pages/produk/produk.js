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
	Row,
	FormCheck
} from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

export default function Produk() {
	return (
		<Layout>
			<Row>
				<Col>
					<h2>Produk</h2>
				</Col>
				<Col className="d-flex justify-content-end">
					<SettingsIcon fontSize="Large" />
					<h4 class="mr-4">Kategori Produk</h4>
					<Link href="/produk/buat-produk">
						<Button variant="primary">
							<AddIcon fontSize="small" />Buat Baru
						</Button>
					</Link>
				</Col>
			</Row>

			<hr />
			<div>
				<Card>
					<Card.Body>
						<Row>
							<Col>
								<Row>
									<SettingsIcon fontSize="medium" className="mt-1" />
									<h4>Barang & Jasa</h4>
								</Row>
							</Col>

							<Col className="d-flex justify-content-end">
								<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Ekspor">
									<Dropdown.Item>
										<a>Excel</a>
									</Dropdown.Item>
									<Dropdown.Item>
										<a>Hapus</a>
									</Dropdown.Item>
								</DropdownButton>
								<Col sm="6">
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
							</Col>
						</Row>

						<div class="mt-2">
							<table class="min-w-full table-auto">
								<thead class="justify-between">
									<tr class="bg-dark">
										<th class="px-2 py-2">
											<FormCheck />
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Kode Produk</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Nama Produk</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Qty</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Batas Minimum</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Unit</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Harga rata-rata</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Harga Beli Terakhir</span>
										</th>
										<th class="px-2 py-2">
											<span class="text-gray-300">Harga beli</span>
										</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									<tr>
										<th class="px-2 py-2">
											<FormCheck />
										</th>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">RI001</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">Rinso</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">69</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">30</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">-</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">Rp. 34,000</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">Rp. 20,000</div>
										</td>
										<td class="px-2 py-2 whitespace-nowrap">
											<div class="text-sm text-gray-900">Rp. 28,000</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Layout>
	);
}
