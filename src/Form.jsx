import React, { useState } from 'react';

const RegistrationForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(age);
    console.log(gender);
    console.log(address);
    console.log(country);


    // reset the input field
    setName("");
    setEmail("");
    setAge("");
    setGender("");
    setAddress("");
    setCountry("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange} />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          value={age}
          onChange={handleAgeChange} />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select
          value={gender}
          onChange={handleGenderChange}>
          <option value="" disabled>Select one</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange} />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          value={country}
          onChange={handleCountryChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegistrationForm;