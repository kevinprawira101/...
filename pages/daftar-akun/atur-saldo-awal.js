import React from 'react';
import Layout from '../../components/Layout';
import { Button, Table, Input, Form, Col } from 'react-bootstrap';

export default function AturSaldoAwal () {
	return (
		<Layout>
			<div variant="container">
				<h1>Saldo Awal</h1>

				<div class="mt-12">
					<h4>Tanggal Konversi</h4>
					<input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm grid-cols-12" />
					<Table class="min-w-full table-auto" hover size="sm">
						<thead class="justify-between ">
							<tr class="bg-dark">
								<th class="px-4 py-2">
									<span class="text-gray-300">Akun</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300" />
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Debit</span>
								</th>

								<th class="px-2 py-2">
									<span class="text-gray-300">Kredit</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">Aset</div>
										</div>
									</div>
								</td>
							</tr>

							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900 ">1-10001</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Cash</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
							</tr>

							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">1-10002</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Bank Account</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
							</tr>

							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">1-10751</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Accumulated Depreciation - Building</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
							</tr>

							<tr class="bg-gray-200 ">
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="flex items-center">
										<div>
											<div class="text-sm font-medium text-gray-900">Total</div>
										</div>
									</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900" />
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">Rp. 0,00</div>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<div class="mt-4">
					<Button variant="secondary">Reset</Button>
					<div className="float-right">
						<Button variant="danger mr-2">Batal</Button>
						<Button variant="success">Terbitkan</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
