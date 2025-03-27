import { useEffect, useRef } from "react";
import "../Styles/Home.css";

const Home = () => {
	const videoRef = useRef(null);
	const videoUrl =
		"https://res.cloudinary.com/dw1ht0zfd/video/upload/v1743080078/test2_gr5brf.mp4";

	useEffect(() => {
		const video = videoRef.current;
		const playVideo = () => video.play();
		video.addEventListener("canplay", playVideo);
		return () => {
			video.removeEventListener("canplay", playVideo);
		};
	}, []);

	return (
		<div className='home-container'>
			<div className='video-container'>
				<video
					ref={videoRef}
					src={videoUrl}
					autoPlay
					loop
					muted
					playsInline
					className='background-video'
				/>
			</div>
			<div className='content-overlay'>
				<div className='home-content'>
					<h1 className='titlehome'>DEPTFORD ARCHIVES</h1>
					<p className='description1'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
					<p className='description2'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. 
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
