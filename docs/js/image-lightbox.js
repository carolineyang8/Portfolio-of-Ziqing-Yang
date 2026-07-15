(function () {
    const imageSelector = '.hero-image img, .markdown-content img';
    const images = Array.from(document.querySelectorAll(imageSelector));

    if (!images.length) {
        return;
    }

    const style = document.createElement('style');
    style.textContent = `
        .image-lightbox-trigger {
            cursor: zoom-in;
        }

        .image-lightbox {
            position: fixed;
            inset: 0;
            z-index: 3000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: rgba(10, 10, 10, 0.86);
        }

        .image-lightbox.is-open {
            display: flex;
        }

        .image-lightbox__image {
            max-width: 95vw;
            max-height: 90vh;
            width: auto;
            height: auto;
            object-fit: contain;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
            cursor: zoom-out;
            transform: translate(0, 0) scale(1);
            transform-origin: center center;
        }

        .image-lightbox.is-zoomable .image-lightbox__image {
            cursor: zoom-in;
            user-select: none;
        }

        .image-lightbox.is-zoomed .image-lightbox__image {
            cursor: grab;
        }

        .image-lightbox.is-dragging .image-lightbox__image {
            cursor: grabbing;
        }

        .image-lightbox__close {
            position: fixed;
            top: 1rem;
            right: 1rem;
            width: 2.75rem;
            height: 2.75rem;
            border: 1px solid rgba(255, 255, 255, 0.35);
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.35);
            color: #ffffff;
            font-size: 1.75rem;
            line-height: 1;
            cursor: pointer;
        }

        .image-lightbox__close:focus-visible {
            outline: 3px solid #ffffff;
            outline-offset: 3px;
        }

        body.image-lightbox-open {
            overflow: hidden;
        }

        @media (max-width: 768px) {
            .image-lightbox {
                padding: 1rem;
            }

            .image-lightbox__image {
                max-width: 96vw;
                max-height: 86vh;
            }
        }
    `;
    document.head.appendChild(style);

    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Expanded image view');
    lightbox.innerHTML = `
        <button type="button" class="image-lightbox__close" aria-label="Close expanded image">&times;</button>
        <img class="image-lightbox__image" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.image-lightbox__image');
    const closeButton = lightbox.querySelector('.image-lightbox__close');
    let isZoomable = false;
    let zoomScale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;

    function applyZoomState() {
        lightboxImage.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(' + zoomScale + ')';
        lightbox.classList.toggle('is-zoomed', isZoomable && zoomScale > 1);
    }

    function resetZoomState() {
        zoomScale = 1;
        translateX = 0;
        translateY = 0;
        isDragging = false;
        lightbox.classList.remove('is-zoomed', 'is-dragging');
        applyZoomState();
    }

    function openLightbox(image) {
        resetZoomState();
        isZoomable = image.dataset.lightboxZoom === 'true';
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        lightbox.classList.toggle('is-zoomable', isZoomable);
        lightbox.classList.add('is-open');
        document.body.classList.add('image-lightbox-open');
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.classList.remove('is-zoomable');
        document.body.classList.remove('image-lightbox-open');
        lightboxImage.removeAttribute('src');
        isZoomable = false;
        resetZoomState();
    }

    images.forEach(function (image) {
        image.classList.add('image-lightbox-trigger');
        image.setAttribute('tabindex', '0');
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', 'View larger image');

        image.addEventListener('click', function () {
            openLightbox(image);
        });

        image.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox || (event.target === lightboxImage && !isZoomable)) {
            closeLightbox();
        }
    });

    lightboxImage.addEventListener('wheel', function (event) {
        if (!isZoomable) {
            return;
        }

        event.preventDefault();
        const nextScale = Math.min(4, Math.max(1, zoomScale + (event.deltaY < 0 ? 0.35 : -0.35)));

        if (nextScale === 1) {
            translateX = 0;
            translateY = 0;
        }

        zoomScale = nextScale;
        applyZoomState();
    }, { passive: false });

    lightboxImage.addEventListener('dblclick', function (event) {
        if (!isZoomable) {
            return;
        }

        event.preventDefault();
        zoomScale = zoomScale > 1 ? 1 : 2.4;
        translateX = 0;
        translateY = 0;
        applyZoomState();
    });

    lightboxImage.addEventListener('mousedown', function (event) {
        if (!isZoomable || zoomScale <= 1) {
            return;
        }

        event.preventDefault();
        isDragging = true;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        dragOriginX = translateX;
        dragOriginY = translateY;
        lightbox.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', function (event) {
        if (!isDragging) {
            return;
        }

        translateX = dragOriginX + event.clientX - dragStartX;
        translateY = dragOriginY + event.clientY - dragStartY;
        applyZoomState();
    });

    document.addEventListener('mouseup', function () {
        if (!isDragging) {
            return;
        }

        isDragging = false;
        lightbox.classList.remove('is-dragging');
    });

    closeButton.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}());
