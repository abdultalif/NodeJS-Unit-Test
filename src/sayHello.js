export const sayHello = name => {
    if (name === "Talif") {
        return `Hai ${name}`;
    } else {
        throw new Error("Name is required");
    }
}