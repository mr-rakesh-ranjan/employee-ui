import React, {useState} from 'react';
import {Form, Col, Row, FormGroup, Label, Input, Button, Container} from "reactstrap";
import axios from "axios";

const AddUsers = () => {
    const [empData, setEmpData] = useState({
        employeeEmail: "",
        employeeName: "",
        employeeDesignation:"",
        employeeTeam: "",
        employeeAddress: "",
        employeeCity: "",
        employeeState: "",
        employeeZip: "",
    });

    const addEmployee = (e) => {
        const newEmpData = {...empData}
        newEmpData[e.target.name] = e.target.value
        setEmpData(newEmpData)
        // console.log(newEmpData); //for debugging purpose
    }
    // console.log(empData); //for debugging purpose
    const subEmployee = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/add-employee', {
            employeeEmail: empData.employeeEmail,
            employeeName: empData.employeeName,
            employeeDesignation:empData.employeeDesignation,
            employeeTeam: empData.employeeTeam,
            employeeAddress: empData.employeeAddress,
            employeeCity: empData.employeeCity,
            employeeState: empData.employeeState,
            employeeZip: empData.employeeZip,
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <>
            <Container className="mt-3">
                <div className="my-3">
                    <h2 className="text-center"> Add New Employee</h2>
                </div>
                <Form method="post" onSubmit={subEmployee}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="employeeEmail">
                                    Email
                                </Label>
                                <Input
                                    name="employeeEmail"
                                    placeholder="abc1@gmail.com"
                                    type="email"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="employeeName">
                                    Name
                                </Label>
                                <Input
                                    name="employeeName"
                                    placeholder="Rajveer Singh"
                                    type="text"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="employeeDesignation">
                                    Designation
                                </Label>
                                <Input
                                    name="employeeDesignation"
                                    placeholder="Software Developer"
                                    type="text"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="employeeTeam">
                                    Team Name
                                </Label>
                                <Input
                                    name="employeeTeam"
                                    type="select"
                                    onChange={addEmployee}
                                >
                                    <option>
                                        Select
                                    </option>
                                    <option>
                                        Team Prob
                                    </option>
                                    <option>
                                        Team Hero
                                    </option>
                                    <option>
                                        Gitter
                                    </option>
                                </Input>

                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="employeeAddress">
                            Address
                        </Label>
                        <Input
                            type="text"
                            name="employeeAddress"
                            placeholder="1234 Main St"
                            onChange={addEmployee}
                        />
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="employeeCity">
                                    City
                                </Label>
                                <Input
                                    type="text"
                                    name="employeeCity"
                                    placeholder="Dispur"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="employeeState">
                                    State
                                </Label>
                                <Input
                                    type="text"
                                    name="employeeState"
                                    placeholder="Assam"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="employeeZip">
                                    Zip
                                </Label>
                                <Input
                                    type="text"
                                    name="employeeZip"
                                    placeholder="999999"
                                    onChange={addEmployee}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddUsers;
