
const Portrait = () => {

    return (
        <>
        <div className="md:flex-shrink pt-3">
            
            <img className="w-full h-60" src="/images/7.jpg" alt=""/>
                 
        </div>
        <div className="pl-3 h-12">
            <img className="inline-block h-20 w-20  rounded-full border-2" style={{transform: "translateY(-50%)"}} src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
        </div>
        <div className="ml-3">
            <p className="text-base leading-6 font-medium text-white pr-1">
                Sonali Hirave
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    @ShonaDesign
                </span>
            </p>
        </div>
        <div className="px-6">
            <p className="text-base md:text-md width-auto font-medium text-white flex-shrink">
                Day 07 of the challenge I was wondering what I can do with so just started building
                Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
                <a className="text-blue-400"> #WomenWhoCode #CodeNewbie</a>
            </p>

        </div>
        <hr className="border-gray-800 border-4"/>
                            
        <div className="grid grid-cols-3 w-full px-5 px-5 my-3">
            <button className="flex flex-row justify-center items-center w-full space-x-3">
                <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                </svg>
                <span className="font-semibold text-lg text-gray-600">Pics</span></button>
            
            <button className="flex flex-row justify-center items-center w-full space-x-3">
                <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                        </path>
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>                                        
                <span className="font-semibold text-lg text-gray-600">Video</span>
            </button>
            
            <button className="flex flex-row justify-center items-center w-full space-x-3">
                    <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                    <span className="font-semibold text-lg text-gray-600">vip</span>
            </button>
        </div>
    </>
    );
}
export default Portrait;