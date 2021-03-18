import React from 'react';
import Layout from '../../components/Layout';
import { Button, Table } from 'react-bootstrap';

export default function AturSaldoAwal () {
	return (
		<Layout>
			<div variant="container">
				<h1>Saldo Awal</h1>
				<h4>Tanggal Konversi</h4>

				<Table class="table">
					<thead class="thead-light">
						<tr>
							<th scope="col">Akun</th>
							<th scope="col" />
							<th scope="col">Debit</th>
							<th scope="col">Kredit</th>
						</tr>
					</thead>
					<tbody>
						<td>Aset</td>
						<tr>
							<td>1-10001</td>
							<td>Cash</td>
							<td>Rp. 0,00</td>
							<td class="text-muted">Rp. 0,00</td>
						</tr>
						<tr>
							<td>1-10002</td>
							<td>Bank Account</td>
							<td>Rp. 0,00</td>
							<td class="text-muted">Rp. 0,00</td>
						</tr>
						<tr>
							<td>1-10751</td>
							<td>Accumalted Depreciation - Building</td>
							<td class="text-muted">Rp. 0,00</td>
							<td>Rp. 0,00</td>
						</tr>

						<tr>
							<td>
								<div class="text-md font-medium text-gray-900">Total</div>
							</td>
							<td>
								<div class="text-md text-gray-900" />
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</Table>

				<div>
					<Button variant="secondary">Reset</Button>
					<div className="float-right">
						<Button variant="danger mr-4">Batal</Button>
						<Button variant="success">Terbitkan</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
