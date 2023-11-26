import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function Addhotels() {
    return (
        <Form>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Name">
                            Name
                        </Label>
                        <Input
                            id="Name"
                            name="name"
                            placeholder="with a placeholder"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="type">
                            Type
                        </Label>
                        <Input
                            id="Type"
                            name="Type"
                            placeholder="Type placeholder"
                            type="text"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="Address">
                    Address
                </Label>
                <Input
                    id="Address"
                    name="address"
                    placeholder="1234 Main St"
                />
            </FormGroup>
            <FormGroup>
                <Label for="City">
                    City
                </Label>
                <Input
                    id="City"
                    name="City"
                    placeholder="Apartment, studio, or floor"
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="City">
                            City
                        </Label>
                        <Input
                            id="City"
                            name="city"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="State">
                            State
                        </Label>
                        <Input
                            id="State"
                            name="state"
                        />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Zip">
                            Zip
                        </Label>
                        <Input
                            id="Zip"
                            name="zip"
                        />
                    </FormGroup>
                </Col>
            </Row>
            
            <Button>
                Send
            </Button>
        </Form>
    );
}
export default Addhotels