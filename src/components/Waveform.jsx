// Waveform.jsx
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audioUrl }) => {
	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);

	useEffect(() => {
		if (waveformRef.current && audioUrl) {
			wavesurfer.current = WaveSurfer.create({
				container: waveformRef.current,
				waveColor: "#ddd",
				progressColor: "#333",
				cursorColor: "#333",
				height: 80,
				barWidth: 2,
			});
			wavesurfer.current.load(audioUrl);
		}
		return () => {
			if (wavesurfer.current) wavesurfer.current.destroy();
		};
	}, [audioUrl]);

	return <div ref={waveformRef} />;
};

export default Waveform;
