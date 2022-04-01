import React from 'react'
import { Form, Button } from 'react-bootstrap';
import Header from './component/header'
import cssModule from './component/editCategory.module.css'

export default function editCategory() {
  return (
    <div className={cssModule.Category}>
			<Header />
			<div>
				<div className={cssModule.containerCategory}>
					<h1>Edit Category</h1>
					<Form.Group className={cssModule.mb3} controlId="formBasictext">
						<Form.Control className={cssModule.category} type="text" placeholder="Mouse" />
					</Form.Group>
					<div className="button">
						<Button className={cssModule.btnSave} variant="primary" type="submit">
							Save
						</Button>
					</div>
				</div>
			</div>
		</div>
  )
}
