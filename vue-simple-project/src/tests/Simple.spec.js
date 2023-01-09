import {add} from "@/logic/MathLogics";

describe("first-test", () => {
    test("test add", () => {
        expect(add(2, 3)).toBe(5);
    });
});

