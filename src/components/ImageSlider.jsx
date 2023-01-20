import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { imgSlider } from '../constantes';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const lenght = slides.lenght;

	const nextSlide = () => {
		const isLastSlide = current === slides.length - 1;
		const newIndex = isLastSlide ? 0 : current + 1;
		setCurrent(newIndex);
	};

	const prevSlide = () => {
		const isFirstSlide = current === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
		setCurrent(newIndex);
	};
	console.log(current);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="flex relative justify-center items-center w-full">
			<div className="flex relative overflow-hidden rounded-lg w-full">
				<IoIosArrowBack
					className="absolute w-12 h-12 top-1/2 text-grayIsh cursor-pointer z-50"
					onClick={prevSlide}
				/>
				{imgSlider.map((image, index) => {
					return (
						<div
							className={
								index === current
									? 'opacity-1 transition duration-200'
									: 'opacity-0'
							}
							key={index}
						>
							{index === current && (
								<img
									src={image.img}
									alt="products"
									className="w-full object-cover"
								/>
							)}
						</div>
					);
				})}
				<IoIosArrowForward
					className="absolute w-12 h-12 top-1/2 right-0 text-grayIsh"
					onClick={nextSlide}
				/>
			</div>
		</div>
	);
};

export default ImageSlider;
