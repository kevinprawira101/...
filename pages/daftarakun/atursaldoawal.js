import React from 'react';
import Layout from '../../components/Layout';
import { Card, Button, Table } from 'react-bootstrap';

export default function AturSaldoAwal () {
	return (
		<Layout>
			<div variant="container">
				<h1>Saldo Awal</h1>
				<h4>Tanggal Konversi</h4>

				<table class="mt-4 min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Akun
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							/>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Debit
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Kredit
							</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						<tr>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="flex items-center">
									<div>
										<div class="text-sm font-medium text-gray-900">002</div>
										<div class="text-sm text-gray-500">1-10001</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm text-gray-900">Cash</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm text-gray-900">Rp. 0.00</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			{/* <div variant="container">
				<h1>Atur Saldo Awal</h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div> */}
		</Layout>
	);
}
