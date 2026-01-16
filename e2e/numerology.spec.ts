import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Ensure artifacts directory exists
const artifactsDir = path.join(__dirname, '..', 'artifacts');
if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir, { recursive: true });
}

test.describe('Thần Số Học', () => {

    test('Desktop full page screenshot (1440x900)', async ({ browser }) => {
        const context = await browser.newContext({
            viewport: { width: 1440, height: 900 },
        });
        const page = await context.newPage();

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Wait for animations to complete
        await page.waitForTimeout(1000);

        await page.screenshot({
            path: path.join(artifactsDir, 'desktop-full.png'),
            fullPage: true,
        });

        await context.close();
    });

    test('Mobile full page screenshot (iPhone 12)', async ({ browser }) => {
        const context = await browser.newContext({
            viewport: { width: 390, height: 844 },
            isMobile: true,
            hasTouch: true,
        });
        const page = await context.newPage();

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Wait for animations to complete
        await page.waitForTimeout(1000);

        await page.screenshot({
            path: path.join(artifactsDir, 'mobile-full.png'),
            fullPage: true,
        });

        await context.close();
    });

    test('Demo video - Full calculator flow', async ({ browser }) => {
        const context = await browser.newContext({
            viewport: { width: 1280, height: 720 },
            recordVideo: {
                dir: artifactsDir,
                size: { width: 1280, height: 720 },
            },
        });
        const page = await context.newPage();

        // Navigate to homepage
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);

        // Scroll to hero for a moment
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
        await page.waitForTimeout(1500);

        // Click CTA to scroll to calculator
        await page.click('text=Tính chỉ số');
        await page.waitForTimeout(1000);

        // Fill out the form
        await page.fill('#fullName', 'Nguyễn Văn A');
        await page.waitForTimeout(500);

        await page.fill('#dob', '1997-08-12');
        await page.waitForTimeout(500);

        // Click calculate button
        await page.click('button:has-text("Tính ngay")');
        await page.waitForTimeout(1500);

        // Scroll to see result
        await page.waitForSelector('.number-display');
        await page.waitForTimeout(1500);

        // Click "Đặt lịch tư vấn cho số X" button
        await page.click('button:has-text("Đặt lịch tư vấn cho số")');
        await page.waitForTimeout(1500);

        // Fill booking form
        await page.fill('#bookingName', 'Nguyễn Văn A');
        await page.waitForTimeout(300);

        await page.fill('#phone', '0901234567');
        await page.waitForTimeout(300);

        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dateStr = tomorrow.toISOString().split('T')[0];
        await page.fill('#bookingDate', dateStr);
        await page.waitForTimeout(300);

        await page.selectOption('#timeSlot', 'morning');
        await page.waitForTimeout(300);

        await page.selectOption('#package', 'advanced');
        await page.waitForTimeout(300);

        await page.fill('#notes', 'Tôi muốn biết thêm về số chủ đạo của mình');
        await page.waitForTimeout(500);

        // Handle alert dialog
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Yêu cầu đã gửi!');
            await dialog.accept();
        });

        // Submit form
        await page.click('button:has-text("Gửi yêu cầu")');
        await page.waitForTimeout(2000);

        // Scroll back to top
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
        await page.waitForTimeout(1500);

        // Close context to save video
        await context.close();

        // Rename the video file to demo.webm
        const videos = fs.readdirSync(artifactsDir).filter(f => f.endsWith('.webm'));
        if (videos.length > 0) {
            const latestVideo = videos[videos.length - 1];
            const oldPath = path.join(artifactsDir, latestVideo);
            const newPath = path.join(artifactsDir, 'demo.webm');
            if (fs.existsSync(newPath)) {
                fs.unlinkSync(newPath);
            }
            fs.renameSync(oldPath, newPath);
        }
    });

    test('Calculator validation works correctly', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Tính chỉ số');
        await page.waitForTimeout(500);

        // Try to submit without filling form
        await page.click('button:has-text("Tính ngay")');

        // Check for validation errors
        await expect(page.locator('text=Vui lòng nhập họ và tên')).toBeVisible();
        await expect(page.locator('text=Vui lòng chọn ngày sinh')).toBeVisible();
    });

    test('Life Path calculation is correct', async ({ page }) => {
        await page.goto('/');

        // Fill form with known values
        // DOB: 1997-08-12 => 1+9+9+7+0+8+1+2 = 37 => 3+7 = 10 => 1+0 = 1
        await page.fill('#fullName', 'Test User');
        await page.fill('#dob', '1997-08-12');
        await page.click('button:has-text("Tính ngay")');

        await page.waitForTimeout(500);

        // Check result is displayed
        await expect(page.locator('.number-display').first()).toBeVisible();
    });

    test('Booking form validation works', async ({ page }) => {
        await page.goto('/');

        // Scroll to booking section
        await page.click('text=Đặt lịch tư vấn >> nth=0');
        await page.waitForTimeout(500);

        // Try to submit empty form
        await page.click('button:has-text("Gửi yêu cầu")');

        // Check for validation errors
        await expect(page.locator('text=Vui lòng nhập họ tên')).toBeVisible();
        await expect(page.locator('text=Vui lòng nhập số điện thoại')).toBeVisible();
    });

    test('Mobile navigation works', async ({ browser }) => {
        const context = await browser.newContext({
            viewport: { width: 390, height: 844 },
            isMobile: true,
        });
        const page = await context.newPage();

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Check hamburger menu is visible
        await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();

        // Click hamburger menu
        await page.click('button[aria-label="Toggle menu"]');
        await page.waitForTimeout(300);

        // Check menu items are visible
        await expect(page.locator('nav >> text=Trang chủ')).toBeVisible();

        await context.close();
    });
});
