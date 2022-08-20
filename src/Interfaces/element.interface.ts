export interface IElement {
	atomic_number: number;
	chemical_symbol: string;
	atom_name: string;
	atomic_mass: number;
	chemical_structures: ("hexagonal" | "hexagonal-close-packed")[];
	shells: Shell[];
}

interface Shell {
	electrons: number;
}
