// Theme management.
//
// Follows the browser/OS setting by default. Ctrl+Alt+D toggles, and once you
// have toggled, your choice is remembered and wins over the system setting on
// every page until you toggle again.
//
// Loaded synchronously from <head> on purpose: the class has to be on <html>
// before the first paint, otherwise the page flashes light and then flips.
(() => {
    const KEY = 'theme'; // 'dark' | 'light' | absent = follow the system
    const root = document.documentElement;
    const system = window.matchMedia('(prefers-color-scheme: dark)');

    const stored = () => {
        try {
            return localStorage.getItem(KEY);
        } catch (error) {
            return null; // private mode / blocked storage
        }
    };

    const apply = isDark => root.classList.toggle('dark-mode', isDark);

    const choice = stored();
    apply(choice ? choice === 'dark' : system.matches);

    // A system change only counts while the visitor has not picked for themselves.
    system.addEventListener('change', event => {
        if (!stored()) apply(event.matches);
    });

    document.addEventListener('keydown', event => {
        if (!event.ctrlKey || !event.altKey || event.key.toLowerCase() !== 'd') return;
        event.preventDefault();
        const isDark = !root.classList.contains('dark-mode');
        apply(isDark);
        try {
            localStorage.setItem(KEY, isDark ? 'dark' : 'light');
        } catch (error) {
            /* nothing to remember it with - the toggle still works for this page */
        }
    });
})();
