import React from 'react'
import Layout from '../../components/Layout'
import {Form,Row,Col} from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';

export default function createjurnal() {
    return (
        <Layout>
            <h1>Jurnal</h1>
            <Form>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="2">
                    No. Transaksi
                    </Form.Label>
                    <Form.Label column sm="2">
                    Tgl.Transaksi
                    </Form.Label>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Col sm="2">
                    <Form.Control type="text" placeholder="" />
                    </Col>
                    <Col sm="2">
                    <Form.Control type="text" placeholder="" />
                    </Col>
                </Form.Group>
            </Form>
            <div className='card'>
                <div className='card-body'>
                <Form>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Form.Label column sm="3">
                    Akun
                    </Form.Label>
                    <Form.Label column sm="3">
                    Deskripsi
                    </Form.Label>
                    <Form.Label column sm="3">
                    Debit
                    </Form.Label>
                    <Form.Label column sm="3">
                    Kredit
                    </Form.Label>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                    <Col sm="3">
                    <Form.Control as="select">
                        <option>Default select</option>
                    </Form.Control>
                    </Col>
                    <Col sm="3">
                    <Form.Control type="text" placeholder="" />
                    </Col>
                    <Col sm="3">
                    <Form.Control type="text" placeholder="" />
                    </Col>
                    <Col sm="3">
                    <Form.Control type="text" placeholder="" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                        <Col sm="3">
                        <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"><AddIcon fontSize="small"/> Tambah data</button>
                        </Col>
                        <Col sm="3">
                            
                        </Col>
                        <Col sm="3">
                        Total Debit <br/>
                        Rp. 0,00    
                        </Col>
                        <Col sm="3">                    
                        Total Kredit <br/>
                        Rp. 0,00
                        </Col>
                        
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintext">
                        <Col sm="3">
                        File Attachment
                        <Form.File id="custom-file" label="Browse file" custom/>
                        </Col>                       
                </Form.Group>
                </Form>
                </div>
            </div>    
            <div class="left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">  
            <button onclick="openModal(false)"class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none">Batal</button>
            <button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">Submit</button>
            </div>
            
        </Layout>
    )
}
