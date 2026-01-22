// Theme management
document.addEventListener('DOMContentLoaded', () => {
    // Check initial system preference
    //if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
       // document.body.classList.add('dark-mode');
    //}
    
    // Listen for changes in system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Add keyboard shortcut for testing (Ctrl+Alt+D)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'd') {
            document.body.classList.toggle('dark-mode');
            // Prevent default browser behavior
            e.preventDefault();
        }
    });
});