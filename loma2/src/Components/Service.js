import React from "react";
import "./Service.css";
import serviceImage1 from "./assets/imagess(2).jpg";
import serviceImage2 from "./assets/download.jpg";
import serviceImage3 from "./assets/digital2).jpg";
import serviceImage4 from "./assets/OIge (2).jpg";
import serviceImage5 from "./assets/Oimage(2).jpg";
import serviceImage6 from "./assets/OIF (1).jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Camera Sales",
      description: "High-quality cameras for all your needs.",
      price: "$499",
      adminDate: "By Admin - Jan 10, 2025",
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Lens Solutions",
      description: "Custom lens solutions tailored to you.",
      price: "$299",
      adminDate: "By Admin - Jan 8, 2025",
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Repairs & Workshops",
      description: "Professional repairs and hands-on workshops.",
      price: "$149",
      adminDate: "By Admin - Jan 5, 2025",
      image: serviceImage3,
    },
    {
      id: 4,
      title: "Lighting Equipment",
      description: "Best lighting tools for photographers.",
      price: "$199",
      adminDate: "By Admin - Jan 3, 2025",
      image: serviceImage4,
    },
    {
      id: 5,
      title: "Drone Cameras",
      description: "Advanced drone cameras for aerial shots.",
      price: "$699",
      adminDate: "By Admin - Jan 1, 2025",
      image: serviceImage5,
    },
    {
      id: 6,
      title: "Video Production Gear",
      description: "High-quality gear for video production.",
      price: "$899",
      adminDate: "By Admin - Dec 30, 2024",
      image: serviceImage6,
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="price">{service.price}</p>
              <p className="admin-date">{service.adminDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Service.css";

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     // Fetch the services from the API
//     axios.get("http://localhost:8000/api/services/")  // Adjust the URL according to your API endpoint
//       .then(response => {
//         setServices(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the services:", error);
//       });
//   }, []);

//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="services-container">
//         {services.length > 0 ? (
//           services.map((service) => (
//             <div key={service.id} className="service-card">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="service-image"
//               />
//               <div className="service-info">
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//                 <p className="price">{service.price}</p>
//                 <p className="admin-date">{service.admin_date}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading services...</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services;
