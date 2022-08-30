import axios from 'axios'
import React, {useState, useEffect} from 'react'
import baseURL from '../../apis/apiCon'

const ShowUser = (props) => {
    console.log(props.empId);
    
    // const [empId, setEmpId] = useState(props.empId);
    const [employeeData, setEmployeeData] = useState([]);
    const [flag, setFlag] = useState(false)

    const getEmployeeDetail = (empId) => {
        try {
            const response = axios.get( `${baseURL}/employee/${empId}`);
            if (response) {
                if(response.data){
                    setEmployeeData(response.data);
                    setFlag(true);
                    console.log(response.data);
                } else {
                    console.log("No Employee Found");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getEmployeeDetail(props.empId);
    },[props.empId,flag])
    

    return (
    <>
        <div className="conatiner">
            <p>this is show user page </p>
        </div>

    </>
    )
}

export default ShowUser;