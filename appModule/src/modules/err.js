const fnWithError = () => {
  throw new Error("Some error");
};

try {
  fnWithError();
} catch (error) {
  console.log(error.message);
  console.error(error);
}

console.log("Continue");
