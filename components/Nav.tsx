import React, { useState, useEffect } from 'react';
import Link from 'next/Link';
import Moon from 'components/Moon';
import styled from 'styled-components';
// Link href="/signup"><A> Register instead </A></Link>
export default () => {
	const [state, setState] = useState(false);

	// useEffect(() => {
	// 	window.addEventListener('scroll', navOnScroll);

	// 	return () => window.removeEventListener('scroll', navOnScroll);
	// }, []);

	// const navOnScroll = () => {
	// 	if (window.scrollY > 20) {
	// 		setState(true);
	// 	} else {
	// 		setState(false);
	// 	}
	// };

	return (
		<FixedNav className={state ? 'nav scroll' : 'nav'}>
			<Container>
				<BrandContainer>
					<Link href="/">
						<>
							<FavIcon src={require('public/flexed.png')} alt="Floppy Diskette" />
							<span className="text">getmyprogram</span>
						</>
					</Link>
				</BrandContainer>
				{/* <div className="links">
					{links.map(link => (
						<Link key={link.name} href={link.link} activeClassName="active">
							{link.name}
						</Link>
					))}
                </div> */}
				<Moon />
			</Container>
		</FixedNav>
	);
};

export const FavIcon = styled.img`
	height: 36px;
	width: 56px;
	min-width: 23px;
	margin-right: 1rem;
	margin-bottom: 0;
`;

const FixedNav = styled.nav`
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	background: ${({ theme }) => theme.bgColor};

	// &.scroll {
	//     box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
	//   }
`;

const Container = styled.div`
	padding: 0 1.5rem;
	height: 55px;
	max-width: $width;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: height 0.3s ease;
`;

const BrandContainer = styled.div`
	display: flex;
	align-items: center;
	color: {({ theme }) => theme.color};
	margin-right: 0;
	font-weight: 700;
	font-size: ${({ theme }) => theme.fz.large};
`;
