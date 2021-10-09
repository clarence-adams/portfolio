const chromium = require('chrome-aws-lambda')

module.exports = async (req, res) => {
  //
  const pageToScreenshot = req.body.pageToScreenshot

  if (!pageToScreenshot)
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Page URL not defined' }),
    }

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 800, height: 600 },
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })

  const page = await browser.newPage()

  await page.goto(pageToScreenshot, { waitUntil: 'networkidle2' })

  const screenshot = await page.screenshot({ encoding: 'binary' })

  await browser.close()

  return res.status(200).json({
    message: `Complete screenshot of ${pageToScreenshot}`,
    buffer: screenshot,
  })
}
