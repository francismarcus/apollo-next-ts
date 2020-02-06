import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

export default ({ percent }: { percent: any }) => {
	const theme = useContext(ThemeContext);

	return (
		<Container>
			<Progress
				percent={percent > 100 ? 100 : percent}
				theme={{
					default: {
						color: '#00A69',
						trailColor: `${theme.type === 'dark' ? '#1b242d' : '#efefef'}`,
						symbol: ' '
					},
					active: {
						symbol: '🙌',
						color: '#fbc630',
						trailColor: `${theme.type === 'dark' ? '#1b242d' : '#efefef'}`
					},
					success: {
						symbol: '💪',
						color: `${theme.color}`
					}
                }}
			/>
		</Container>
	);
};

const Container = styled.div`
width: 250px;
height: 100px;
margin-left: 20px;
`;
