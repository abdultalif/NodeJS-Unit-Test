export class myException extends Error {

}


export const callMe = name => {
    if (name === "Talif") {
        throw new myException("Ups my exception happens");
    } else {
        return "ok";
    }
};