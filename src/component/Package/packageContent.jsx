import React from 'react';

const PackageContent = () => (
  <main className="p-8">
    <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Package 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <img src="src/assets/img/hotel/beach.png" alt="Beach Vacation" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                <h3 className="text-xl font-bold mt-4">Beach Vacation</h3>
                <p className="text-gray-600">Relax on pristine beaches with all-inclusive amenities and activities.</p>
                <p className="text-gray-800 font-bold mt-2">$500 per person</p>
            </div>
            {/* Package 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <img src="src/assets/img/hotel/citytour.png" alt="City Tour" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                <h3 className="text-xl font-bold mt-4">City Tour</h3>
                <p className="text-gray-600">Explore the vibrant city life with guided tours to historical and modern attractions.</p>
                <p className="text-gray-800 font-bold mt-2">$750 per person</p>
            </div>
            {/* Package 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <img src="src/assets/img/hotel/adv.png" alt="Adventure Trip" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                <h3 className="text-xl font-bold mt-4">Adventure Trip</h3>
                <p className="text-gray-600">Experience thrill and excitement with activities like hiking, rafting, and more.</p>
                <p className="text-gray-800 font-bold mt-2">$1,000 per person</p>
            </div>
        </div>
    </section>


    <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Customer Testimonials</h2>
        <div className="flex flex-col items-center mt-4">
                <div className="text-center mb-2">
                    <p className="text-gray-800 font-bold">Vanessa Williams</p>
                    <p className="text-gray-500 text-sm">Satisfied Traveler</p>
                </div>
                <img src="src/assets/img/hotel/van.png" alt="Vanessa" className="w-12 h-12 rounded-full shadow-md" />
            </div>
        <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
            <p className="text-gray-600 italic">
                "Our experience with this package was nothing short of amazing. The attention to detail and quality of service exceeded our expectations. We felt truly valued and taken care of throughout the trip. Highly recommend it to anyone looking for a memorable adventure!"
            </p>
        </div>
    </section>



    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
      <form className="bg-white p-4 rounded-lg shadow-md">
        <input type="email" placeholder="Your email address" className="w-full p-2 border rounded mb-4" />
        <button type="submit" className="w-full bg-[#605DEC] text-white py-2 rounded">Sign Up</button>
      </form>
    </section>
  </main>
);

export default PackageContent;