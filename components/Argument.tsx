import styled from 'styled-components';
import check from '../public/circle-check-solid.svg';
import { FlexContainer } from './Container';
import Image from 'next/image';

const ArgumentContainer = styled(FlexContainer)`
	gap: 0.45rem;
`;

export default function Argument({ text }: { text: string }) {
	return (
		<ArgumentContainer>
			<Image src={check} alt="circle check" width={15} />
			<span>{text}</span>
		</ArgumentContainer>
	);
}
