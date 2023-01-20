import React from 'react';

const CTA = ({ title, icon, styles }) => {
	return (
		<button
			type="button"
			className={`flex bg-primary text-grayIsh items-center text-xs md:text-sm p-2 md:px-6 rounded-sm shadow-lg shadow-lightYellow-500/50 transition duration-300 hover:bg-primary hover:text-lightYellow border-2 border-lightYellow hover:border-white tracking-wide ${styles}`}
		>
			<a href="">{title}</a>
			<span className="text-grayIsh text-lg ml-2">{icon}</span>
		</button>
	);
};

export default CTA;
