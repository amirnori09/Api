import React, { useState, useEffect } from "react";
import axios from "axios";

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    axios
      .get("http://194.33.105.22/api/laptops/get_all")
      .then(function (response) {
        // handle success
        if (Array.isArray(response.data.data)) {
          setLaptops(response.data.data);
        } else {
          console.error("API response data is not an array:", response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString("fa", { style: "currency", currency: "IRR" });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
      {laptops.map((laptop) => (
        <div
        key={laptop._id}
          className="p-3 border text-slate-800 duration-700 rounded-md shadow-lg transition hover:shadow-2xl flex flex-col"
        >
          <div className="p-4 flex items-center justify-center">
            <img
              src={laptop.image_url}
              alt={laptop.name}
              className="h-40 object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between"> {/* Use flex-1 to make the div take remaining space */}
            <div>
              <p className="font-semibold text-slate-900 truncate">{laptop.model_en}</p>
              <p>قیمت: {formatPrice(laptop.price)}</p> {/* Format the price */}
              <p className="truncate">توضیحات: {laptop.desc}</p>
            </div>
            <div >
              <button className="p-3 btn bg-[#EF4056] text-white w-full transition duration-700  ease-in-out hover:bg-rose-600">
                مشاهده
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaptopList;
