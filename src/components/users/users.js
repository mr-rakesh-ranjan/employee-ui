import React, {useEffect, useState} from 'react';
import {Col, Container, Table, Row, Button} from "reactstrap";
import axios from "axios";
import baseURL from "../../apis/apiCon";
import ShowUser from './showUser';

const Users = () => {

    const [empData, setEmpDta] = useState([]);

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

    useEffect(() => {
        fetchEmp();
    }, []);

    //on delete employee handler
    const deleteEmployee = (employeeId) =>{
        axios.delete(`${baseURL}/employee/${employeeId}`)
            .then(()=> {
                fetchEmp();
            })
    }

    // get employee details handler
    
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
                                    <a className="btn btn-secondary m-lg-1" href="/get-employee" role="button">Details</a>
                                    <a className="btn btn-warning m-lg-1" href="#" role="button">Edit</a>
                                    <button className="btn btn-danger m-lg-1" onClick={() => deleteEmployee(empData[key].employeeId)} role="button">Delete</button>
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
