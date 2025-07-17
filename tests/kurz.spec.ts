import { formUrl } from "@/src/utils";
import { test, expect } from "@playwright/test";

test("Show organization dropdown for source=kurz", async ({ page }) => {
  await page.goto(formUrl + "?source=kurz");
  await page.getByText("Zahájit sken ➡️").click();

  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();

  await expect(
    page.getByText("Za jakou organizaci jste dotazník vyplňoval/a?")
  ).toBeVisible();
  await expect(
    page.getByText("Chcete zaslat graficky zpracovaný výstup dotazníku")
  ).toBeHidden();
});
