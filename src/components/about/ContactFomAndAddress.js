import React from 'react'
import "./contactfromandaddress.scss"

function ContactFomAndAddress() {
  return (
    <section className='Contact_from_and_Address'>
        <div>
            <form className='form_group'>
              <h1 className='text-center'>Facing issue! Need Help?</h1>
               <div>
               <label for="first_name" class="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amit Jadhav" required />
              </div>
               <div>
               <label for="first_name" class="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123467890" required />
                </div>
             <div>
             <label for="first_name" class="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@domain.com" required />
             </div>

              <div>

<label for="message" class="block mb-2 text-left pt-4 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              </div>
              <button type="button" class="mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </form>
        </div>
        <div>address</div>
    </section>
  )
}

export default ContactFomAndAddress