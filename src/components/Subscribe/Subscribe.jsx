import React, {useState} from "react";
import "./Subscribe.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com"
const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID }=process.env

function Subscribe({ products }) {
    const [frequency, setFrequency]=useState("")
    const [email, setEmail]=useState("")
    const [selectedProduct, setSelectedProduct]=useState("")
    

    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            await emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, {
                to_email : email,
                frequency : frequency,
                flavor : selectedProduct
            }, REACT_APP_USER_ID)
            alert("Thank You For Your Subscription! Please check your email for the confirmation and details of your subscription.")
        }catch(error){

            console.log("emailjs error", error)
        }
    }
  return (
    <>
    <img style={{ width: "20%" }} src="/Images/valhallalogo8.png" />
    <div className="SubscribeContainer">
      <h1>Subscribe To Our Coffee Club!</h1>
      <p className="AboutText"></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                <option>Choose Your Coffee</option>
                {products.length && products.map(product => (
                    <option key={product.id} value={product.flavor}>{product.flavor}</option>
                ))}
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="radio" label="Bi-weekly" name="frequency" value="Bi-weekly"  checked={frequency==="Bi-weekly"} onChange={(e) => setFrequency(e.target.value) } />
          <Form.Check type="radio" label="Monthly" name="frequency" value="Monthly" checked={frequency==="Monthly"} onChange={(e) => setFrequency(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}

export default Subscribe;
