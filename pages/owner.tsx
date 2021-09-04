import { useState, useRef } from 'react'
import Page from '@/components/page'
import PageTw from '@/components/page-tw'
import Portrait from '@/components/Owner/portait'
import classnames from 'classnames'

const Profile = () => {
    const PHOTOS = 1;
    const VIDEOS = 2;
    const VIP = 3;

    const [showTab, setShowTab] = useState(PHOTOS);
    let hrBorderButton = useRef(null);

    const renderTab = () =>{
        const hr = hrBorderButton.current
       

        if(showTab == VIDEOS){
            hr.className ="border-green-400 border-2 w-1/3 " 
            hr.style.marginLeft = "33.33%"
            return <h2>Videos</h2>
        }

        else if(showTab == VIP){
            hr.className ="border-red-600 border-2 w-1/3" 
            hr.style.marginLeft = "66.66%"
            return <h2>VIP</h2>
        } else  if(hr){
            hr.className ="border-blue-400 border-2 w-1/3" 
            hr.style.marginLeft = "0px"
        }
            
        return <h2>Photos</h2>
    }
 
    return (
    
        <PageTw>       
            <section className="border border-y-0 border-gray-800" style={{maxWidth:"600px;"}}>         
                <aside>
                    <Portrait/>
                    <hr className="border-gray-800 border-4"/>
                                
                    <div className="grid grid-cols-3 w-full px-5 px-5 my-3">
                        <button className={classnames("flex flex-row justify-center items-center w-full space-x-3 hover:text-blue-400 ", 
                            {
                            "text-blue-400": showTab === PHOTOS
                            })}
                            onClick={() => setShowTab(PHOTOS)}>
                            <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                            </svg>
                            <span className="font-semibold text-lg text-gray-600">Pics</span></button>
                        
                        <button className="flex flex-row justify-center items-center w-full space-x-3 hover:text-green-400 "
                            onClick={() => setShowTab(VIDEOS)}>
                            <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                    </path>
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>                                        
                            <span className="font-semibold text-lg text-gray-600">Video</span>
                        </button>
                        
                        <button className="flex flex-row justify-center items-center w-full space-x-3 hover:text-red-600 transition duration-350 ease-in-out"
                            onClick={() => setShowTab(VIP)}>
                                <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span className="font-semibold text-lg text-gray-600">vip</span>
                        </button>
                    </div>
                    <hr ref={hrBorderButton} className= "border-blue-400 border-2 w-1/3"/>
                    </aside>

                    <div>
                        {renderTab()}
                    </div>
                    </section>


                
        </PageTw>

    );
}

export default Profile
