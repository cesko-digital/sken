import { formUrl } from "@/src/utils";
import { test, expect } from "@playwright/test";

test("Select organization via dropdown", async ({ page }) => {
  await page.goto(formUrl + "?source=kurz");
  await page.getByText("Zahájit sken ➡️").click();

  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();

  await expect(
    page.getByText("Za jakou organizaci jste dotazník vyplňoval/a?")
  ).toBeVisible();
});
