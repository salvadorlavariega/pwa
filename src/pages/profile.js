import { useState, useEffect } from 'react'
import PageTw from 'src/components/page-tw'
import Article from 'src/components/article'

const Profile = () => {
	const [uiState, setUiState] = useState(null)
	const [formState, setFormState] = useState(initialState)

	useEffect(() => {
		console.log('##Profile-En login.useEffect')
		checkUser()
		function checkUser() {
			console.log('##Profile')
		}
	}, [])
	const onChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<PageTw>
			<section
				className='border border-y-0 border-gray-800'
				style={{ maxWidth: '600px;' }}
			>
				{/**  <!--Content (Center)-->*/}
				<aside>
					<h1 className='px-5'>This is Profile</h1>
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
}

const initialState = { email: '', password: '', authCode: '' }

export default Profile
