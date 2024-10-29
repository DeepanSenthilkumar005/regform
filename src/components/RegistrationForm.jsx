import React, { useState,useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
function RegistrationForm() {
    const [phone, setPhone] = useState('')
    const [otherPhone, setOtherPhone] = useState('')
    const today = new Date().toISOString().split('T')[0];

    // useEffect(()=>{
    //     console.log(phone);
        
    // },[phone])
    
  return (
    <>
        <form>
            <div className="header m-8 text-center">
                <div className="title text-lg font-semibold ">
                    Resigtration
                </div>
                <div className="subTitle text-slate-500 ">
                    Fill all the details which is mandatory for the Registration
                </div>
            </div>
        <div className="form-group mt-2 gap-4 mx-auto w-2/3 grid sm:grid-cols-1 md:grid-cols-2">
        
          
        <div className="leftcontent">
            <div class="mb-4 namefield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="name">Name:<span className="text-red-500">*</span></label>
                <input type="text" id="name" placeholder="Your Name" className="border border-gray-300  focus:ring-1 focus:ring-offset-0 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 dobfield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="dob">DOB:<span className="text-red-500">*</span></label>
                <input type="date" id="dob" max={today} placeholder="Your date of birth" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 mailfield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="mailid">Mail ID:<span className="text-red-500">*</span></label>
                <input type='email' id="mailid" placeholder="Enter mail" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 phonefield">
            {/* <label htmlFor="phone" className='block text-gray-700 text-sm font-medium mb-2'>Phone Number:</label>
             <PhoneInput
             country={'in'}
             className={'border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full'}
             value={phone}
             onChange={phone => setPhone(phone)}
             enableAreaCodes={true}
             enableSearch={true}
             disableSearchIcon={true}
             /> */}
             <label for="phone" class="block text-gray-700 text-sm font-medium mb-2">Phone Number:<span className="text-red-500">*</span></label>
            <input type="tel" id="phone" class="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required placeholder="Enter phone number"/>

            </div>

            <div class="mb-4 otherphonefield">
            {/* <label htmlFor="otherphone" className='block text-gray-700 text-sm font-medium mb-2'>Alternate Phone Number:</label>
             <PhoneInput
             country={'in'}
             className={'border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full'}
             value={otherPhone}
             onChange={otherPhone => setOtherPhone(otherPhone)}
             enableAreaCodes={true}
             enableSearch={true}
             disableSearchIcon={true}
             /> */}
             <label for="otherphone" class="block text-gray-700 text-sm font-medium mb-2">Alternate Phone Number:<span className="text-red-500">*</span></label>
                <input type="tel" id="otherphone" class="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required placeholder="Enter alternate phone number"/>

            </div>

            <div class="mb-4 addressfield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="address">Address:<span className="text-red-500">*</span></label>
                <input type='text' id="address" placeholder="Enter Address" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 appliedrolefield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="appliedrole">Applied Role:<span className="text-red-500">*</span></label>
                <input type='text' id="appliedrole" placeholder="Enter Applied Role" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

        </div>
            
        <div className="rightcontent">
            <div class="mb-4 applieddatefield">
                    <label class="block text-gray-700 text-sm font-medium mb-2" for="applieddate">Applied Date:<span className="text-red-500">*</span></label>
                    <input type="date" id="applieddate" placeholder="Your Name" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 referencefield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="reference">If reference,Employee ID:<span className="text-red-500">*</span></label>
                <input type="text" id="reference" placeholder="Your Reference ID" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>
            
            <div class="mb-4 cctcfield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="cctc">Current CTC:<span className="text-red-500">*</span></label>
                <input type="text" id="cctc" placeholder="Your Current CTC" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>
            
            <div class="mb-4 ectcfield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="ectc">Expected CTC:<span className="text-red-500">*</span></label>
                <input type="text" id="ectc" placeholder="Your Expected CTC" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>

            <div class="mb-4 joindatafield">
                    <label class="block text-gray-700 text-sm font-medium mb-2" for="joiningdate">Joining Date:<span className="text-red-500">*</span></label>
                    <input type="date" id="joiningdate" placeholder="Your Name" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>
            
            <div class="mb-4 referencefield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="precompany">Previous Company:<span className="text-red-500">*</span></label>
                <input type="text" id="precompany" placeholder="Your Prevoius Company" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>
            
            <div class="mb-4 referencefield">
                <label class="block text-gray-700 text-sm font-medium mb-2" for="positionname">Position Name:<span className="text-red-500">*</span></label>
                <input type="text" id="positionname" placeholder="Your Position Name" className="border border-gray-300 focus:ring-1 focus:ring-teal-200 focus:outline-none p-2 rounded w-full" required />
            </div>
        </div>
      </div>
      <div className="btn text-center">
      <button className='bg-teal-400 hover:cursor-pointer hover:scale-105 duration-100 ease-in-out mb-3 px-8 text-white rounded p-1' type="submit">Submit</button>

      </div>
    </form>
    </>
  )
}

export default RegistrationForm