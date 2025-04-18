import React from "react";
import Header from "./markup/components/Header/Header"; // Adjusted to match your folder structure
import Hero from "./markup/components/Hero/Hero";
import Footer from "./markup/components/Footer/Footer";

const App = () => {
	return (
		<div className="font-sans text-gray-800">
			{/* Header */}
			<Header />
      <Hero />
      <Footer />

			{/* Hero Section
			<section className="bg-blue-50 p-10 text-center flex flex-col items-center">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">
					Unlock Your Potential with Industry-Leading Courses!
				</h1>
				<p className="max-w-xl text-gray-600 mb-6">
					Join thousands of learners growing with us. Courses designed by
					experts. Boost your skills and career today.
				</p>
				<button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
					Get started
				</button>
			</section> */}

			{/* Other sections go here... */}
		</div>
	);
};

export default App;
