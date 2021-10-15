import Page from 'src/components/page'
import PageTw from 'src/components/page-tw'
import Article from 'src/components/article'

const Profile = () => (
	<PageTw>
		<section
			className='border border-y-0 border-gray-800'
			style={{ maxWidth: '600px;' }}
		>
			{/**  <!--Content (Center)-->*/}
			<aside>
				<h1 className='px-5'>This content is IN aside</h1>
				<ul className='list-none'>
					<li>
						<Article />
						<hr className='border-gray-800'></hr>
					</li>
				</ul>
			</aside>
		</section>
	</PageTw>
)

export default Profile
