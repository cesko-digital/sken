import { test, expect } from "@playwright/test";

test("Navigate to organization results from individual rating", async ({
  page,
}) => {
  await page.goto("/vysledky/sample");
  await page.getByRole("link", { name: "Doughnut Czechia" }).click();
  await page.waitForURL(/organizace/);
  expect(page.getByRole("heading", { level: 1 })).toContainText("Průměrné");
});
