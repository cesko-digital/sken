import assert from "node:assert";
import test from "node:test";
import { hashDigest, stripMarkdownCodefence } from "./utils";

test("Hash digest", () => {
  assert.equal(hashDigest(["foo", "bar", "baz"]), "f9f98a9044");
});

test("Markdown strip", () => {
  assert.equal(
    stripMarkdownCodefence("```markdown\n## Shrnutí\n```"),
    "## Shrnutí"
  );
  assert.equal(
    stripMarkdownCodefence("```markdown\n## Shrnutí\n```\n"),
    "## Shrnutí"
  );
});
