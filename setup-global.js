
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

async function test(title, callback) {
  try {
    await callback();
    console.log(` Passed ${title}`);
  } catch (error) {
    console.error(` Error ${title}`);
    console.error(error);
  }
}

global.test = test;
global.expect = expect;