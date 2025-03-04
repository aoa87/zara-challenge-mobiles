import { test, expect } from "@playwright/test";

test("should load mobiles page and fetch mobiles correctly", async ({ page }) => {
  await page.goto("/mobiles");

  await page.waitForSelector("div[data-testid='mobiles-list']", {
    state: "visible",
  });

  const mobilesContainerDiv = await page.locator("div[data-testid='mobiles-list']");
  const mobilesCount = await mobilesContainerDiv.locator("> *").count();

  expect(mobilesCount).toBe(20);
});
