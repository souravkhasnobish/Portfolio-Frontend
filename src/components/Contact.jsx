import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://portfolio-backend-omega-nine.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Thank You! 💛",
          icon: "success",
          confirmButtonText: "I will be connecting with you shortly!",
          confirmButtonColor: "#d2691e",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-200 w-full max-w-md px-4 py-6 rounded-xl mt-8"
          >
            <h1 className="text-xl font-semibold mb-4 text-black">
              Send Your Message
            </h1>
            <div className="flex flex-col flex mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                className="shadow rounded-lg py-2 px-3 leading-light bg-white text-black w-full"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your fullname"
                required
              />
            </div>

            <div className="flex flex-col flex mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                className="shadow rounded-lg py-2 px-3 leading-light bg-white text-black w-full"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="flex flex-col flex mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg py-2 px-3 leading-light bg-white text-black w-full"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Query"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-green-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
