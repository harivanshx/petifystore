import React from "react";

const Grooming = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-teal-500 text-white p-6 h-[300px] flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold">
            Welcome to Petify Grooming Services
          </h1>
          <p className="mt-2">
            Where your pets get the royal treatment they deserve!
          </p>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Bath & Blow Dry",
                description:
                  "A refreshing bath with gentle shampoo, followed by a blow dry for a fluffy finish.",
                price: "$25",
              },
              {
                title: "Full Grooming",
                description:
                  "Includes a bath, haircut, nail trimming, and ear cleaning for complete care.",
                price: "$50",
              },
              {
                title: "Nail Trimming",
                description:
                  "Quick and safe nail trimming to keep your pet's paws healthy.",
                price: "$10",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                <p className="mt-2 font-semibold">
                  Starting at {service.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 bg-teal-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Book an Appointment
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Pet's Name"
              className="w-full p-2 border rounded-lg"
            />
            <select className="w-full p-2 border rounded-lg">
              <option>Bath & Blow Dry</option>
              <option>Full Grooming</option>
              <option>Nail Trimming</option>
            </select>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </section>

        <footer className="bg-teal-500 text-white p-6 text-center">
          <p>&copy; 2025 Petify Store. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Grooming;
