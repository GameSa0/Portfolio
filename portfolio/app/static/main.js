// Example animation: add a little JS effect to the hero circle

document.addEventListener('DOMContentLoaded', () => {
    // Hero circle animation (if present)
    const circle = document.querySelector('.animated-circle');
    if(circle) {
        circle.addEventListener('mouseenter', () => {
            circle.style.boxShadow = '0 0 64px 16px #9be7ff';
        });
        circle.addEventListener('mouseleave', () => {
            circle.style.boxShadow = '0 8px 32px rgba(88,132,255,0.18)';
        });
    }

    // Gallery category filtering (legacy and modern)
    const categoryBtns = document.querySelectorAll('.category-btn, .category-btn-modern');
    const galleryItems = document.querySelectorAll('.gallery-item, .gallery-card');
    if(categoryBtns.length && galleryItems.length) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const active = btn.parentElement.querySelector('.active');
                if(active) active.classList.remove('active');
                btn.classList.add('active');
                const cat = btn.getAttribute('data-category');
                galleryItems.forEach(item => {
                    if(cat === 'all' || item.getAttribute('data-category') === cat) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Image modal for certificates/achievements
const imgModal = document.getElementById('img-modal');
const imgModalImg = document.getElementById('img-modal-src');
const imgModalTitle = document.getElementById('img-modal-title');
const imgModalDesc = document.getElementById('img-modal-desc');
const imgModalClose = imgModal ? imgModal.querySelector('.modal-close') : null;

function openImgModal(src, title, desc) {
    if (imgModal && imgModalImg && imgModalTitle && imgModalDesc) {
        imgModalImg.src = src;
        imgModalImg.alt = title;
        imgModalTitle.textContent = title;
        imgModalDesc.textContent = desc;
        imgModal.classList.add('active');
    }
}

function closeImgModal() {
    if (imgModal) {
        imgModal.classList.remove('active');
        imgModalImg.src = '';
        imgModalTitle.textContent = '';
        imgModalDesc.textContent = '';
    }
}

if (imgModal && imgModalClose) {
    imgModalClose.addEventListener('click', closeImgModal);
    imgModal.addEventListener('click', (e) => {
        if (e.target === imgModal) {
            closeImgModal();
        }
    });
}

const imgTriggers = document.querySelectorAll('.modal-img-trigger');
imgTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = trigger.getAttribute('data-img');
        const title = trigger.getAttribute('data-title');
        const desc = trigger.getAttribute('data-desc');
        openImgModal(src, title, desc);
    });
});
});
// Profile modal logic
const profileModal = document.getElementById('profile-modal');
const profileModalTrigger = document.getElementById('profile-img-modal-trigger');
const profileModalClose = profileModal ? profileModal.querySelector('.profile-modal-close') : null;

if (profileModal && profileModalTrigger) {
    profileModalTrigger.addEventListener('click', () => {
        profileModal.classList.add('active');
    });
}
if (profileModal && profileModalClose) {
    profileModalClose.addEventListener('click', () => {
        profileModal.classList.remove('active');
    });
    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.classList.remove('active');
        }
    });
}