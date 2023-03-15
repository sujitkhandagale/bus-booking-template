import React from 'react'
import "./contactfromandaddress.scss"

function ContactFomAndAddress() {
  return (
    <section className='Contact_from_and_Address'>
        <div>
            <form className='form_group'>
              <h1 className='text-center'>Facing issue! Need Help?</h1>
               <div>
               <label className="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Amit Jadhav" required />
              </div>
               <div>
               <label  className="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123467890" required />
                </div>
             <div>
             <label  className="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@domain.com" required />
             </div>

              <div>

<label className="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              </div>
              <button type="button" className="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </form>
        </div>
        <div className='Address'>
          <h2>Find us on below details</h2>
          <h3><span><i className="fa-duotone fa-location-dot mr-4"></i></span>D-302 Ttc Indl Area Turbhe Naka Turbhe, Mumbai,Mumbai,400705,India <span className='fake_lable'>(Fake Address)</span></h3>
          <h3><span><i className="fa-duotone fa-mobile-screen mr-4"></i></span>1234567890</h3>
          <h3><span><i className="fa-duotone fa-at mr-4"></i></span>abc@domain.com</h3>
          <h3><span><i className="fa-duotone fa-phone-rotary mr-4"></i></span>7894562</h3>
          <h3><span><i className="fa-duotone fa-phone-rotary mr-4"></i></span>7894562</h3>
        </div>
    </section>
  )
}

export default ContactFomAndAddress