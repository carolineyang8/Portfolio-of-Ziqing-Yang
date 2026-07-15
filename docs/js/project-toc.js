(function() {
    const content = document.querySelector('.markdown-content');
    const wrapper = document.querySelector('.content-wrapper');

    if (!content || !wrapper) {
        return;
    }

    const headings = Array.from(content.querySelectorAll('h1')).filter(function(heading) {
        return heading.textContent.trim().length > 0;
    });

    if (headings.length < 2) {
        return;
    }

    const usedIds = new Set();
    const createId = function(text, index) {
        const base = text
            .toLowerCase()
            .replace(/&/g, ' and ')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '') || 'section';
        let id = base;
        let count = 2;

        while (usedIds.has(id) || document.getElementById(id)) {
            id = base + '-' + count;
            count += 1;
        }

        usedIds.add(id);
        return index === 0 && id === 'section' ? 'section-1' : id;
    };

    const nav = document.createElement('nav');
    nav.className = 'project-toc';
    nav.setAttribute('aria-label', 'Project sections');

    const label = document.createElement('span');
    label.className = 'project-toc__label';
    label.textContent = 'Sections';

    const list = document.createElement('ol');
    list.className = 'project-toc__list';

    const setActiveLink = function(id) {
        links.forEach(function(link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
    };

    const links = headings.map(function(heading, index) {
        if (!heading.id) {
            heading.id = createId(heading.textContent.trim(), index);
        }

        const item = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'project-toc__link';
        link.href = '#' + heading.id;
        link.textContent = heading.textContent.trim();

        item.appendChild(link);
        list.appendChild(item);

        link.addEventListener('click', function(event) {
            event.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', '#' + heading.id);
            setActiveLink(heading.id);
        });

        return link;
    });

    nav.appendChild(label);
    nav.appendChild(list);
    wrapper.insertBefore(nav, content);

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                return;
            }

            setActiveLink(entry.target.id);
        });
    }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0
    });

    headings.forEach(function(heading) {
        observer.observe(heading);
    });

    if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) {
            requestAnimationFrame(function() {
                target.scrollIntoView({ block: 'start' });
                setActiveLink(target.id);
            });
        }
    }
}());
