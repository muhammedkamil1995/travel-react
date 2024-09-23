import React from 'react';

const MainContent = () => (
    <main className="p-8">
      <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First Destination */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/france.png" alt="Paris, France" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Paris, France</h3>
                    <p className="text-gray-600">Explore the city of love with its iconic landmarks like the Eiffel Tower, Louvre Museum, and charming cafes.</p>
                </div>

                {/* Second Destination */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/italy.png" alt="Rome, Italy" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Rome, Italy</h3>
                    <p className="text-gray-600">Immerse yourself in the rich history and architecture of Rome, from the Colosseum to the Vatican City.</p>
                </div>

                {/* Third Destination */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/turky.png" alt="Istanbul, Turkey" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Istanbul, Turkey</h3>
                    <p className="text-gray-600">Experience the fusion of cultures in Istanbul, where East meets West, and visit the iconic Hagia Sophia and bustling bazaars.</p>
                </div>
            </div>
        </section>


        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Hotel 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/rav.png" alt="Rav Hotel" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Rav Hotel</h3>
                    <p className="text-gray-600">Experience luxury and comfort at Rav Hotel, where exceptional service meets modern amenities.</p>
                    <p className="text-gray-800 font-bold mt-2">$100 per night</p>
                </div>
                {/* Hotel 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/marin.png" alt="Hotel Paradise" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Hotel Paradise</h3>
                    <p className="text-gray-600">A luxurious escape with stunning views.</p>
                    <p className="text-gray-800 font-bold mt-2">$150 per night</p>
                </div>
                {/* Hotel 3 */}
                <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                    <img src="src/assets/img/hotel/whitglass.png" alt="Sunset Inn" className="w-full h-48 object-cover rounded-t-lg shadow-lg" />
                    <h3 className="text-xl font-bold mt-4">Sunset Inn</h3>
                    <p className="text-gray-600">Cozy and comfortable stay near the beach.</p>
                    <p className="text-gray-800 font-bold mt-2">$120 per night</p>
                </div>
            </div>
        </section>


        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
                {/* Repeat for each review */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600">"This hotel was amazing! Highly recommend it."</p>
                <p className="text-gray-800 font-bold mt-2">- Customer Name</p>
                </div>
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

export default MainContent;
