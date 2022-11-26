import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="sm:w-full h-screen bg-gradient-to-r  from-indigo-900 to-sky-500 flex justify-center items-center mx-auto pb-20 ml-8"
    >
      <form
        name="contact"
        method="POST"
        action="https://getform.io/f/792c4f85-e64f-46f0-a04b-17d06ea710d0"
        className="flex flex-col max-w-[350px] w-full bg-[#282c34]  mt-4 px-8"
      >
        <p class="text-white p-4 pl-0 text-center">Feel free to contact me.</p>
        <input
          className="bg-slate-300 py-2 p-2 border-b-4 border-emerald-600"
          type="text"
          placeholder="Full Name"
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
          className="my-2 p-2 bg-slate-300 border-b-4 border-emerald-600 "
          type="tel"
          placeholder="Phone Number"
          name="phone"
          required
        />
        <textarea
          className="bg-slate-300 py-2 p-2 border-b-4 border-emerald-600"
          name="comment"
          rows="6"
          placeholder="Comments"
        ></textarea>
        <button className="text-white border-[1px] hover:bg-emerald-600 hover:border-emerald-600 px-4 py-2 my-4 mx-auto flex items-center shadow-lg shadow-[#54749b] rounded-full">
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
