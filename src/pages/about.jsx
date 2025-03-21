import "../Styles/About.css";

const About = () => {
	return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<div className='row example'>
					<div className='col'>
						<h2 className='title'>About</h2>
						<div className='mt-5'>
							<p className='description'>
								<strong>SOUNDING ICE: sensing frozen flows</strong> explores the
								signals of climate change found in and around the Yukon and
								Klondike Rivers—their confluences and histories.
							</p>
							<p className='description'>
								Produced in collaboration with students from the Yukon School of
								Visual Arts, Dawson City. Realised by Susan Schuppli during the
								winter of 2025.
							</p>
							<p className='description'>
								This acoustic cartography is a way of doing-mapping ‘otherwise’.
								A collective practice of sounding and listening to the
								transmissional waves, sonic seepages, and vibrational resonances
								of environmental matter in a state of transformation and change.
							</p>
							<p className='description'>
								It is also a way of tuning into the embodied and perceptual
								experiences of living communities as well as a method for
								exploring the deep-currents of histories and memories that flow
								through these ancestral lands.
							</p>
							<p className='description'>
								Sound maps ‘sense’ conditions in space and over time. They can
								pulsate and radiate—moving acoustic information through the
								atmospheric mediums of air and the densities of water. They can
								also bounce bathymetric signals and seismic tremblings from
								bedrock back to the frozen rock we call ice.
							</p>
							<p className='description'>
								Sound maps defy the cartographic conventions and logics of the
								‘line’ that inscribe powerful and violent asymmetries into land;
								converting relational ecologies into property that can be owned
								and resources that can be extracted.
							</p>
							<p className='description'>
								The practice of ‘sounding’ refers both to the taking of depth
								measurements in a body of water as well as the sourcing of
								‘evidence’ needed in a preliminary step towards taking action.
								This project and website documents our collective efforts to
								‘sound out’ local expressions and histories of the
								environment—Earth evidence—and its urgent calls to action.
							</p>
							<p className='description'>
								<strong>Students:</strong> Jove Boutin, Grace Bruder, Bronwyn
								Butterfield, Sam Huxley, Andrew Kearns, Milo Jackson, Lacey
								Leforte, Gabe McLellan, Sadie Wasylko.
							</p>
							<p className='description'>
								Supported by Yukon School of Visual Arts, the Klondike Institute
								of Art & Culture (KIAC), Yukon University, with funding support
								from a Social Science and Humanities Research Council of Canada
								(SSHRC) Connections Grant / Toronto Biennial of Art.
							</p>
							<p className='description'>
								Special thanks to Nicole Rayburn and Aubyn O’Grady, both
								instructors at SOVA and to Faiza Ahmed Khan in Delhi, India, my
								collaborator on the Listening to Ice research project.
							</p>
							<p className='description'>
								Project Credits: Drone Footage by John Howland & Bobby Ronka.
								Website designed by{" "}
								<a
									href='mailto:arquitectoikerluna@gmail.com'
									className='description_forlinks_about'
								>
									Iker Luna.
								</a>
							</p>
						</div>
						<div className='mt-5'>
							<h3 className='subtitles'>Biographies</h3>
							<hr></hr>
							<p className='description'>
								<strong>Susan Schuppli</strong> is a researcher and artist based
								in the UK. Her fieldwork and documentary film practice is
								situated at the intersections between environmental struggles,
								climate science, and affected communities with a contemporary
								focus on the cryosphere and the politics of cold. Earlier
								projects examined material evidence from conflict zones to
								nuclear disasters. Recent films include: Moving Ice, Signals
								from Svalbard, Listening to Ice, Gondwana, Arctic Archipelago
								and Ice Cores. Creative projects have been exhibited throughout
								Europe, Asia, Canada, and the US. She has published widely
								within the context of media and politics and is author of the
								book, Material Witness: Media, Forensics, Evidence published by
								MIT Press in 2020.
							</p>
							<p className='description'>
								Schuppli is Professor and Director of the{" "}
								<a
									href='https://research-architecture.org/'
									target='_blank'
									rel='noopener noreferrer'
									className='description_forlinks_about'
								>
									Centre for Research Architecture
								</a>
								, Goldsmiths University of London and is also an investigative
								researcher with the human rights agency{" "}
								<a
									href='https://forensic-architecture.org/'
									target='_blank'
									rel='noopener noreferrer'
									className='description_forlinks_about'
								>
									Forensic Architecture
								</a>{" "}
								recipient of the 2024 Right Livelihood Award. She received her
								BA from Simon Fraser University, MFA from UCSD, and PhD in
								Cultural Studies & Research Architecture, from Goldsmiths.
							</p>

							<p className='description'>
								<strong>Nicole Rayburn</strong> is an artist whose practice is a
								blundering convergence of video, text, and still imagery. Often
								via appropriation and obsessive repetition, her work humorously
								addresses ideas around ‘the other’, human/non-human relations,
								and concepts of boundary and transgression through the lens of
								sci-fi, history, religion, and popular culture. She is the
								founder and producer of Cold Cuts Video Festival, and is an
								instructor in Time-based Media, 2D Studio, & Visual Studies at
								SOVA. Nicole holds an MFA from{" "}
								<a
									href='https://www.uwo.ca/visarts/'
									target='_blank'
									rel='noopener noreferrer'
									className='description_forlinks_about'
								>
									Western University.
								</a>
							</p>
							<p className='description'>
								<strong>Iker Luna</strong> is an architect and designer based in
								Costa Rica whose research explores political repression and
								state-sponsored violence in Nicaragua as expressed through the
								built environment. Iker holds an MAArch from the Institute for
								Advanced Architecture of Catalonia. He teaches at the University
								of Costa Rica in the Architecture School and is currently
								pursuing a{" "}
								<a
									href='https://www.gold.ac.uk/architecture/programmes/'
									target='_blank'
									rel='noopener noreferrer'
									className='description_forlinks_about'
								>
									MA in the Centre for Research Architecture at Goldsmiths,
									University of London.
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
