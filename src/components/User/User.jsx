import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'


function User() {
  const { loadUser } = useCartContext()

  return (

      <Form>
        <Row>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" id="userName" value={userName} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" id="userLastName"/>
          </Form.Group>

        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="userEmail"/>
        </Form.Group>

        <Button variant="dark" type="submit" onClick={() => loadUser(userName, userLastName, userEmail)}>Confirmar Datos</Button>
      </Form>
  
  )
}

export default User