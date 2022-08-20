import React, { FunctionComponent } from "react";
import Atom from "../Atom";
import StyledPeriodicTable from "../Styled/PeriodicTable";
import { IElement } from "../../Interfaces/element.interface";
const elements: IElement[] = [
	{
		atomic_number: 1,
		shells: [
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "H",
		atomic_mass: 1.00794,
		atom_name: "Hydrogen",
	},
	{
		atomic_number: 2,
		shells: [
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "He",
		atomic_mass: 4.002602,
		atom_name: "Helium",
	},
	{
		atomic_number: 3,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Li",

		atomic_mass: 6.941,
		atom_name: "Lithium",
	},
	{
		atomic_number: 4,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Be",

		atomic_mass: 9.012182,
		atom_name: "Beryllium",
	},
	{
		atomic_number: 5,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 3,
			},
		],
		chemical_structures: [],
		chemical_symbol: "B",

		atomic_mass: 10.811,
		atom_name: "Boron",
	},
	{
		atomic_number: 6,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 4,
			},
		],
		chemical_structures: [],
		chemical_symbol: "C",

		atomic_mass: 12.0107,
		atom_name: "Carbon",
	},
	{
		atomic_number: 7,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 5,
			},
		],
		chemical_structures: [],
		chemical_symbol: "N",

		atomic_mass: 14.0067,
		atom_name: "Nitrogen",
	},
	{
		atomic_number: 8,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 6,
			},
		],
		chemical_structures: [],
		chemical_symbol: "O",

		atomic_mass: 15.9994,
		atom_name: "Oxygen",
	},
	{
		atomic_number: 9,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 7,
			},
		],
		chemical_structures: [],
		chemical_symbol: "F",

		atomic_mass: 18.9984032,
		atom_name: "Fluorine",
	},
	{
		atomic_number: 10,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ne",

		atomic_mass: 20.1797,
		atom_name: "Neon",
	},
	{
		atomic_number: 11,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Na",

		atomic_mass: 22.98977,
		atom_name: "Sodium",
	},
	{
		atomic_number: 12,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Mg",

		atomic_mass: 24.305,
		atom_name: "Magnesium",
	},
	{
		atomic_number: 13,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 3,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Al",

		atomic_mass: 26.981538,
		atom_name: "Aluminium",
	},
	{
		atomic_number: 14,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 4,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Si",

		atomic_mass: 28.0855,
		atom_name: "Silicon",
	},
	{
		atomic_number: 15,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 5,
			},
		],
		chemical_structures: [],
		chemical_symbol: "P",

		atomic_mass: 30.973761,
		atom_name: "Phosphorus",
	},
	{
		atomic_number: 16,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 6,
			},
		],
		chemical_structures: [],
		chemical_symbol: "S",

		atomic_mass: 32.065,
		atom_name: "Sulfur",
	},
	{
		atomic_number: 17,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 7,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Cl",

		atomic_mass: 35.453,
		atom_name: "Chlorine",
	},
	{
		atomic_number: 18,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 8,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ar",

		atomic_mass: 39.948,
		atom_name: "Argon",
	},
	{
		atomic_number: 19,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 8,
			},
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "K",

		atomic_mass: 39.0983,
		atom_name: "Potassium",
	},
	{
		atomic_number: 20,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 8,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ca",

		atomic_mass: 40.078,
		atom_name: "Calcium",
	},
	{
		atomic_number: 21,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 9,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Sc",

		atomic_mass: 44.95591,
		atom_name: "Scandium",
	},
	{
		atomic_number: 22,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 10,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ti",

		atomic_mass: 47.867,
		atom_name: "Titanium",
	},
	{
		atomic_number: 23,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 11,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "V",

		atomic_mass: 50.9415,
		atom_name: "Vanadium",
	},
	{
		atomic_number: 24,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 13,
			},
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Cr",

		atomic_mass: 51.9961,
		atom_name: "Chromium",
	},
	{
		atomic_number: 25,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 13,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Mn",

		atomic_mass: 54.938049,
		atom_name: "Manganese",
	},
	{
		atomic_number: 26,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 14,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Fe",

		atomic_mass: 55.845,
		atom_name: "Iron",
	},
	{
		atomic_number: 27,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 15,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Co",

		atomic_mass: 58.9332,
		atom_name: "Cobalt",
	},
	{
		atomic_number: 28,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 16,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ni",

		atomic_mass: 58.6934,
		atom_name: "Nickel",
	},
	{
		atomic_number: 29,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 1,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Cu",

		atomic_mass: 63.546,
		atom_name: "Copper",
	},
	{
		atomic_number: 30,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 2,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Zn",

		atomic_mass: 65.409,
		atom_name: "Zinc",
	},
	{
		atomic_number: 31,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 3,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ga",

		atomic_mass: 69.723,
		atom_name: "Gallium",
	},
	{
		atomic_number: 32,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 4,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Ge",

		atomic_mass: 72.64,
		atom_name: "Germanium",
	},
	{
		atomic_number: 33,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 5,
			},
		],
		chemical_structures: [],
		chemical_symbol: "As",

		atomic_mass: 74.9216,
		atom_name: "Arsenic",
	},
	{
		atomic_number: 34,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 6,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Se",

		atomic_mass: 78.96,
		atom_name: "Selenium",
	},
	{
		atomic_number: 35,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 7,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Br",

		atomic_mass: 79.904,
		atom_name: "Bromine",
	},
	{
		atomic_number: 36,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 8,
			},
		],
		chemical_structures: [],
		chemical_symbol: "Kr",

		atomic_mass: 83.798,
		atom_name: "Krypton",
	},
	{
		atomic_number: 37,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 8,
			},
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Rb",

		atomic_mass: 85.4678,
		atom_name: "Rubidium",
	},
	{
		atomic_number: 38,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 8,
			},
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Sr",

		atomic_mass: 87.62,
		atom_name: "Strontium",
	},
	{
		atomic_number: 39,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 9,
			},
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Y",

		atomic_mass: 88.90585,
		atom_name: "Yttrium",
	},
	{
		atomic_number: 40,
		shells: [
			{
				electrons: 2,
			},
			{
				electrons: 8,
			},
			{
				electrons: 18,
			},
			{
				electrons: 8,
			},
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Zr",

		atomic_mass: 91.224,
		atom_name: "Zirconium",
	},
	{
		atomic_number: 41,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 12 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Nb",

		atomic_mass: 92.90638,
		atom_name: "Niobium",
	},
	{
		atomic_number: 42,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 13 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Mo",

		atomic_mass: 95.94,
		atom_name: "Molybdenum",
	},
	{
		atomic_number: 43,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 13 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Tc",

		atomic_mass: 98,
		atom_name: "Technetium",
	},
	{
		atomic_number: 44,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 15 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Ru",

		atomic_mass: 101.07,
		atom_name: "Ruthenium",
	},
	{
		atomic_number: 45,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 16 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Rh",

		atomic_mass: 102.9055,
		atom_name: "Rhodium",
	},
	{
		atomic_number: 46,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
		],
		chemical_structures: [],
		chemical_symbol: "Pd",

		atomic_mass: 106.42,
		atom_name: "Palladium",
	},
	{
		atomic_number: 47,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Ag",

		atomic_mass: 107.8682,
		atom_name: "Silver",
	},
	{
		atomic_number: 48,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Cd",

		atomic_mass: 112.411,
		atom_name: "Cadmium",
	},
	{
		atomic_number: 49,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 3 },
		],
		chemical_structures: [],
		chemical_symbol: "In",

		atomic_mass: 114.818,
		atom_name: "Indium",
	},
	{
		atomic_number: 50,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 4 },
		],
		chemical_structures: [],
		chemical_symbol: "Sn",

		atomic_mass: 118.71,
		atom_name: "Tin",
	},
	{
		atomic_number: 51,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 5 },
		],
		chemical_structures: [],
		chemical_symbol: "Sb",

		atomic_mass: 121.76,
		atom_name: "Antimony",
	},
	{
		atomic_number: 52,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 6 },
		],
		chemical_structures: [],
		chemical_symbol: "Te",

		atomic_mass: 127.6,
		atom_name: "Tellurium",
	},
	{
		atomic_number: 53,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 7 },
		],
		chemical_structures: [],
		chemical_symbol: "I",

		atomic_mass: 126.90447,
		atom_name: "Iodine",
	},
	{
		atomic_number: 54,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 8 },
		],
		chemical_structures: [],
		chemical_symbol: "Xe",

		atomic_mass: 131.293,
		atom_name: "Xenon",
	},
	{
		atomic_number: 55,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 8 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Cs",

		atomic_mass: 132.90545,
		atom_name: "Cesium",
	},
	{
		atomic_number: 56,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ba",

		atomic_mass: 137.327,
		atom_name: "Barium",
	},
	{
		atomic_number: 57,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 18 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "La",

		atomic_mass: 138.9055,
		atom_name: "Lanthanum",
	},
	{
		atomic_number: 58,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 19 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ce",

		atomic_mass: 140.116,
		atom_name: "Cerium",
	},
	{
		atomic_number: 59,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 21 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Pr",

		atomic_mass: 140.90765,
		atom_name: "Praseodymium",
	},
	{
		atomic_number: 60,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 22 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Nd",

		atomic_mass: 144.24,
		atom_name: "Neodymium",
	},
	{
		atomic_number: 61,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 23 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Pm",

		atomic_mass: 145,
		atom_name: "Promethium",
	},
	{
		atomic_number: 62,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 24 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Sm",

		atomic_mass: 150.36,
		atom_name: "Samarium",
	},
	{
		atomic_number: 63,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 25 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Eu",

		atomic_mass: 151.964,
		atom_name: "Europium",
	},
	{
		atomic_number: 64,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 25 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Gd",

		atomic_mass: 157.25,
		atom_name: "Gadolinium",
	},
	{
		atomic_number: 65,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 27 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Tb",

		atomic_mass: 158.92534,
		atom_name: "Terbium",
	},
	{
		atomic_number: 66,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 28 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Dy",

		atomic_mass: 162.5,
		atom_name: "Dysprosium",
	},
	{
		atomic_number: 67,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 29 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ho",

		atomic_mass: 164.93032,
		atom_name: "Holmium",
	},
	{
		atomic_number: 68,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 30 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Er",

		atomic_mass: 167.259,
		atom_name: "Erbium",
	},
	{
		atomic_number: 69,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 31 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Tm",

		atomic_mass: 168.93421,
		atom_name: "Thulium",
	},
	{
		atomic_number: 70,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Yb",

		atomic_mass: 173.04,
		atom_name: "Ytterbium",
	},
	{
		atomic_number: 71,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Lu",

		atomic_mass: 174.967,
		atom_name: "Lutetium",
	},
	{
		atomic_number: 72,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 10 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Hf",

		atomic_mass: 178.49,
		atom_name: "Hafnium",
	},
	{
		atomic_number: 73,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 11 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ta",

		atomic_mass: 180.9479,
		atom_name: "Tantalum",
	},
	{
		atomic_number: 74,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 12 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "W",

		atomic_mass: 183.84,
		atom_name: "Tungsten",
	},
	{
		atomic_number: 75,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 13 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Re",

		atomic_mass: 186.207,
		atom_name: "Rhenium",
	},
	{
		atomic_number: 76,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 14 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Os",

		atomic_mass: 190.23,
		atom_name: "Osmium",
	},
	{
		atomic_number: 77,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 15 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ir",

		atomic_mass: 192.217,
		atom_name: "Iridium",
	},
	{
		atomic_number: 78,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 17 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Pt",

		atomic_mass: 195.078,
		atom_name: "Platinum",
	},
	{
		atomic_number: 79,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Au",

		atomic_mass: 196.96655,
		atom_name: "Gold",
	},
	{
		atomic_number: 80,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Hg",

		atomic_mass: 200.59,
		atom_name: "Mercury",
	},
	{
		atomic_number: 81,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 3 },
		],
		chemical_structures: [],
		chemical_symbol: "Tl",

		atomic_mass: 204.3833,
		atom_name: "Thallium",
	},
	{
		atomic_number: 82,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 4 },
		],
		chemical_structures: [],
		chemical_symbol: "Pb",

		atomic_mass: 207.2,
		atom_name: "Lead",
	},
	{
		atomic_number: 83,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 5 },
		],
		chemical_structures: [],
		chemical_symbol: "Bi",

		atomic_mass: 208.98038,
		atom_name: "Bismuth",
	},
	{
		atomic_number: 84,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 6 },
		],
		chemical_structures: [],
		chemical_symbol: "Po",

		atomic_mass: 209,
		atom_name: "Polonium",
	},
	{
		atomic_number: 85,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 7 },
		],
		chemical_structures: [],
		chemical_symbol: "At",

		atomic_mass: 210,
		atom_name: "Astatine",
	},
	{
		atomic_number: 86,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 8 },
		],
		chemical_structures: [],
		chemical_symbol: "Rn",

		atomic_mass: 222,
		atom_name: "Radon",
	},
	{
		atomic_number: 87,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 8 },
			{ electrons: 1 },
		],
		chemical_structures: [],
		chemical_symbol: "Fr",

		atomic_mass: 223,
		atom_name: "Francium",
	},
	{
		atomic_number: 88,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ra",

		atomic_mass: 226,
		atom_name: "Radium",
	},
	{
		atomic_number: 89,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ac",

		atomic_mass: 227,
		atom_name: "Actinium",
	},
	{
		atomic_number: 90,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 10 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Th",

		atomic_mass: 232.0381,
		atom_name: "Thorium",
	},
	{
		atomic_number: 91,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 20 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Pa",

		atomic_mass: 231.03588,
		atom_name: "Protactinium",
	},
	{
		atomic_number: 92,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 21 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "U",

		atomic_mass: 238.02891,
		atom_name: "Uranium",
	},
	{
		atomic_number: 93,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 22 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Np",

		atomic_mass: 237,
		atom_name: "Neptunium",
	},
	{
		atomic_number: 94,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 24 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Pu",

		atomic_mass: 244,
		atom_name: "Plutonium",
	},
	{
		atomic_number: 95,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 25 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Am",

		atomic_mass: 243,
		atom_name: "Americium",
	},
	{
		atomic_number: 96,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 25 },
			{ electrons: 9 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Cm",

		atomic_mass: 247,
		atom_name: "Curium",
	},
	{
		atomic_number: 97,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 27 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Bk",

		atomic_mass: 247,
		atom_name: "Berkelium",
	},
	{
		atomic_number: 98,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 28 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Cf",

		atomic_mass: 251,
		atom_name: "Californium",
	},
	{
		atomic_number: 99,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 29 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Es",

		atomic_mass: 252,
		atom_name: "Einsteinium",
	},
	{
		atomic_number: 100,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 30 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Fm",

		atomic_mass: 257,
		atom_name: "Fermium",
	},
	{
		atomic_number: 101,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 31 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Md",

		atomic_mass: 258,
		atom_name: "Mendelevium",
	},
	{
		atomic_number: 102,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 8 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "No",

		atomic_mass: 259,
		atom_name: "Nobelium",
	},
	{
		atomic_number: 103,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 8 },
			{ electrons: 3 },
		],
		chemical_structures: [],
		chemical_symbol: "Lr",

		atomic_mass: 262,
		atom_name: "Lawrencium",
	},
	{
		atomic_number: 104,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 10 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Rf",

		atomic_mass: 261,
		atom_name: "Rutherfordium",
	},
	{
		atomic_number: 105,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 11 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Db",

		atomic_mass: 262,
		atom_name: "Dubnium",
	},
	{
		atomic_number: 106,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 12 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Sg",

		atomic_mass: 266,
		atom_name: "Seaborgium",
	},
	{
		atomic_number: 107,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 13 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Bh",

		atomic_mass: 264,
		atom_name: "Bohrium",
	},
	{
		atomic_number: 108,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 14 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Hs",

		atomic_mass: 277,
		atom_name: "Hassium",
	},
	{
		atomic_number: 109,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 15 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Mt",

		atomic_mass: 268,
		atom_name: "Meitnerium",
	},
	{
		atomic_number: 110,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 16 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Ds",

		atomic_mass: 281,
		atom_name: "Darmstadtium",
	},
	{
		atomic_number: 111,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 17 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Rg",

		atomic_mass: 272,
		atom_name: "Roentgenium",
	},
	{
		atomic_number: 112,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 2 },
		],
		chemical_structures: [],
		chemical_symbol: "Cn",

		atomic_mass: 277,
		atom_name: "Copernicium",
	},
	{
		atomic_number: 113,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 3 },
		],
		chemical_structures: [],
		chemical_symbol: "Nh",

		atomic_mass: 286,
		atom_name: "Nihonium",
	},
	{
		atomic_number: 114,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 4 },
		],
		chemical_structures: [],
		chemical_symbol: "Fl",

		atomic_mass: 289,
		atom_name: "Flerovium",
	},
	{
		atomic_number: 115,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 5 },
		],
		chemical_structures: [],
		chemical_symbol: "Mc",

		atomic_mass: 290,
		atom_name: "Moscovium",
	},
	{
		atomic_number: 116,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 6 },
		],
		chemical_structures: [],
		chemical_symbol: "Lv",

		atomic_mass: 293,
		atom_name: "Livermorium",
	},
	{
		atomic_number: 117,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 7 },
		],
		chemical_structures: [],
		chemical_symbol: "Ts",

		atomic_mass: 294,
		atom_name: "Tennessine",
	},
	{
		atomic_number: 118,
		shells: [
			{ electrons: 2 },
			{ electrons: 8 },
			{ electrons: 18 },
			{ electrons: 32 },
			{ electrons: 32 },
			{ electrons: 18 },
			{ electrons: 8 },
		],
		chemical_structures: [],
		chemical_symbol: "Og",

		atomic_mass: 294,
		atom_name: "Oganesson",
	},
];

console.log({ elements });

const PeriodicTable: FunctionComponent = () => {
	// ~~~~~ Redux state ~~~~~

	// ~~~~~ Hooks ~~~~~

	// ~~~~~ Cmp state ~~~~~

	// ~~~~~ Refs ~~~~~

	// ~~~~~ Effects ~~~~~

	// ~~~~~ Handlers ~~~~~

	return (
		<StyledPeriodicTable className="periodic-table">
			{elements.map((element) => (
				<Atom {...element} />
			))}
		</StyledPeriodicTable>
	);
};

export default PeriodicTable;
