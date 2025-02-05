import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/EmployeeService";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(emp => (
                    <li key={emp.id}>
                        {emp.name} - {emp.department} - ${emp.salary} 
                        <button onClick={() => handleDelete(emp.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
