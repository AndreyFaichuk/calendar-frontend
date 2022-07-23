export const toTitleCase = (str: string) =>
	str.replace(/\b\w+/g, (s) => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase());
