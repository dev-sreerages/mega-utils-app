"use client";

const utilities = [
  {
    name: "URL Shortener",
    link: "/url-shortener",
  },
  {
    name: "QR Code Generator",
    link: "/qr-generator",
  },
  {
    name: "PDF Generator",
    link: "/pdf-generator",
  },
  {
    name: "QR Code Scanner",
    link: "/qr-scanner",
  },
  {
    name: "Geo Location",
    link: "/geo-location",
  },
  {
    name: "Email Sender",
    link: "/email-sender",
  },
  {
    name: "Zip Code",
    link: "/zip-code",
  },
];
const Home = () => {
  return (
    <div className="p-5 fade-in">
      <p className="text-3xl font-semibold">Home</p>
      <div className="grid grid-cols-2 mt-5 gap-5">
        {utilities.map((item) => (
          <div className="shadow bg-light border border-solid border-gray-200 rounded-lg p-5">
            <p className="text-base text-center font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
