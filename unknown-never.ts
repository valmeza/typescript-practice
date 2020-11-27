let userInput: unknown; //type unknown because we don't know what the user is going to enter
let userName: string;

userInput = 5;
userInput = "unknown";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never { // never returns
  throw { message: message, errorCode: code };
}

generateError("An error ocurred!", 500);
