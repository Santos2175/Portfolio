const Contact = () => {
  return (
    <section id='contact' className='bg-gray-800 py-20 px-4 h-screen'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold text-gray-300 mb-8'>Contact Me</h2>
        <form
          action='#'
          className='max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-4xl'>
          <div className='mb-6 text-left'>
            <label
              htmlFor='name'
              className='block text-gray-300 mb-2 font-medium'>
              Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Name'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
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
              type='email'
              placeholder='Email'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
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
              rows={3}
              placeholder='Message'
              className='bg-gray-100 w-full rounded-lg p-3 outline-none focus:ring-4 focus:shadow-lg focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200'
              required
            />
          </div>
          <button className='bg-blue-600 text-lg hover:bg-blue-700 text-gray-300 py-3 px-6 rounded-lg w-full font-semibold transition-all duration-300'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
