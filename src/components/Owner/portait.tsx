
const Portrait = () => {

    return (
        <>
        <div className="md:flex-shrink pt-3">
            
            <img className="w-full h-60" src="/images/7.jpg" alt=""/>
                 
        </div>
        <div className="pl-3 h-12">
            <img className="inline-block h-20 w-20  rounded-full border-2" style={{marginTop: "-7%"}} src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
        </div>
        <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white pr-1">
                Sonali Hirave
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    @ShonaDesign
                </span>
            </p>
        </div>
        <div className="px-6 py-3">
            <p className="text-base md:text-md width-auto font-medium text-white flex-shrink">
                Day 07 of the challenge I was wondering what I can do with so just started building
                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                <a className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
            </p>

        </div>
    </>
    );
}
export default Portrait;