// import { useParams } from "react-router-dom";

// const serviceComponents = {
//   "wedding-cards": () => <h1>Wedding Cards</h1>,
//   "display-banner": () => <h1>Display Banner</h1>,
//   "invoice-books": () => <h1>Invoice Books</h1>,
//   "notice-prints": () => <h1>Notice Prints</h1>,
//   "thampoolam-baf": () => <h1>Thampoolam Baf</h1>,
//   "sunpack-boards": () => <h1>Sunpack Boards</h1>,
//   "photo-printings": () => <h1>Photo Printings</h1>,
//   "buisness-cards": () => <h1>Business Cards</h1>,
//   "letter-pads": () => <h1>Letter Pads</h1>,
//   "sign-boards": () => <h1>Sign Boards</h1>,
//   calendars: () => <h1>Calendars</h1>,
//   "label-stickers": () => <h1>Label Stickers</h1>,
// };

// function ServiceDetailLayout() {
//   const { serviceId } = useParams();
//   const ServiceComponent = serviceComponents[serviceId];

//   return (
//     <div>
//       {ServiceComponent ? <ServiceComponent /> : <h1>Service Not Found</h1>}
//     </div>
//   );
// }

// export default ServiceDetailLayout;
