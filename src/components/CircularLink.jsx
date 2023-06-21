import './CircularLink.css';

function CircularLink(props) {
	//scalar must be a numeric value between 0 and 1
	const { title, link, image, textImage, scale = 2} = props;
	
	// not used anymore since im scaling the absolutely positioned parent div but when i remove this
	// .overlay-background div stops working properly in this component
	const scales = {
		0: 'scale-[0]',
		'0.05': 'scale-[0.05]',
		'0.1': 'scale-[0.1]',
		'0.15': 'scale-[0.15]',
		'0.2': 'scale-[0.2]',
		'0.25': 'scale-[0.25]',
		'0.3': 'scale-[0.3]',
		'0.35': 'scale-[0.35]',
		'0.4': 'scale-[0.4]',
		'0.45': 'scale-[0.45]',
		'0.5': 'scale-[0.5]',
		'0.55': 'scale-[0.55]',
		'0.6': 'scale-[0.6]',
		'0.65': 'scale-[0.65]',
		'0.7': 'scale-[0.7]',
		'0.75': 'scale-[0.75]',
		'0.8': 'scale-[0.8]',
		'0.85': 'scale-[0.85]',
		'0.9': 'scale-[0.9]',
		'0.95': 'scale-[0.95]',
		1: 'scale-[1]'
	}

	return (
		<a href={`${link}.html`} className={`${title !== "redeem" ? `circular-link ${link}` : `circular-link-redeem`}  relative overflow-clip block aspect-square border border-primary rounded-full cursor-pointer ${scales[scale]}`}>
			<div className="overlay-background z-10" />
			<img
				src={`/nav-rings/${textImage}`}
				className="absolute top-1/2 left-1/2 md:scale-95 text-ring"
			/>
			<div className={`
			relative aspect-square flex items-center justify-center border-primary border rounded-full overflow-hidden 
			m-4 p-3
			md:m-6 md:p-6 container-icon ${title !== 'redeem' ? 'md:m-4' : ''}
			`}>
				<img
					src={`/nav-icons/${image}`}
					className={`${title !== "redeem" && `circular-link-img`} aspect-square z-0 max-w-[70px] md:max-w-[150px]`}
				/>
				<div
					className="title-container absolute left-0 top-0 z-10 bg-primary translate-y-full w-full h-full flex items-center justify-center rounded-full">
					<h5 className="text-black text-center uppercase lig text-[92%] md:text-[130%]">
						{title}
					</h5>
				</div>
			</div>
		</a>
	)
};

export default CircularLink;