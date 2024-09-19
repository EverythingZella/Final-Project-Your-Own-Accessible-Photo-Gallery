document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    
    const figures = document.querySelectorAll('figure');
    
    // Loop through each figure and add tabindex for accessibility
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', index + 1); // Adds sequential tab index

        // Mouse events
        figure.addEventListener('mouseover', () => {
            figure.style.borderColor = '#000'; // Highlight on hover
            console.log('Mouse entered image ' + (index + 1));
        });
        
        figure.addEventListener('mouseleave', () => {
            figure.style.borderColor = '#ddd'; // Reset border on leave
            console.log('Mouse left image ' + (index + 1));
        });

        // Keyboard focus events
        figure.addEventListener('focus', () => {
            figure.style.outline = '2px solid blue'; // Highlight on focus
            console.log('Focused on image ' + (index + 1));
        });

        figure.addEventListener('blur', () => {
            figure.style.outline = 'none'; // Remove highlight on blur
            console.log('Blurred from image ' + (index + 1));
        });
    });
});
