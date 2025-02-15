import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "../AboutImage/fileupload.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 330px) {
    padding-top: 32px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 1.6rem;
  }
  @media (max-width: 330px) {
    font-size: 1.3rem;
  }
  @media (max-width: 230px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
  @media (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  @media (max-width: 330px) {
    max-width: 200px;
    text-align: center;
  }
`;

const FormContainer = styled.div`
  width: 100%;
`;

const FormFields = styled.div`
  width: 100%;
  max-width: 820px;
  margin: auto;
  @media (max-width: 992px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;
const FormRow = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`;

const Label = styled.label`
  color: #939393;
  text-decoration: none;
  font-size: 1rem;

  @media (max-width: 992px) {
    font-size: 0.5 rem;
  }
  @media (max-width: 768px) {
    font-size: 0.375 rem;
  }
  @media (max-width: 330px) {
    font-size: 0.25 rem;
  }
  @media (max-width: 230px) {
    font-size: 0.25 rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #1e1e1e;
  background: transparent;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #1e1e1e;
  font-size: 14px;
  margin-top: 5px;
  background: transparent;
`;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #d1ecf1;
  text-align: center;
  height: 426px;
  margin-left: 100px;
  margin-right: 100px;
  gap: 24px;
  @media (max-width: 992px) {
    padding: 15px;
  }
  @media (max-width: 660px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 480px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 330px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  background-color: rgba(255, 170, 170, 1);
  color: rgba(255, 255, 255, 1);
  padding: 12px 24px;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  margin: auto;
  transition: background-color 0.3s ease;
  border: none;
  margin-top: 24px;
  &:hover {
    color: white;
    background-color: black;
  }

  &:focus {
    outline: 2px solid rgba(255, 170, 170, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 10px 18px;
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem !important;
    padding: 8px 16px !important;
  }

  @media (max-width: 330px) {
    && {
      font-size: 0.625rem !important;
      padding: 6px 12px !important;
    }
  }
`;

const StyledFileComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1030px;
  height: 242px;
  border: 2px dashed #a3c1d1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  p {
    color: #939393;
    text-decoration: none;
    font-size: 1rem;

    @media (max-width: 992px) {
      font-size: 0.5 rem;
    }
    @media (max-width: 768px) {
      font-size: 0.375 rem;
    }
    @media (max-width: 330px) {
      font-size: 0.25 rem;
    }
    @media (max-width: 230px) {
      font-size: 0.25 rem;
    }
  }
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
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    background-color: transparent;
    border: 2px solid black;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
    width: 170px;
    height: 48px;
  }
  @media (max-width: 576px) {
    font-size: 0.85rem;
    padding: 8px 16px;
    width: 150px;
    height: 42px;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
    padding: 6px 14px;
    width: 130px;
    height: 38px;
  }
  @media (max-width: 330px) {
    font-size: 0.75rem;
    padding: 6px 12px;
    width: 120px;
    height: 34px;
  }
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
const ImageContainer = styled.div`
  width: 56.25px;
  height: 56.25px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 64px;
  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;
const InsertText = styled.div`
  font-size: 36px;
  font-weight: bold;
  @media (max-width: 992px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 420px) {
    font-size: 24px;
  }
  @media (max-width: 330px) {
    font-size: 20px;
  }
  @media (max-width: 230px) {
    font-size: 18px;
  }
`;
const FileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
`;

const AllowedDocText = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
  @media (max-width: 420px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  @media (max-width: 330px) {
    font-size: 0.6rem;
    text-align: center;
  }
`;

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 480px) {
    gap: 32px;
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
      <HeaderContainer>
        <Title>Get a Quotation</Title>
        <Subtitle>Tell us about your project or just say hello!</Subtitle>
      </HeaderContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Forms>
            <FormFields>
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
            </FormFields>
            <FileUploadContainer>
              <FileText>
                <InsertText>Insert your file</InsertText>
                <AllowedDocText>
                  Allowed documents (.jpg,.jpeg,.doc,.docx,.pdf,.png,.gif)
                </AllowedDocText>
              </FileText>
              <StyledFileComponent>
                <ImageContainer>
                  <img src={FileUpload} alt="Upload Icon" />
                </ImageContainer>
                <UploadButton>
                  Upload Files
                  <input type="file" multiple onChange={handleFileChange} />
                </UploadButton>
                <p>or drop files here</p>
                {formData.files.length > 0 && (
                  <ul>
                    {formData.files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </StyledFileComponent>
            </FileUploadContainer>
          </Forms>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>
    </Container>
  );
};

export default QuotationForm;
