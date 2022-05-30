import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddCity() {
  const [data, setData] = useState({
    city: "",
    population: "",
    country: "",
  });
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/countries").then(({ data }) => {
      return setCountries(data);
    });
    // console.log(data);
  }, []);
  const upDate = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/cities", data)
      .then(alert(`${data.city} added successfully`));
    // console.log(data);
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            name="city"
            onChange={upDate}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Population</Form.Label>
          <Form.Control
            type="text"
            placeholder="Population"
            name="population"
            onChange={upDate}
          />
          <Form.Select onChange={upDate} name="country">
            {countries.map((c) => {
              return <option name={c.name}>{c.name}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCity;
