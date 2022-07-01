import React, {useEffect, useState} from 'react';
import {Col, Container, Table, Row, Button} from "reactstrap";
import axios from "axios";
import baseURL from "../../apis/apiCon";

const Users = () => {

    const [empData, setEmpDta] = useState([]);

    useEffect(() => {
        const fetchEmp = async () => {
            try {
                const response = await axios.get(`${baseURL}/all-employee`);
                if (response) {
                    console.log(Object.keys(response.data).length);
                    if (response.data) {
                        setEmpDta(response.data);
                        console.log(response.data);
                    } else {
                        console.log('No Schedule Job Locations returned');
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchEmp();
    }, []);
    return (
        <>
            <Container className="text-center">
                <Table borderless hover responsive>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Designation
                            </th>
                            <th>
                                Team
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(empData).map((key, i) => (
                            <tr key={i}>
                                <td>{empData[key].employeeName}</td>
                                <td>{empData[key].employeeDesignation}</td>
                                <td>{empData[key].employeeTeam}</td>
                                <td>
                                    <a className="btn btn-secondary m-lg-1" href="#" role="button">Detail</a>
                                    <a className="btn btn-warning m-lg-1" href="#" role="button">Edit</a>
                                    <a className="btn btn-danger m-lg-1" href="#" role="button">Delete</a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Users;
