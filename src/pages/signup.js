import { useState, useEffect } from 'react'
import Login from '../components/Login'

export default function SignUp() {
	const [uiState, setUiState] = useState('signIn')
	const [formState, setFormState] = useState(initialState)
	const [user, setUser] = useState(null)
	let email = ''

	function checkUser() {
		// this was async function
		try {
			/*const user = await Auth.currentAuthenticatedUser()
			setUser(user)
			email = user.attributes.email*/
			setUiState('signIn')
		} catch (error) {
			setUser(null)
			setUser('signIn')
		}
	}

	const onChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				{uiState === 'signIn' && (
					<div>
						<Login onChange={onChange} setUiState={setUiState} />
					</div>
				)}
				{uiState === 'signedIn' && (
					<div>
						<p>Welcome #UserFake</p>
						<button
							onClick={() => {
								setUiState('signIn')
								setUserState(null)
							}}
						>
							Sign Out
						</button>
					</div>
				)}
				{uiState === 'signedOut' && (
					<div>
						<p>Hello New User</p>
						<button>Sign In</button>
					</div>
				)}
			</div>
		</div>
	)
}

const initialState = { email: '', password: '', authCode: '' }
