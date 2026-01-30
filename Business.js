
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.biz-card');

    function performFilter(text) {
        if (searchInput) searchInput.value = text;

        cards.forEach(card => {
            const cardContent = card.innerText.toLowerCase();
            if (cardContent.includes(text.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const incomingSearch = urlParams.get('search');
    
    if (incomingSearch) {
        performFilter(incomingSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performFilter(e.target.value);
        });

        const form = document.querySelector('.search-form');
        if (form) {
            form.addEventListener('submit', (e) => e.preventDefault());
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            cards.forEach(card => {
                const tag = card.querySelector('.tag').innerText.toLowerCase();
                if (category === 'all' || tag.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});