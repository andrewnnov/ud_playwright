import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium"},
        },
        {
            name: "FireFox",
            use: {browserName: 'firefox'},
        },
        {
            name: "Webkit",
            use: {browserName: 'webkit'}
        }
    ]
}

export default config




//npx playwright test --config=playwright.config.ts --project=FireFox