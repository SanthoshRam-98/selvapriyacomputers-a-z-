import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "../AboutImage/fileupload.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 128px;
  padding-bottom: 64px;
  @media (max-width: 992px) {
    padding-top: 100px;
  }
  @media (max-width: 780px) {
    padding-top: 80px;
  }
  @media (max-width: 660px) {
    padding-top: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
  @media (max-width: 330px) {
    padding-top: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 820px;
  padding: 0 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #6f6f6f;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #1e1e1e;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #1e1e1e;
  font-size: 14px;
  margin-top: 5px;
`;

const FileUploadContainer = styled.div`
  background: #d1ecf1;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 820px;
  margin: auto;
  @media (max-width: 992px) {
    padding: 15px;
  }
  @media (max-width: 780px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 20px;
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

const StyledFileComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  height: 242px;
  border: 2px dashed #a3c1d1;
  text-align: center;
  margin: auto;
`;

const UploadButton = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 54px;
  background-color: white;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  &:hover {
    background-color: transparent;
    border: 2px solid black;
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
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
    const selectedFilesArray = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      files: [...prevData.files, ...selectedFilesArray],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Title>Get a Quotation</Title>
      <Subtitle>Tell us about your project or just say hello!</Subtitle>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <InputGroup>
              <Label>Enter your First Name*</Label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>Enter your Last Name*</Label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <Label>Enter your Email*</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>Enter your Whatsapp Number*</Label>
              <Input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </FormRow>
          <InputGroup>
            <Label>Enter your Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </InputGroup>
          <FileUploadContainer>
            <StyledFileComponent>
              <UploadButton>
                Upload Files
                <input type="file" multiple onChange={handleFileChange} />
              </UploadButton>
            </StyledFileComponent>
          </FileUploadContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default QuotationForm;
