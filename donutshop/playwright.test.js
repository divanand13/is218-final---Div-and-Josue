const { test, expect } = require('@playwright/test');

// Update this if your website has a specific title you want to check
const expectedTitle = 'TheDonutDen';

test('Homepage should load correctly in Chromium', async ({ playwright }) => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://is218-final-div-josue.vercel.app/');
  const title = await page.title();
  await expect(title).toBe(expectedTitle);
  await browser.close();
});

test('Homepage should load correctly in Firefox', async ({ playwright }) => {
  const browser = await playwright.firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://is218-final-div-josue.vercel.app/');
  const title = await page.title();
  await expect(title).toBe(expectedTitle);
  await browser.close();
});

test('Homepage should load correctly in WebKit', async ({ playwright }) => {
  const browser = await playwright.webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://is218-final-div-josue.vercel.app/');
  const title = await page.title();
  await expect(title).toBe(expectedTitle);
  await browser.close();
});
  test('Images are loaded on the homepage', async ({ page }) => {
    await page.goto('https://is218-final-div-josue.vercel.app/');
    // Replace 'img' with a more specific selector if needed
    const images = await page.locator('img');
    for (let i = 0; i < await images.count(); i++) {
      const image = images.nth(i);
      await expect(image).toBeVisible();
      const src = await image.getAttribute('src');
      expect(src).not.toBeNull();
    }
  });
  test('Navigation bar and footer are present', async ({ page }) => {
    await page.goto('https://is218-final-div-josue.vercel.app/');
    // Replace these selectors with the actual selectors for your nav bar and footer
    const navbar = await page.locator('nav');
    await expect(navbar).toBeVisible();
  
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();
  });
     