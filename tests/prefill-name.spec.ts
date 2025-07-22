import { RouteTo } from "@/src/utils";
import { test, expect } from "@playwright/test";

test.skip("Prefill organization name with organization_name", async ({
  page,
}) => {
  await page.goto(RouteTo.form + "?organization_name=foo");
  await page.getByText("Zahájit sken ➡️").click();

  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();
  await page.getByText("Další →").click();

  await page
    .getByLabel("Chcete zaslat graficky zpracovaný výstup dotazníku")
    .getByText("Ano")
    .click();

  const organizationNameInput = page.getByLabel(
    "Za jakou organizaci jste dotazník vyplňoval/a?"
  );
  await expect(organizationNameInput).toBeVisible();
  await expect(organizationNameInput).toHaveValue("foo");
});
