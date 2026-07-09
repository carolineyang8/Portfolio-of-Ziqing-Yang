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

    function openLightbox(image) {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        lightbox.classList.add('is-open');
        document.body.classList.add('image-lightbox-open');
        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('image-lightbox-open');
        lightboxImage.removeAttribute('src');
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
        if (event.target === lightbox || event.target === lightboxImage) {
            closeLightbox();
        }
    });

    closeButton.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}());
