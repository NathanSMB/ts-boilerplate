import { boilerplate } from "../src/main";

test("is this a boilerplate project?", () => {
    expect(boilerplate).toBe(true);
});
