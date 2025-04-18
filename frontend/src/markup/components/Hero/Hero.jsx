import React from "react";
import "./Hero.css"
import hero from "../../../assets/images/Hero/hero.jpeg";

function Hero() {
		return (
			<div>
				<section className="hero bg-blue-50 p-10 text-center flex flex-col items-center" style={{backgroundImage: `url${hero}`}}>
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
				</section>
			</div>
		);
	}

	export default Hero;