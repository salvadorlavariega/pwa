import { useState, useEffect } from 'react'
import Page from 'src/components/page'
import Link from 'next/link'
import { Auth } from 'aws-amplify'

export default function SignIn() {
	return (
		<div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img
						className='mx-auto h-12 w-auto'
						src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
						alt='Workflow'
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold'>Sign in</h2>
					<div className='rounded-t mb-0 px-6 py-6'>
						<div className='text-center mb-3'>
							<h6 className='text-blueGray-500 text-sm font-bold'>with</h6>
						</div>
						<div className='btn-wrapper text-center'>
							<button
								className='border border-gray-300 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
								type='button'
							>
								<img
									alt='...'
									className='w-5 mr-1'
									src='/images/facebookicon.png'
								/>
								Facebook
							</button>
							<button
								className='border border-gray-300 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
								type='button'
							>
								<img
									alt='...'
									className='w-5 mr-1'
									src='https://demos.creative-tim.com/notus-nextjs/img/google.svg'
								/>
								Google
							</button>
						</div>
						<hr className='mt-6 border-b-1 border-blueGray-300' />
					</div>
					<p className='mt-2 text-center text-sm'>
						Or sign in with credentials{' '}
					</p>
				</div>
				<form className='mt-8 space-y-6' action='#' method='POST'>
					<input type='hidden' name='remember' defaultValue='true' />
					<div className='shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<input
								id='email-address'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='bg-gray-800 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Email address'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='bg-gray-800 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember-me'
								name='remember-me'
								type='checkbox'
								className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
							/>
							<label htmlFor='remember-me' className='ml-2 block text-sm'>
								Remember me
							</label>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<span
									className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
									aria-hidden='true'
								/>
							</span>
							Sign in
						</button>
					</div>

					<div className='flex items-center justify-between'>
						<div className='text-sm'>
							<Link href='/recover'>
								<a
									href='#'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Forgot your password?
								</a>
							</Link>
						</div>

						<div className='text-sm'>
							<Link href='/signup'>
								<a
									href='#'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Create new account
								</a>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
