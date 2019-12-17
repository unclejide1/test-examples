const functions = require("./example1");

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined matches the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
test("user should be Jideofor Nwoke", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Jideofor",
    lastName: "Nwoke"
  });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

//regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
//promise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
});

//promise
// test('user fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// });
//async await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
   
});
