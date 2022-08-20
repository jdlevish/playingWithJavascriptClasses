import Readme from '../readme/readme.ts'


describe("Readme", () => {
    const hello = "hello"
    const readme = new Readme(hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello, hello);

    test('returns an object called readMeObject containing the items passed in', () => {
        expect(readme.Title).toBe("hello");
    })
})