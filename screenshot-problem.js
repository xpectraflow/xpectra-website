const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = 'C:\\Users\\Arush Kumar Singh\\.claude\\jobs\\1bc96329\\tmp\\screenshots';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Desktop
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000); // let animations settle

  // Scroll pilot section into view
  await page.evaluate(() => {
    const el = document.getElementById('pilot');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, 'pilot-desktop.png') });
  console.log('Desktop pilot done');

  // Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, 'pilot-full.png'), fullPage: true });
  console.log('Full page done');
  await ctx.close();

  // Mobile
  const mCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const mPage = await mCtx.newPage();
  await mPage.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await mPage.waitForTimeout(2000);
  await mPage.evaluate(() => {
    const el = document.getElementById('pilot');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(outDir, 'pilot-mobile.png') });
  console.log('Mobile done');
  await mCtx.close();

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
