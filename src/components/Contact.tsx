import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //import environment variables
  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

  //handle changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //handles form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(e.currentTarget);
    if (isSubmitting) return;

    setIsSubmitting(true);

    //emailjs sending message to emailjs server
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.currentTarget as HTMLFormElement,
        publicKey
      )
      .then(() => {
        setStatus('Message was sent successfully');
        setFormData({ name: '', email: '', message: '' });
        hideStatusAfterDelay();
      })
      .catch(() => {
        setStatus('Error sending message, please send again');
        hideStatusAfterDelay();
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    //removing status message after delay
    const hideStatusAfterDelay = () => {
      setTimeout(() => {
        setStatus('');
      }, 4000);
    };
  };
  return (
    <section id='contact' className='bg-gray-800 py-20 px-4 h-screen'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-300 mb-8'>Contact Me</h2>
        <form
          action='#'
          className='max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-4xl'
          onSubmit={handleSubmit}>
          <div className='mb-6 text-left'>
            <label
              htmlFor='name'
              className='block text-gray-300 mb-2 font-medium'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Name'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-6 text-left'>
            <label
              htmlFor='email'
              className='text-gray-300 mb-2 font-medium block'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-6 text-left'>
            <label
              htmlFor='message'
              className='text-gray-300 font-medium mb-2 block'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={3}
              placeholder='Message'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:shadow-lg focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200'
              onChange={handleChange}
              value={formData.message}
              required
            />
          </div>
          <button
            className='bg-blue-600 text-lg hover:bg-blue-700 text-gray-300 py-3 px-6 rounded-lg w-full font-semibold transition-all duration-300'
            type='submit'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-lg font-medium ${
              status.includes('Error') ? 'text-red-500' : 'text-green-500'
            }`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
