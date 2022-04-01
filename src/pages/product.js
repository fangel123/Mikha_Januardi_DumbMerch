/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Table } from 'react-bootstrap';
import Header from './component/header'
import cssModule from './component/listCategory.module.css'
import Delete from './component/DeleteButton';
import { useNavigate } from 'react-router-dom';

export default function product() {
    const navigate = useNavigate();

    const handleNavigateToEditProduct = () => {
        navigate("/edit-product");
    };

    return (
		<div className={cssModule.ProductC}>
			<Header />
			<div className={cssModule.container}>
				<div className={cssModule.mainContainer}>
					<h4>List Category</h4>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
									<th>No</th>
									<th>Photo</th>
									<th>Product Name</th>
									<th>Product Desc</th>
									<th>Price</th>
									<th>Qty</th>
									<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Mouse.jpg</td>
								<td>Mouse</td>
								<td>Lorem ipsum mouse ...</td>
								<td>500.000</td>
								<td>600</td>
								<td className={cssModule.btnGroup}>
									<div>
										<button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
									</div>
									<div>
										<Delete />
									</div>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Keyboard.jpg</td>
								<td>Keyboard</td>
								<td>Lorem ipsum keyboard ...</td>
								<td>700.000</td>
								<td>600</td>
								<td className={cssModule.btnGroup}>
									<div>
										<button onClick={handleNavigateToEditProduct} className={cssModule.btnEdit}>Edit</button>
									</div>
									<div>
										<Delete />
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		</div>
  )
}
