export const randomColor = () => {
    const randomHex = () => Math.floor(Math.random() * 254).toString(16);
    const r = randomHex();
    const g = randomHex();
    const b = randomHex();
    return `#${r}${g}${b}`;
};
