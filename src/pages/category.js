/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Table } from 'react-bootstrap';
import cssModule from './component/listCategory.module.css'
import Header from './component/header'
import Delete from './component/DeleteButton';
import { useNavigate } from 'react-router-dom';

export default function category() {
	const navigate = useNavigate();

	const handleNavigateToEditCategory = () => {
		navigate("/edit-category");
	};
	return (
		<div className={cssModule.CategoryC}>
			<Header />
			<div className={cssModule.container}>
				<div className={cssModule.mainContainer}>
					<h4>List Category</h4>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>No</th>
								<th>Category Name</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Mouse</td>
								<td className={cssModule.btnGroup}>
									<div>
										<button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
									</div>
									<div>
										<Delete />
									</div>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Keyboard</td>
								<td className={cssModule.btnGroup}>
									<div>
										<button onClick={handleNavigateToEditCategory} className={cssModule.btnEdit}>Edit</button>
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
