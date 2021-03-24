import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton , Dropdown , Row , Col, Form, Card, InputGroup,FormControl} from 'react-bootstrap';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EventNoteIcon from '@material-ui/icons/EventNote';

const kirimuang = () => {
    return (
         <div>
            <Layout>
                    <div class="container">
                    <div class="text-md font-medium text-gray-900 mb-2">
                        Transaksi</div>
                        <h4 class="mt-2 mb-5">
                            Kirim Uang
                            </h4>
            
                    <div class="mb-10">
                        <Row>
                            <Col >
                            <Form.Label>
                                Bayar dari
                                </Form.Label>
                                    <Form.Control as="select">
                                        <option>Pilih Bank Pengirim</option>
                                        <option>BCA</option>
                                        <option>BRI</option>
                                        <option>BNI</option>
                                        <option>BUKOPIN</option>
                                        <option>MANDIRI</option>
                                    </Form.Control>
                            </Col>
                            <Col></Col>
                            <Col>
                            <h3>
                                Total Amount 
                            </h3>
                            <h2 class="text-purple-700 text-opacity-100 ">Rp, 0.00</h2>
                            </Col>
                        </Row>
                    </div>
            
                    <div class="mb-10">
                        <Row>
                            <Col>
                            <Form.Label>
                                Penerima
                            </Form.Label>
                                    <Form.Control as="select">
                                        <option>Pilih Bank Penerima</option>
                                        <option>BCA</option>
                                        <option>BRI</option>
                                    </Form.Control>
                            </Col>
                            
                            <Col>
                            <Form.Label>
                                Tanggal Transaksi
                            </Form.Label>
                            <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text >
                                        <EventNoteIcon/>
                                    </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                    placeholder="Pick date"
                                    aria-label="date"
                                    />
                                </InputGroup>
                           
                        
                            </Col>
                            
                            <Col> 
                            <Form.Label>
                                Nomor Transaksi
                            </Form.Label>
                            <Form.Control placeholder="ID" />
                            </Col>
            
                        </Row>
            
                    <div class="float-right mt-2 mb-8">
                            <Form.Check
                                label="Harga Termasuk Pajak" 
                                type="switch"
                                id="custom-switch"
                                
                            />
                            </div>
                            
                    </div>
            
                    <div class="mb-12">
                    <Table class="table mt-4">
                                <thead class="thead-light">
                                    <tr>
                                        <th class="text-center" scope="col">Pembayaran Untuk Akun</th>
                                        <th class="text-center" scope="col">Deskripsi</th>
                                        <th class="text-center" scope="col">Pajak</th>
                                        <th class="text-center" scope="col">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> 
                                            <Form.Control as="select">
                                                <option>Pilih 1</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control placeholder="Isi Deskripsi" />    
                                        </td>   
                                        <td>
                                            <Form.Control as="select">
                                                <option>Pilih 1</option>
                                            </Form.Control>
                                        </td>
                                        <td> 
                                            <Form.Control placeholder="Input Jumlah" />  
                                        </td>
                                    </tr>
            
                                    <tr>
                                        <td> 
                                            <Form.Control as="select">
                                                <option>Pilih 1</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control placeholder="Isi Deskripsi" />    
                                        </td>   
                                        <td>
                                            <Form.Control as="select">
                                                <option>Pilih 1</option>
                                            </Form.Control>
                                        </td>
                                        <td> 
                                            <Form.Control placeholder="Input Jumlah" />  
                                        </td>
                                    </tr>
                                
                                </tbody>
                            </Table>
                            <Button variant="primary ml-2"><PlaylistAddIcon fontSize="medium"/> Tambah Data</Button>
                        </div>
            
                    <div class="mb-6">
                        <Row>
                            <Col>
                
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Memo</Form.Label>
                                <Form.Control as="textarea" rows="4" />
                            </Form.Group>
                            
                            </Col>
                            <Col></Col> 
                            <Col>
                            <Form.Group as={Row} controlId="\">
                                    <Form.Label column sm="3">
                                    Subtotal
                                    </Form.Label>
                                    <Col sm="6">
                                    <Form.Control type="subtotal" placeholder="0,00" />
                                    </Col>
                                </Form.Group>
            
                            <Form.Group as={Row} controlId="\">
                                    <Form.Label column sm="3">
                                    Total
                                    </Form.Label>
                                    <Col sm="6">
                                    <Form.Control type="total" placeholder="Rp, 0.00" />
                                    </Col>
                            </Form.Group>
                            
                            <Form.Label>
                            Pemotongan
                            </Form.Label>
                                <Form.Control className="mb-2" as="select">
                                                <option>Pemotongan A </option>
                                                <option>Pemotongan B </option>
                                                <option>Pemotongan C </option>
                                                <option>Pemotongan D </option>

                                </Form.Control>

                                 <InputGroup className="">            
                                    <FormControl
                                    placeholder="Input Pemotongan"
                                    aria-label=""
                                    />
                                    <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                    <InputGroup.Text>Rp</InputGroup.Text>
                                    </InputGroup.Append>
                                    
                                </InputGroup>
                            </Col>
                        </Row>
                    </div>
                
                    <div class="mb-10">
                        <Row>
                            <Col>
                            <div>
                            <Form.Label>
                            <AttachmentIcon />  Lampiran
                            </Form.Label>  
                            
                            <Card border="secondary" style={{ width: '15rem' }}>
                                    <p>
                                        Tarik file ke sini, atau   
                                    <Card.Link href="#"> pilih file</Card.Link>
                                    </p>
                                    <p>
                                        Ukuran Max 10MB
                                    </p>
                                </Card>
                            </div>
                            </Col>
                            <Col>
                            
                            </Col> 
                            <Col>
                            <Form.Group as={Row} controlId="\\">
                                 <Form.Label column sm="4">
                                    Total Fixed
                                    </Form.Label>
                                    <Col sm="8">
                                    <Form.Control type="total" placeholder="Rp, 0.00" />
                                    </Col>
                                    </Form.Group>
                            </Col>
                        </Row>
                    </div>
            
                <div className="float-right mb-10">
                            <Button variant="danger mr-2"><HighlightOffIcon fontSize="medium"/> Batal</Button>
                            <Button variant="success"><CheckCircleIcon fontSize="medium"/> Buat Transferan</Button>
                    </div>
                </div>
            </Layout>
            </div>
    )
}

export default kirimuang
