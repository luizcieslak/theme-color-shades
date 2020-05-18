import * as React from 'react'
import './Logo.css'

interface LogoProps {
	setColor: Function
	props?: any
}

const SvgComponent: React.FC<LogoProps> = ({ setColor, props }) => {
	return (
		<>
			<svg {...props} viewBox='0 0 173.164 173.164' className='logo'>
				<defs>
					<clipPath id='prefix__a' transform='translate(-11.76 -3.244)'>
						<path
							d='M146.346.453S63.782-1.661 55.708 3.244C47.635 8.15-.966 76.294.015 77.381S16.98 119.44 16.98 119.44a49.193 49.193 0 0181.36-29.613l58.508-5.119z'
							fill='none'
						/>
					</clipPath>
				</defs>
				<title>{'Click in a color to change theme!'}</title>
				<g data-name='Layer 2'>
					<g data-name='Layer 1'>
						<ellipse
							cx={71.775}
							cy={45.902}
							rx={25.83}
							ry={43.291}
							transform='rotate(-20 71.775 45.902)'
							fill='#fedf00'
							onClick={() => setColor('#fedf00')}
							className='cursor'
						/>
						<ellipse
							cx={64.936}
							cy={49.091}
							rx={25.83}
							ry={43.291}
							transform='rotate(-30 64.936 49.09)'
							fill='#ffd10a'
							onClick={() => setColor('#ffd10a')}
							className='cursor'
						/>
						<ellipse
							cx={58.755}
							cy={53.419}
							rx={25.83}
							ry={43.291}
							transform='rotate(-40 58.755 53.42)'
							fill='#fdc010'
							onClick={() => setColor('#fdc010')}
							className='cursor'
						/>
						<ellipse
							cx={53.419}
							cy={58.755}
							rx={25.83}
							ry={43.291}
							transform='rotate(-50 53.42 58.755)'
							fill='#fcb216'
							onClick={() => setColor('#fcb216')}
							className='cursor'
						/>
						<ellipse
							cx={49.091}
							cy={64.936}
							rx={25.83}
							ry={43.291}
							transform='rotate(-60 49.09 64.936)'
							fill='#f9a01b'
							onClick={() => setColor('#f9a01b')}
							className='cursor'
						/>
						<ellipse
							cx={45.902}
							cy={71.775}
							rx={25.83}
							ry={43.291}
							transform='rotate(-70 45.902 71.776)'
							fill='#f7921e'
							onClick={() => setColor('#f7921e')}
							className='cursor'
						/>
						<ellipse
							cx={43.949}
							cy={79.065}
							rx={25.83}
							ry={43.291}
							transform='rotate(-80 43.949 79.064)'
							fill='#f6871f'
							onClick={() => setColor('#f6871f')}
							className='cursor'
						/>
						<ellipse
							cx={43.291}
							cy={86.582}
							rx={43.291}
							ry={25.83}
							fill='#f47920'
							onClick={() => setColor('#f47920')}
							className='cursor'
						/>
						<ellipse
							cx={43.949}
							cy={94.099}
							rx={43.291}
							ry={25.83}
							transform='rotate(-10 43.949 94.1)'
							fill='#f15a22'
							onClick={() => setColor('#f15a22')}
							className='cursor'
						/>
						<ellipse
							cx={45.902}
							cy={101.388}
							rx={43.291}
							ry={25.83}
							transform='rotate(-20 45.902 101.388)'
							fill='#ef4223'
							onClick={() => setColor('#ef4223')}
							className='cursor'
						/>
						<ellipse
							cx={49.091}
							cy={108.227}
							rx={43.291}
							ry={25.83}
							transform='rotate(-30 49.09 108.227)'
							fill='#ee3424'
							onClick={() => setColor('#ee3424')}
							className='cursor'
						/>
						<ellipse
							cx={53.419}
							cy={114.409}
							rx={43.291}
							ry={25.83}
							transform='rotate(-40 53.42 114.409)'
							fill='#ee2a42'
							onClick={() => setColor('#ee2a42')}
							className='cursor'
						/>
						<ellipse
							cx={58.755}
							cy={119.745}
							rx={43.291}
							ry={25.83}
							transform='rotate(-50 58.755 119.745)'
							fill='#e5286f'
							onClick={() => setColor('#e5286f')}
							className='cursor'
						/>
						<ellipse
							cx={64.936}
							cy={124.073}
							rx={43.291}
							ry={25.83}
							transform='rotate(-60 64.936 124.073)'
							fill='#d22a8d'
							onClick={() => setColor('#d22a8d')}
							className='cursor'
						/>
						<ellipse
							cx={71.775}
							cy={127.262}
							rx={43.291}
							ry={25.83}
							transform='rotate(-70 71.775 127.262)'
							fill='#b54599'
							onClick={() => setColor('#b54599')}
							className='cursor'
						/>
						<ellipse
							cx={79.064}
							cy={129.215}
							rx={43.291}
							ry={25.83}
							transform='rotate(-80 79.064 129.215)'
							fill='#96469a'
							onClick={() => setColor('#96469a')}
							className='cursor'
						/>
						<ellipse
							cx={86.582}
							cy={129.873}
							rx={25.83}
							ry={43.291}
							fill='#713e98'
							onClick={() => setColor('#713e98')}
							className='cursor'
						/>
						<ellipse
							cx={94.099}
							cy={129.215}
							rx={25.83}
							ry={43.291}
							transform='rotate(-10 94.1 129.215)'
							fill='#514099'
							onClick={() => setColor('#514099')}
							className='cursor'
						/>
						<ellipse
							cx={101.388}
							cy={127.262}
							rx={25.83}
							ry={43.291}
							transform='rotate(-20 101.388 127.262)'
							fill='#2a3693'
							onClick={() => setColor('#2a3693')}
							className='cursor'
						/>
						<ellipse
							cx={108.227}
							cy={124.073}
							rx={25.83}
							ry={43.291}
							transform='rotate(-30 108.227 124.073)'
							fill='#2f459c'
							onClick={() => setColor('#2f459c')}
							className='cursor'
						/>
						<ellipse
							cx={114.409}
							cy={119.745}
							rx={25.83}
							ry={43.291}
							transform='rotate(-40 114.409 119.745)'
							fill='#2c4ea1'
							onClick={() => setColor('#2c4ea1')}
							className='cursor'
						/>
						<ellipse
							cx={119.745}
							cy={114.409}
							rx={25.83}
							ry={43.291}
							transform='rotate(-50 119.745 114.409)'
							fill='#2560ad'
							onClick={() => setColor('#2560ad')}
							className='cursor'
						/>
						<ellipse
							cx={124.073}
							cy={108.227}
							rx={25.83}
							ry={43.291}
							transform='rotate(-60 124.073 108.227)'
							fill='#1074bc'
							onClick={() => setColor('#1074bc')}
							className='cursor'
						/>
						<ellipse
							cx={127.262}
							cy={101.388}
							rx={25.83}
							ry={43.291}
							transform='rotate(-70 127.262 101.388)'
							fill='#0d88c3'
							onClick={() => setColor('#0d88c3')}
							className='cursor'
						/>
						<ellipse
							cx={129.215}
							cy={94.099}
							rx={25.83}
							ry={43.291}
							transform='rotate(-80 129.215 94.1)'
							fill='#019bcc'
							onClick={() => setColor('#019bcc')}
							className='cursor'
						/>
						<ellipse
							cx={129.873}
							cy={86.582}
							rx={43.291}
							ry={25.83}
							fill='#0cafcf'
							onClick={() => setColor('#0cafcf')}
							className='cursor'
						/>
						<ellipse
							cx={129.215}
							cy={79.065}
							rx={43.291}
							ry={25.83}
							transform='rotate(-10 129.215 79.065)'
							fill='#36ba9b'
							onClick={() => setColor('#36ba9b')}
							className='cursor'
						/>
						<ellipse
							cx={127.262}
							cy={71.775}
							rx={43.291}
							ry={25.83}
							transform='rotate(-20 127.262 71.776)'
							fill='#30b450'
							onClick={() => setColor('#30b450')}
							className='cursor'
						/>
						<ellipse
							cx={124.073}
							cy={64.936}
							rx={43.291}
							ry={25.83}
							transform='rotate(-30 124.073 64.936)'
							fill='#1cb24b'
							onClick={() => setColor('#1cb24b')}
							className='cursor'
						/>
						<ellipse
							cx={119.745}
							cy={58.755}
							rx={43.291}
							ry={25.83}
							transform='rotate(-40 119.745 58.755)'
							fill='#45b649'
							onClick={() => setColor('#45b649')}
							className='cursor'
						/>
						<path
							d='M142.236 20.256c-17.125-3.519-28.821 5.925-40.848 20.258-12.026 14.332-8.103 30.133-14.806 46.068a49.193 49.193 0 0055.654-66.326z'
							fill='#73bf44'
							onClick={() => setColor('#73bf44')}
							className='cursor'
						/>
						<path
							d='M129.873 11.6c-17.476-.492-24.86 12.383-34.215 28.586s-12.542 26.81-9.076 46.396a49.193 49.193 0 0043.29-74.982z'
							fill='#9dcb3b'
							onClick={() => setColor('#9dcb3b')}
							className='cursor'
						/>
						<path
							d='M116.195 5.222c-17.296 2.55-14.138 9.338-20.537 26.92-6.399 17.581-1.559 32.794-9.076 54.44a49.193 49.193 0 0029.613-81.36z'
							fill='#bad532'
							onClick={() => setColor('#bad532')}
							className='cursor'
						/>
						<path
							d='M101.617 1.315C85.027 6.83 88.824 23.541 85.575 41.966s-2.459 27.692 1.007 44.616a49.193 49.193 0 0015.035-85.267z'
							fill='#dae021'
							onClick={() => setColor('#dae021')}
							className='cursor'
						/>
					</g>
				</g>
				<g data-name='Layer 2'>
					<g clipPath='url(#prefix__a)' data-name='Layer 1'>
						<path
							d='M86.582 0c-15.38 8.312-18.675 24.094-18.675 42.804s9.022 29.802 18.675 43.778a49.193 49.193 0 000-86.582z'
							fill='#F6F822'
							onClick={() => setColor('#F6F822')}
							className='cursor'
						/>
						<ellipse
							cx={79.064}
							cy={43.949}
							rx={25.83}
							ry={43.291}
							transform='rotate(-10 79.064 43.949)'
							fill='#fdec0a'
							onClick={() => setColor('#fdec0a')}
							className='cursor'
						/>
						<ellipse
							cx={83.535}
							cy={49.146}
							rx={25.83}
							ry={43.291}
							transform='rotate(-20 68.456 80.87)'
							fill='#fedf00'
							onClick={() => setColor('#fedf00')}
							className='cursor'
						/>
						<ellipse
							cx={76.696}
							cy={52.335}
							rx={25.83}
							ry={43.291}
							transform='rotate(-30 64.763 72.657)'
							fill='#ffd10a'
							onClick={() => setColor('#ffd10a')}
							className='cursor'
						/>
						<ellipse
							cx={70.515}
							cy={56.663}
							rx={25.83}
							ry={43.291}
							transform='rotate(-40 60.178 71.196)'
							fill='#fdc010'
							onClick={() => setColor('#fdc010')}
							className='cursor'
						/>
						<ellipse
							cx={65.179}
							cy={61.999}
							rx={25.83}
							ry={43.291}
							transform='rotate(-50 55.82 72.986)'
							fill='#fcb216'
							onClick={() => setColor('#fcb216')}
							className='cursor'
						/>
						<ellipse
							cx={60.851}
							cy={68.181}
							rx={25.83}
							ry={43.291}
							transform='rotate(-60 52.161 76.743)'
							fill='#f9a01b'
							onClick={() => setColor('#f9a01b')}
							className='cursor'
						/>
						<ellipse
							cx={57.661}
							cy={75.02}
							rx={25.83}
							ry={43.291}
							transform='rotate(-70 49.465 81.795)'
							fill='#f7921e'
							onClick={() => setColor('#f7921e')}
							className='cursor'
						/>
						<ellipse
							cx={55.708}
							cy={82.309}
							rx={25.83}
							ry={43.291}
							transform='rotate(-80 47.896 87.694)'
							fill='#f6871f'
							onClick={() => setColor('#f6871f')}
							className='cursor'
						/>
						<ellipse
							cx={43.291}
							cy={86.582}
							rx={43.291}
							ry={25.83}
							fill='#f47920'
							onClick={() => setColor('#f47920')}
							className='cursor'
						/>
						<ellipse
							cx={55.708}
							cy={97.343}
							rx={43.291}
							ry={25.83}
							transform='rotate(-10 31.288 162.929)'
							fill='#f15a22'
							onClick={() => setColor('#f15a22')}
							className='cursor'
						/>
					</g>
				</g>
			</svg>
		</>
	)
}

const Logo = React.memo(SvgComponent)
export default Logo
