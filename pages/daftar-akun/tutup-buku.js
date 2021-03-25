import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Button, Row, Col } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';

export default function TutupBuku () {
	return (
		<Layout>
			<div variant="container">
				<Row>
					<Col>
						<h3>Tutup Buku</h3>
					</Col>
					<Col className="d-flex justify-content-end">
						<Link href="/daftar-akun/periode-finansial">
							<Button>
								<AddIcon fontSize="small" />Mulai Tutup Buku
							</Button>
						</Link>
					</Col>
				</Row>

				<div class="mt-2">
					<table class="min-w-full table-auto">
						<thead class="justify-between">
							<tr class="bg-dark">
								<th class="px-2 py-2">
									<span class="text-gray-300">Periode</span>
								</th>
								<th class="px-48 py-2">
									<span class="text-gray-300">Catatan</span>
								</th>
								<th class="px-2 py-2">
									<span class="text-gray-300">Keuntungan Bersih/(Rugi)</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr>
								<td class="px-2 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">Dari awal - DD/MM/YYYY</div>
								</td>
								<td class="px-48 py-2 whitespace-nowrap">
									<div class="text-sm text-gray-900">-</div>
								</td>
								<td class="px-2 py-2 whitespace-nowrap font-medium">
									<div class="text-sm text-gray-900">XXX.XXX</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
}
