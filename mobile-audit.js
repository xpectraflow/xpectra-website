const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = 'C:\\Users\\Arush Kumar Singh\\.claude\\jobs\\1bc96329\\tmp\\screenshots';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });

  const mobile = devices['iPhone 13'];
  const ctx = await browser.newContext({ ...mobile });
  const page = await ctx.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Top of hero
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(outDir, '01-hero-top.png') });
  console.log('1. Hero top');

  // 2. Hero mid (headline + CTAs)
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.screenshot({ path: path.join(outDir, '02-hero-mid.png') });
  console.log('2. Hero mid');

  // 3. HeroModeWidget / ingestion tab
  await page.evaluate(() => window.scrollTo(0, 700));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, '03-widget.png') });
  console.log('3. Widget');

  // 4. Logo carousel / integrations card
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, '04-logos.png') });
  console.log('4. Logos');

  // 5. Problem statement
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, '05-problem.png') });
  console.log('5. Problem');

  // 6. ROI cards
  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, '06-roi.png') });
  console.log('6. ROI');

  // 7. Vertical carousel - slide 1
  const totalH = await page.evaluate(() => document.body.scrollHeight);
  await page.evaluate((h) => window.scrollTo(0, h * 0.58), totalH);
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, '07-carousel-1.png') });
  console.log('7. Carousel slide 1');

  // 8. Carousel - click slide 2
  await page.evaluate((h) => window.scrollTo(0, h * 0.58), totalH);
  // Find progress bar buttons and click second one
  const bars = page.locator('button[aria-label]');
  const barCount = await bars.count();
  if (barCount > 1) await bars.nth(1).click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, '08-carousel-2.png') });
  console.log('8. Carousel slide 2');

  // 9. Pilot section
  await page.evaluate((h) => window.scrollTo(0, h * 0.85), totalH);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, '09-pilot.png') });
  console.log('9. Pilot');

  // 10. Full page
  await page.screenshot({ path: path.join(outDir, '10-full-page.png'), fullPage: true });
  console.log('10. Full page');

  await browser.close();
  console.log('\nDone. Screenshots:', outDir);
  console.log('Total height:', totalH + 'px');
})().catch(err => { console.error(err); process.exit(1); });
