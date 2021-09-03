import Page from '@/components/page'
import PageTw from '@/components/page-tw'
import Portrait from '@/components/Owner/portait'

const Profile = () => (
	<PageTw>       
        <section className="border border-y-0 border-gray-800" style={{maxWidth:"600px;"}}>         
            <aside>
                <Portrait/>
            </aside>
        </section>


            
    </PageTw>

)

export default Profile
