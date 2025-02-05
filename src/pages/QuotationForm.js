import React, { useState } from "react";
import styled from "styled-components";

const QuotationForm = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      resetForm();
      onClose();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setSelectedFile(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Get a Quotation</Title>
        <Subtitle>Tell us about your project or just say hello!</Subtitle>
        <InputRow>
          <Input
            type="text"
            placeholder="First Name*"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            placeholder="Last Name*"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </InputRow>
        <InputRow>
          <Input
            type="email"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="tel"
            placeholder="WhatsApp Number*"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </InputRow>
        <MessageBox
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleInputChange}
        />
        <FileUploadBox>
          <UploadText>Insert your file</UploadText>
          <AllowedTypes>
            Allowed formats: .jpg, .jpeg, .doc, .docx, .pdf, .png, .gif
          </AllowedTypes>
          <UploadArea onClick={triggerFileUpload}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .doc, .docx, .pdf, .png, .gif"
            />
            <UploadIcon>📂</UploadIcon>
            <UploadButton>Upload Files</UploadButton>
            <DropText>
              {selectedFile
                ? `Selected: ${selectedFile}`
                : "or drop files here"}
            </DropText>
          </UploadArea>
        </FileUploadBox>
        <SubmitButton>Submit</SubmitButton>
      </FormContainer>
    </FormOverlay>
  );
};

export default QuotationForm;

// Styled Components
const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const MessageBox = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

const FileUploadBox = styled.div`
  background: #e0f0ff;
  padding: 15px;
  text-align: center;
  margin-bottom: 15px;
`;

const UploadText = styled.h3`
  font-size: 16px;
`;

const AllowedTypes = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 10px;
`;

const UploadArea = styled.div`
  border: 2px dashed #ccc;
  padding: 15px;
  cursor: pointer;
`;

const UploadIcon = styled.div`
  font-size: 30px;
`;

const UploadButton = styled.button`
  background: #ffaaaa;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`;

const DropText = styled.p`
  font-size: 12px;
`;

const SubmitButton = styled.button`
  display: block;
  margin: auto;
  background: #ffaaaa;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
