import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;
    const [firstName, setfirstName] = useState(selectedEmployee.firstName);
    const [lastName, setlastName] = useState(selectedEmployee.lastName);
    const [Organization, setOrganization] = useState(selectedEmployee.Organization);
    const [MobileNo, setMobileNo] = useState(selectedEmployee.MobileNo);
    const [Address_Line1, setrAddress_Line1] = useState(selectedEmployee.Address_Line1);
    const [Address_Line2, setAddress_Line2] = useState(selectedEmployee.Address_Line2);
    const [Street, setStreet] = useState(selectedEmployee.Street);
    const [City, setCity] = useState(selectedEmployee.City);
    const [State, setState] = useState(selectedEmployee.State);
    const [Country, setCountry] = useState(selectedEmployee.Country);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName ||
            !lastName ||
            !MobileNo ||
            !Address_Line1 ||
            !Street ||
            !City ||
            !State ||
            !Country) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            MobileNo,
            Address_Line1,
            Address_Line2,
            Street,
            City,
            State,
            Country,
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />

                <label htmlFor="State">Organization</label>
                <input
                    id="organization"
                    type="text"
                    name="organization"
                    value={Organization}
                    onChange={(e) => setOrganization(e.target.value)}
                />
                <label htmlFor="mobile">Mobile No</label>
                <input
                    id="mobile"
                    type="number"
                    name="mobile"
                    value={MobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                />
                <label htmlFor="Address_Line2">Address </label>
                <input
                    id="Address_Line1"
                    type="text"
                    name="Address_Line1"
                    value={Address_Line1}
                    onChange={(e) => setrAddress_Line1(e.target.value)}
                />
                <label htmlFor="Address_Line2">Address 2 </label>
                <input
                    id="address_line2"
                    type="text"
                    name="address_line2"
                    value={Address_Line2}
                    onChange={(e) => setAddress_Line2(e.target.value)}
                />
                <label htmlFor="street">Street</label>
                <input
                    id="Street"
                    type="text"
                    name="Street"
                    value={Street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="State">State</label>
                <input
                    id="state"
                    type="text"
                    name="state"
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="country">Country</label>
                <input
                    id="country"
                    type="text"
                    name="country"
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit