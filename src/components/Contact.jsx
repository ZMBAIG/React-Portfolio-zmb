import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center pl-[100px] "
    >
      <form
        name="contact"
        method="POST"
        action="https://getform.io/f/792c4f85-e64f-46f0-a04b-17d06ea710d0"
        className="flex flex-col max-w-[600px] w-full bg-slate-600 px-10 mt-4"
      >
        {/* <p className="text-2xl font-bold inline  text-gray-300 ">CONTACT</p> */}
        <p class="text-white p-4 pl-0">Feel free to contact me.</p>
        <input
          className="bg-slate-300 py-2 p-2 border-b-4 border-emerald-600"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-2 p-2 bg-slate-300 border-b-4 border-emerald-600"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="my-2 p-2 bg-slate-300 border-b-4 border-emerald-600"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          required
        />
        <textarea
          className="bg-slate-300 py-2 p-2 border-b-4 border-emerald-600"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-emerald-600 hover:border-emerald-600 px-4 py-3 my-8 mx-auto flex items-center shadow-lg shadow-[#54749b]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
