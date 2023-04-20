import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Auruproff",
          from_email: form.email,
          to_email: "aleksander.eerma@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="">
        <div className=''>
          <h1 className="">Kontakt</h1>
        </div>
        <div className=" ">
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=''>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Eesnimi</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className=''
            />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Perekonnanimi</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className=''
            />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Telefoninumber</span>
            <input
              type='tel'
              name='phone'
              pattern=""
              value={form.name}
              onChange={handleChange}
              placeholder=""
              className=''
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>E-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder=""
              className=''
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sõnum</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder=''
              className=''
            />
          </label>

          <button
            type='submit'
            className=''
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
          <div className=''>
            <img src="" alt="" className="max-w-1/2"/>
            <h4 className=""></h4>
            <p className='text-center'>Aadress: Tartu mnt 83, Tallinn, 10115, Eesti</p>
            <p className='text-center'>Telefon: +372 6740433</p>
            <p className='text-center'>Email: info@conferelaw.ee</p>
          </div>
        </div>
      </section>

    );
  };

export default Contactform