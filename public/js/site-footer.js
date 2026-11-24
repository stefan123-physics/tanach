/**
 * Shared site footer: copyright years that follow the calendar.
 *
 * Markup in each page:
 *   <footer class="footer" data-site-footer>
 *     <p>&copy; <span data-copyright-years>2024</span> Tanach Reader …</p>
 *   </footer>
 */

export const SITE_START_YEAR = 2024;

/**
 * "2024" in the first year, "2024–2026" after that. Never earlier than the start year.
 */
export function copyrightYears(startYear = SITE_START_YEAR, now = new Date()) {
    const current = now.getFullYear();
    return current > startYear ? `${startYear}–${current}` : String(startYear);
}

/**
 * Fill every footer on the page.
 */
export function renderSiteFooters(doc = globalThis.document, now = new Date()) {
    if (!doc) return;
    const years = copyrightYears(SITE_START_YEAR, now);
    doc.querySelectorAll('[data-copyright-years]').forEach((el) => {
        el.textContent = years;
    });
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => renderSiteFooters());
    } else {
        renderSiteFooters();
    }
}
