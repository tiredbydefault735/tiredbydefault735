document.addEventListener('DOMContentLoaded', function() {
    // Get all region buttons and regions
    const buttons = document.querySelectorAll('.region-button');
    const regions = document.querySelectorAll('.region');
    
    // Show general info by default
    document.querySelector('#general').classList.add('active');
    document.body.classList.add('region-general');
    
    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and regions
            buttons.forEach(b => b.classList.remove('active'));
            regions.forEach(r => r.classList.remove('active'));
            
            // Remove all region classes from body
            document.body.className = document.body.className
                .split(' ')
                .filter(cls => !cls.startsWith('region-'))
                .join(' ');
            
            // Add active class to clicked button and corresponding region
            button.classList.add('active');
            const regionId = button.getAttribute('data-region');
            document.querySelector(`#${regionId}`).classList.add('active');
            
            // Add the region-specific class to body
            document.body.classList.add(`region-${regionId}`);
        });
    });
});
