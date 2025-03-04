import { test, expect } from "@playwright/test";

test("should load the character page detail", async ({ page }) => {
  await page.goto("mobiles/SMG-S24U");

  await page.waitForSelector("div[data-testid='mobile-detail']", {
    state: "visible",
  });

  const mobileNameDiv = await page.locator("div[data-testid='mobile-detail__name']");

  const mobileName = await mobileNameDiv.textContent();

  expect(mobileName?.toLowerCase()).toContain("GALAXY S24 ULTRA".toLowerCase());
});
