document.addEventListener('DOMContentLoaded', function() {
    // Get all region buttons and regions
    const buttons = document.querySelectorAll('.creator-button');
    const creator = document.querySelectorAll('.creator');
    
    // Show general info by default
    document.querySelector('#blue').classList.add('active');
    document.body.classList.add('creator-blue');
    
    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and regions
            buttons.forEach(b => b.classList.remove('active'));
            creator.forEach(r => r.classList.remove('active'));
            
            // Remove all region classes from body
            document.body.className = document.body.className
                .split(' ')
                .filter(cls => !cls.startsWith('creator-'))
                .join(' ');
            
            // Add active class to clicked button and corresponding region
            button.classList.add('active');
            const creatorId = button.getAttribute('data-creator');
            document.querySelector(`#${creatorId}`).classList.add('active');
            
            // Add the region-specific class to body
            document.body.classList.add(`creator-${creatorId}`);
        });
    });
});