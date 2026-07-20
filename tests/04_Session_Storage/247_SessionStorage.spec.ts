const { chromium } = require("playwright");
const { loadEnv } = require("../../utils/env");

// Credentials live in .env (gitignored) - never hardcode them in a public repo.
// Copy .env.example to .env and fill in your own VWO login before running.
loadEnv();

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

async function saveAdminSession() {
    console.log("Admin session save placeholder.");
}

async function saveSession() {
    if (!VWO_USER || !VWO_PASS) {
        console.warn("Skipping session save. Create .env from .env.example and set VWO_USER/VWO_PASS.");
        return;
    }

    const browser = await chromium.launch({ headless: false });
    try {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://app.wingify.com/#/login");
        await page.waitForTimeout(2000);

        await page.fill("#login-username", VWO_USER);
        await page.fill("#login-password", VWO_PASS);
        await page.waitForTimeout(1500);

        await page.click("#js-login-btn");

        // Wait for login to actually complete before snapshotting storage —
        // otherwise the auth cookie isn't set yet and the saved state is empty.
        await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
        await page.waitForTimeout(3000);

        await context.storageState({ path: "./user-session.json" });
        console.log("Session saved to user-session.json ✅");

        await page.waitForTimeout(2000);
    } finally {
        await browser.close();
    }
}

async function main() {
    await saveSession();
    await saveAdminSession();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});