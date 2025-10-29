import { test, expect } from '@playwright/test';

test('Verifica se o mapa é renderizado', async ({ page }) => {
    await page.goto('http://localhost:3000'); // ou o endereço local da tua app
    const map = page.locator('#map');
    await expect(map).toBeVisible();
});

test('Pesquisa de unidade funciona', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const input = page.locator('.search-input');
    await input.fill('Imperatriz');

    const markerPopup = page.locator('.leaflet-popup-content');
    await expect(markerPopup).toContainText('SEBRAE/MA - Unidade Regional Imperatriz');
});
