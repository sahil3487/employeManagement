import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Organization, setOrganization] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Address_Line1, setrAddress_Line1] = useState("");
  const [Address_Line2, setAddress_Line2] = useState("");
  const [Street, setStreet] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !MobileNo ||
      !Address_Line1 ||
      !Street ||
      !City ||
      !State ||
      !Country
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
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
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
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
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
