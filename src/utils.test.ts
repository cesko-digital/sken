import assert from "node:assert";
import test from "node:test";
import { hashDigest } from "./utils";

test("Hash digest", () => {
  assert.equal(hashDigest(["foo", "bar", "baz"]), "f9f98a9044");
});
