import styled from "styled-components";
import { getPointCoords } from "../../../Utils";

const StyledElectron = styled.div<{ angle: number; radius: number }>`
	width: 6px;
	height: 6px;
	background-color: orange;
	border-radius: 50%;
	position: absolute;
	left: ${({ angle, radius }) =>
		getPointCoords(radius, radius, angle, "x", 6)}px;
	top: ${({ angle, radius }) =>
		getPointCoords(radius, radius, angle, "y", 6)}px;
`;

export default StyledElectron;
