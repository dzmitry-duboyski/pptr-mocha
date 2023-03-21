import { step } from "mocha-steps"
import puppeteer from "puppeteer"

describe('Mocha steps demo', () => {
  let browser
  let page

  before( async () => {
   browser = await puppeteer.launch({
    headless: false
   })
   page = await browser.newPage()
   await page.setDefaultTimeout(10000)
  })

  after( async () => {
    browser.close()
  })

  step('Step #1: should load google homepage', async () => {
    await page.goto('https://google.com/')
  } )

  step('Step #2', async () => {
    await page.waitForSelector('#fail')
  } )

  step('Step #3', async () => {
    console.log('step #3')
  } )

  step('Step #4', async () => {
    console.log('step #4')
  } )
})