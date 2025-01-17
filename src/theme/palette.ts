import { red } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";

export const brand = {
	50: "#F0F7FF",
	100: "#CEE5FD",
	200: "#9CCCFC",
	300: "#55A6F6",
	400: "#0A66C2",
	500: "#0959AA",
	600: "#064079",
	700: "#033363",
	800: "#02294F",
	900: "#021F3B",
};

export const secondary = {
	50: "#F9F0FF",
	100: "#E9CEFD",
	200: "#D49CFC",
	300: "#B355F6",
	400: "#750AC2",
	500: "#6709AA",
	600: "#490679",
	700: "#3B0363",
	800: "#2F024F",
	900: "#23023B",
};

export const gray = {
	50: "#FBFCFE",
	100: "#EAF0F5",
	200: "#D6E2EB",
	300: "#BFCCD9",
	400: "#94A6B8",
	500: "#5B6B7C",
	600: "#4C5967",
	700: "#364049",
	800: "#131B20",
	900: "#090E10",
};

export const green = {
	50: "#F6FEF6",
	100: "#E3FBE3",
	200: "#C7F7C7",
	300: "#A1E8A1",
	400: "#51BC51",
	500: "#1F7A1F",
	600: "#136C13",
	700: "#0A470A",
	800: "#042F04",
	900: "#021D02",
};

export const palette = {
	primary: {
		light: brand[200],
		main: brand[500],
		dark: brand[800],
		contrastText: brand[50],
	},
	secondary: {
		light: secondary[300],
		main: secondary[500],
		dark: secondary[800],
	},
	warning: {
		main: "#F7B538",
		dark: "#F79F00",
	},
	error: {
		light: red[50],
		main: red[500],
		dark: red[700],
	},
	success: {
		light: green[300],
		main: green[400],
		dark: green[800],
	},
	grey: {
		50: gray[50],
		100: gray[100],
		200: gray[200],
		300: gray[300],
		400: gray[400],
		500: gray[500],
		600: gray[600],
		700: gray[700],
		800: gray[800],
		900: gray[900],
	},
	divider: alpha(gray[300], 0.5),
	background: {
		default: "#fff",
		paper: gray[50],
	},
	text: {
		primary: gray[800],
		secondary: gray[600],
		light: gray[50],
	},
	action: {
		selected: `${alpha(brand[200], 0.2)}`,
	},
};
