import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img
            src="https://images.pexels.com/photos/8434725/pexels-photo-8434725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pet Food"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-semibold">Premium Dog Food</h3>
          <p className="text-gray-600">
            High-quality nutrition for your furry friend.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img
            src="https://images.pexels.com/photos/16395147/pexels-photo-16395147/free-photo-of-cat-and-dog-with-toy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cat Toy"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-semibold">Interactive Cat Toys</h3>
          <p className="text-gray-600">Keep your cat entertained for hours!</p>
        </div>

        <a href="/products">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://images.pexels.com/photos/7282667/pexels-photo-7282667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pet Bed"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Cozy Pet Beds</h3>
            <p className="text-gray-600">
              A comfortable space for your pet to relax.
            </p>
          </div> 
        </a>
      </div>






      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img
            src="https://images.pexels.com/photos/8434725/pexels-photo-8434725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pet Food"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-semibold">Premium Dog Food</h3>
          <p className="text-gray-600">
            High-quality nutrition for your furry friend.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img
            src="https://images.pexels.com/photos/16395147/pexels-photo-16395147/free-photo-of-cat-and-dog-with-toy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cat Toy"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-semibold">Interactive Cat Toys</h3>
          <p className="text-gray-600">Keep your cat entertained for hours!</p>
        </div>

        <a href="/products">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://images.pexels.com/photos/7282667/pexels-photo-7282667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pet Bed"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Cozy Pet Beds</h3>
            <p className="text-gray-600">
              A comfortable space for your pet to relax.
            </p>
          </div> 
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
