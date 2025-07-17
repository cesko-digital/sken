import { formUrl } from "@/src/utils";
import { test, expect } from "@playwright/test";

test("Redirect /vyplnit to Fillout", async ({ page }) => {
  await page.goto("/vyplnit/");
  expect(page.url()).toBe(formUrl);
});

test("Redirect to Fillout including search params", async ({ page }) => {
  await page.goto("/vyplnit/?foo=bar");
  expect(page.url()).toBe(formUrl + "?foo=bar");
});
