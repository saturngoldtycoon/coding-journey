import { test, expect } from '@playwright/test';

test('test bertbertbert webpage @permission', async ({ page }) => {
  await page.goto('https://bertbertbert.com/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Tour', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(13) > .seated-event-link-cells > .seated-event-link-cell > .seated-event-link').click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Find Tickets' }).click();
 // await page1.locator('iframe[title="DataDome Device Check"]').contentFrame().getByRole('button', { name: 'Submit feedback' }).click();
 // await page1.locator('iframe[title="DataDome Device Check"]').contentFrame().getByRole('textbox', { name: 'Type here...' }).click();
 // await page1.locator('iframe[title="DataDome Device Check"]').contentFrame().getByRole('textbox', { name: 'Type here...' }).fill('I am a robot. You caught me. LoL!');
 // await page1.locator('iframe[title="DataDome Device Check"]').contentFrame().getByRole('button', { name: 'Submit', exact: true }).click();
});
