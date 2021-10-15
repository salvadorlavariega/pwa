export default function BordeTab(props) {
	console.log(props.margin)

	const getMargin = {
		vip: '66.66%',
		videos: '33.33%',
		photos: '0px',
	}

	const getBG = {
		vip: ' border-red-600',
		videos: ' border-green-400',
		photos: ' border-blue-400',
	}
	//hr.className ="border-green-400 border-2 w-1/3 "
	//"33.33%"   ${props => ('right' === props.margin ? "66.33" : "33.33 !important")};

	//hr.className ="border-red-600 border-2 w-1/3"
	//"66.66%"

	// hr.className ="border-blue-400 border-2 w-1/3"
	// "0px"

	return (
		<hr
			className={props.className + getBG[props.margin]}
			style={{ marginLeft: getMargin[props.margin] }}
		/>
	)
}
