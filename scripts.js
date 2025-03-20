document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdown = dropdownButton.closest('.dropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const searchInput = document.getElementById('searchInput');
    const tickerContent = document.querySelector('.ticker-content');

    // Toggle dropdown
    dropdownButton.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Update search option
    dropdownMenu.querySelectorAll('a').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const optionText = option.dataset.option;
            const placeholder = option.dataset.placeholder;
            dropdownButton.textContent = `${optionText} ▼`;
            searchInput.placeholder = placeholder;
            dropdown.classList.remove('active');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Ensure ticker animation runs continuously
    tickerContent.style.animation = 'ticker 20s infinite linear';

    // Search functionality placeholder
    document.querySelector('.search-icon').addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log(`Search triggered for: ${query} in category: ${dropdownButton.textContent.replace(' ▼', '')}`);
            // Future: Add API call or redirect
        }
    });
});