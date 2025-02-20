import * as React from "react";
import styled from "styled-components";
import TermsAndImage from "../TermsImageSection";
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
      <TermsAndImage />
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
  gap: 32px;

  @media (max-width: 420px) {
    gap: 0px;
  }
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  padding-right: 100px;
  padding-left: 100px;
  gap: 64px;
  @media (max-width: 660px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 330px) {
    padding-right: 12px;
    padding-left: 12px;
  }
`;
const ContentBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BlockTitle = styled.h2`
  font-size: 1.75rem; /* Default */
  font-weight: 700;
  color: rgba(30, 30, 30, 1);
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
  }

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

const BlockContent = styled.p`
  font-size: 1.25rem; /* Default font size for larger screens */
  line-height: 1.6; /* Maintain readability */
  color: #1e1e1e;
  margin-bottom: 0px;
  @media (max-width: 1200px) {
    font-size: 1.15rem; /* Slightly reduce font size for medium screens */
  }

  @media (max-width: 992px) {
    font-size: 1.125rem; /* Further reduction for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust for tablets and small devices */
    line-height: 1.5; /* Adjust line height for compact text */
  }

  @media (max-width: 576px) {
    font-size: 0.875rem; /* Slightly smaller for smaller phones */
  }

  @media (max-width: 420px) {
    font-size: 0.75rem; /* Final reduction for very small screens */
    line-height: 1.4; /* Tighten line spacing for smaller space */
  }

  a {
    text-decoration: none;

    font-size: 1.25rem; /* Default font size for larger screens */
    line-height: 1.6; /* Maintain readability */
    color: #1e1e1e;
    margin-bottom: 0px;
    @media (max-width: 1200px) {
      font-size: 1.15rem; /* Slightly reduce font size for medium screens */
    }

    @media (max-width: 992px) {
      font-size: 1.125rem; /* Further reduction for smaller screens */
    }

    @media (max-width: 768px) {
      font-size: 1rem; /* Adjust for tablets and small devices */
      line-height: 1.5; /* Adjust line height for compact text */
    }

    @media (max-width: 576px) {
      font-size: 0.875rem; /* Slightly smaller for smaller phones */
    }

    @media (max-width: 420px) {
      font-size: 0.75rem; /* Final reduction for very small screens */
      line-height: 1.4; /* Tighten line spacing for smaller space */
    }
  }
`;
