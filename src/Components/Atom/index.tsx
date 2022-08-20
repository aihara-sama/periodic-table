import React, { FunctionComponent } from "react";
import AtomShell from "../AtomShell";
import StyledAtom from "../Styled/Atom";
import StyledAtomicMass from "../Styled/AtomicMass";
import StyledAtomicNumber from "../Styled/AtomicNumber";
import StyledAtomMeta from "../Styled/AtomMeta";
import StyledAtomName from "../Styled/AtomName";
import StyledAtomStructure from "../Styled/AtomStructure";
import StyledChemicalSymbol from "../Styled/ChemicalSymbol";

interface IProps {
	atomic_number: number;
	chemical_symbol: string;
	atom_name: string;
	atomic_mass: number;
	chemical_structures: ("hexagonal" | "hexagonal-close-packed")[];
	shells: {
		electrons: number;
	}[];
}

const Atom: FunctionComponent<IProps> = (props) => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return (
		<StyledAtom className="atom">
			<StyledAtomicNumber className="atomic-number">
				{props.atomic_number}
			</StyledAtomicNumber>
			{props.chemical_structures.map((structure, idx) => (
				<StyledAtomStructure
					className={`atom-structure-${structure}`}
					level={idx + 1}
				>
					<img
						width={20}
						src={`/assets/images/${structure}.svg`}
						alt="hexagonal"
					/>
				</StyledAtomStructure>
			))}
			<StyledAtomMeta>
				<StyledChemicalSymbol className="chemical-symbol">
					{props.chemical_symbol}
				</StyledChemicalSymbol>
				<StyledAtomName className="atom-name">{props.atom_name}</StyledAtomName>
				<StyledAtomicMass>{props.atomic_mass}</StyledAtomicMass>
			</StyledAtomMeta>
			{props.shells.map((shell, idx) => (
				<AtomShell level={idx + 4} electrons={shell.electrons} />
			))}
		</StyledAtom>
	);
};

export default Atom;
