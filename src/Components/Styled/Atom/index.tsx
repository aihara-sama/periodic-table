import styled from "styled-components";

const StyledAtom = styled.div`
	border: 1px solid gray;
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transform: scale(1);
	transition: 0.3s;

	&:hover {
		transform: scale(1.3);
		.atom-shell {
			opacity: 1;
		}
	}
`;

export default StyledAtom;
