import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  margin-right: 100px;
  margin-left: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;

  background: #fff;
  padding: 30px;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;

  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;

  font-size: 14px;
  margin-top: 15px;
`;

const FileUploadContainer = styled.div`
  margin-top: 20px;
  background: #d1ecf1;
  padding: 20px;

  border: 2px dashed #a3c1d1;
  text-align: center;
`;

const FileText = styled.p`
  font-size: 14px;
  color: #666;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background: #ffb6c1;
  color: white;
  padding: 10px;
  border: none;

  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #ff96a0;
  }
`;

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    message: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Title>Get a Quotation</Title>
      <Subtitle>Tell us about your project or just say hello!</Subtitle>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter your First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Enter your Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="whatsapp"
            placeholder="Enter your Whatsapp Number*"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <TextArea
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
        />
        <FileUploadContainer>
          <p>
            <strong>Insert your file</strong>
          </p>
          <FileText>
            Allowed documents (.jpg, .jpeg, .doc, .docx, .pdf, .png, .gif)
          </FileText>
          <input type="file" multiple onChange={handleFileChange} />
        </FileUploadContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default QuotationForm;
