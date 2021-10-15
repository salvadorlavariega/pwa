import Head from 'next/head'
import Appbar from 'src/components/appbar'
import BottomNav from 'src/components/bottom-nav'
import LeftMenu from 'src/components/PageLayout/leftMenu'

interface Props {
	title?: string
	children: React.ReactNode
}

const PageTw = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Rice Bowl | {title}</title>
			</Head>
		) : null}

		<Appbar />

		<div className='p-relative h-screen  pb-16'>
			<div className='h-screen w-screen flex justify-center flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden'>
				<LeftMenu />
				<hr className='border-gray-800' />
				<main
					className='sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto max-w-screen-sm pt-20'
					role='main'
				>
					<div className='max-w-screen-sm'>{children}</div>
				</main>
			</div>
		</div>

		<BottomNav />
	</>
)

export default PageTw
