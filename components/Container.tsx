import styled from 'styled-components';

export const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FlexColumnContainer = styled(FlexContainer)`
	flex-direction: column;
`;
