import * as React from "react";
import styled from "styled-components";

const termsData = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing this website, you confirm that you have read, understood, and agreed to these terms. If you disagree with any part of these terms, you should discontinue use immediately. You acknowledge that your use of the website is contingent upon your compliance with these terms and conditions. The website reserves the right to modify, update, or change these terms at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of the website following the posting of any amendments signifies your acceptance of those changes.",
  },
  {
    title: "Services Offered",
    content:
      "Selvapriya Computers provides professional printing and design services. While we strive to keep all product and service information up-to-date, availability and pricing are subject to change without notice. Our dedicated team of experts is committed to delivering high-quality results that exceed your expectations. Whether you need business cards, brochures, banners, or custom designs, we are here to assist you every step of the way.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content, designs, and materials on this website, including logos, images, and text, are the intellectual property of Selvapriya Computers. Unauthorized use, reproduction, or modification is strictly prohibited. Any attempt to replicate, distribute, or create derivative works from the original content without prior written consent from Selvapriya Computers will be met with legal action. We value and respect our intellectual property rights and expect our users to do the same. Please be aware that the use of our materials for commercial purposes, educational purposes, or any other endeavors without appropriate licensing is not permitted and may result in significant penalties. For inquiries regarding permissions or licensing, please contact us directly. Your cooperation in maintaining the integrity of our intellectual property is greatly appreciated.",
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        Selvapriya Computers is not liable for any indirect or consequential
        damages resulting from:
        <ul>
          <li>Misuse of our products or services.</li>
          <li>Errors in user-provided details or specifications.</li>
          <li>Interruptions or errors in the functionality of the website.</li>
        </ul>
      </>
    ),
  },
  {
    title: "External Links",
    content:
      "The website may contain links to third-party websites for your convenience. Selvapriya Computers does not endorse or take responsibility for the content, privacy policies, or practices of these external websites. We encourage you to review the terms and conditions as well as the privacy policies of any third-party websites you visit. Your interactions with these external sites are governed by their own policies and not by those of Selvapriya Computers. As such, we cannot be held liable for any damages or issues that may arise from your engagement with these links.",
  },
  {
    title: "Amendments to Terms",
    content:
      "We reserve the right to amend these Terms & Conditions at any time. Changes will be posted on this page, and your continued use of the website signifies acceptance of the updated terms. It is your responsibility to review these Terms & Conditions periodically for any updates or changes. If you do not agree to any of the changes, you must cease using the website immediately. We encourage you to contact us with any questions or concerns regarding these terms. Your engagement with our services indicates your understanding and acceptance of the current terms as well as any modifications that may occur in the future. By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.",
  },
  {
    title: "Delivery and Turnaround Times",
    content:
      "We strive to meet delivery deadlines. However, delays may occur due to circumstances beyond our control, such as courier issues or incorrect delivery information. Selvapriya Computers cannot be held responsible for such delays. In the event of a delay, we will make every effort to communicate promptly and update you on the status of your order. We encourage customers to provide accurate and complete delivery information to minimize the potential for issues. Please note that once an order has been dispatched, tracking information will be provided to help you monitor its progress. We appreciate your understanding and patience in these situations, as we work diligently to ensure your satisfaction. Your cooperation is vital in allowing us to serve you better. Thank you for choosing Selvapriya Computers.",
  },
  {
    title: "Refund and Cancellation Policy",
    content: (
      <>
        Refunds are processed at our discretion and may vary depending on the
        nature of the product or service. Customized products are non-refundable
        unless there is a defect caused by us. We encourage customers to
        thoroughly review their orders prior to completion, as once an order is
        placed, it is considered final. In the event of a defect, we ask that
        you contact our support team within seven days of receiving your product
        to initiate the refund process. We reserve the right to request
        photographic evidence of the defect to expedite the review.
        <br /> {/* Corrected break tag */}
        <br />
        For services rendered, refunds will be evaluated on a case-by-case
        basis, and we ask that you provide detailed feedback regarding your
        experience. Our commitment is to ensure customer satisfaction while
        adhering to these policies. Please note that shipping costs are
        non-refundable, and any returns must be accompanied by the original
        packaging and documentation provided at the time of sale. Thank you for
        your understanding and cooperation.
      </>
    ),
  },

  {
    title: "Contact Us",
    content: (
      <>
        If you have any questions or concerns about these Terms & Conditions,
        please contact us at:
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:selvapriyacomputers@gmail.com">
          selvapriyacomputers@gmail.com
        </a>
        <br />
        <strong>Phone:</strong>{" "}
        <a href="tel:+919655926967">+91 - 96559 26967</a>
        <br />
        <br />
        By using our website, you agree to abide by these Terms & Conditions and
        accept them as binding.
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <MainContainer>
      <HeaderSection>
        <HeaderContainer>
          <HeaderContent>
            <Title>Terms & Conditions</Title>
            <Description>
              Welcome to Selvapriya Computers! These Terms & Conditions govern
              your use of our website and services. By accessing or using our
              site, you agree to comply with these terms. Please read them
              carefully, as they define your rights and responsibilities while
              using our platform.
            </Description>
          </HeaderContent>
        </HeaderContainer>
      </HeaderSection>
      {/* ✅ Wrap BannerImage inside BannerWrapper */}
      <BannerWrapper>
        <BannerImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d26a9b147e97c44239a617afeed833a65149a2388d7565d8c6987c8e10c3a26?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
          alt="Terms and conditions banner"
        />
      </BannerWrapper>
      <ContentContainer>
        {termsData.map((section, index) => (
          <ContentBlock key={index}>
            <BlockTitle>{section.title}</BlockTitle>
            <BlockContent>{section.content}</BlockContent>
          </ContentBlock>
        ))}
      </ContentContainer>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 80px; /* Pushes content below navbar */
  @media (max-width: 991px) {
    margin-top: 60px;
  }
`;

const HeaderSection = styled.section`
  background-color: rgba(207, 230, 242, 1);
  display: flex;
  max-width: 1239px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px; /* Adjust padding for spacing */
  position: relative; /* Needed for overlapping effect */
  z-index: 2; /* Ensures it stays on top of the banner */
  @media (max-width: 991px) {
    padding: 60px 20px;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1025px;
  position: relative;
`;

const HeaderContent = styled.div`
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  height: 800px; /* Adjust height */
  overflow: hidden; /* Prevents extra spacing */
  margin-top: -180px; /* Moves it up to overlap HeaderSection */
  @media (max-width: 991px) {
    height: 250px;
    margin-top: -60px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px; /* Adjust based on spacing */
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;
const ContentBlock = styled.article`
  margin-bottom: 40px;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const BlockTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
  margin-bottom: 16px;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const BlockContent = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;
