import { test, expect } from '@playwright/test';

test('Botão Limpa Pesquisa Renderiza', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('button')).toContainText('Limpar Pesquisa');
});

test('Botão Limpa Pesquisa Funciona', async ({ page }) => {
    await page.goto('/');
    const input = page.locator('#search');
    await input.fill('São Luís');
    await page.locator('button').click();
    await expect(input).toHaveValue('');
});

test('Verifica se o mapa é renderizado', async ({ page }) => {
    await page.goto('/');
    const map = page.locator('#map');
    await expect(map).toBeVisible();
});

test('Pesquisa de unidade funciona', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('#search');
    await input.fill('Imperatriz');

    // Aguarda popup aparecer
    const markerPopup = page.locator('.leaflet-popup-content');
    await expect(markerPopup).toContainText('SEBRAE/MA - Unidade Regional Imperatriz');
});
