import { useState } from 'react';
import styled from 'styled-components';

type InputProps = {
	bgColor: string;
	placeholder?: string;
	width?: string;
};

const CustomInput = styled.input`
	height: 3rem;
	border-radius: 9999px;
	padding: 1rem;
	transition-property: color, background-color, border-color,
		text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
		backdrop-filter;
	transition-timing-function: linear;
	transition-duration: 200ms;
	color: inherit;
	font-size: 16px;

	&:focus {
		outline: none;
	}
`;

export default function Input(props: InputProps) {
	const [searchText, setSearchText] = useState('');

	const handleSubmit = (event: { key: string }) => {
		if (event.key === 'Enter' && searchText)
			window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
				searchText
			)}`;
	};

	return (
		<CustomInput
			type="search"
			value={searchText}
			placeholder={props.placeholder}
			style={{ width: props.width, backgroundColor: props.bgColor }}
			onChange={(e) => setSearchText(e.target.value)}
			onKeyDown={handleSubmit}
		/>
	);
}
