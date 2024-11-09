function setMobileLayout() {
    const header = document.querySelector('.header');
    const headerLeft = document.querySelector('.header-left');
    const headerRight = document.querySelector('.header-right');
    const mainContent = document.querySelector('.main-content');
    const topics = document.querySelector('.topics');

    // Check if screen width is under 600px (mobile view)
    if (window.innerWidth <= 600) {
        // Make header items stack vertically
        header.style.flexDirection = 'column';
        header.style.alignItems = 'center';
        headerLeft.style.flexDirection = 'column';
        headerRight.style.marginTop = '10px';

        // Stack main content sections line-by-line
        mainContent.style.display = 'block';
        mainContent.style.width = '100%';
        mainContent.style.padding = '0.5rem';

        // Stack topics vertically
        topics.style.display = 'flex';
        topics.style.flexDirection = 'column';
        topics.style.alignItems = 'center';

        // Adjust padding and margins for a cleaner mobile look
        document.querySelectorAll('.topic').forEach(topic => {
            topic.style.marginBottom = '1rem';
            topic.style.width = '100%';
            topic.style.textAlign = 'center';
        });
    } else {
        // Reset to default layout for desktop
        header.style.flexDirection = 'row';
        headerLeft.style.flexDirection = 'row';
        headerRight.style.marginTop = '0';
        
        mainContent.style.display = '';
        mainContent.style.width = '';
        mainContent.style.padding = '1rem';
        
        topics.style.display = 'grid';
        topics.style.gridTemplateColumns = 'repeat(auto-fit, minmax(100px, 1fr))';
        topics.style.alignItems = '';
    }
}

// Run setMobileLayout on page load and whenever the window is resized
window.addEventListener('load', setMobileLayout);
window.addEventListener('resize', setMobileLayout);

function setMobileImages() {
    const images = document.querySelectorAll('img');
    const fbLogo = document.querySelector('.fb-logo');

    // Check if screen width is under 600px (mobile view)
    if (window.innerWidth <= 600) {
        // Hide all images except for the Facebook logo
        images.forEach(img => {
            if (img !== fbLogo) {
                img.style.display = 'none';
            }
        });
    } else {
        // Show all images for larger screens
        images.forEach(img => {
            img.style.display = '';
        });
    }
}

// Run setMobileImages on page load and whenever the window is resized
window.addEventListener('load', setMobileImages);
window.addEventListener('resize', setMobileImages);

