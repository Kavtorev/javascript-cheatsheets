export function functionWithPrivateVariables() {
  const code = "1265";
  const password = "qwerty";

  return {
    tellCodeLength() {
      console.log(code.length);
    },
    tellPasswordLength() {
      console.log(password.length);
    },
  };
}
