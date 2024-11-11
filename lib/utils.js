export function ucwords(str) {
    return str
        .toLowerCase() // Convert entire string to lowercase first
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}
