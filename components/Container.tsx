import styled from 'styled-components';

export const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FlexColumnContainer = styled(FlexContainer)`
	flex-direction: column;
`;

export const Hero = styled.div`
	height: 100vh;
	min-height: 550px;
	display: flex;
	flex-direction: column;
	gap: 6rem;
`;

export const Section = styled.section`
	padding: 3rem 2rem 5rem;
`;

export const InnerSection = styled(FlexContainer)`
	column-gap: 1.25rem;
`;

export const SectionTextPart = styled(FlexColumnContainer)`
	row-gap: 1.5rem;
	align-items: flex-start;
	max-width: 30rem;
`;

export const SectionImagePart = styled.div`
	min-width: 45%;
	min-height: 28rem;
	position: relative;
`;
