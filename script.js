document.addEventListener('DOMContentLoaded', function() {
    function updateProgressBar() {
        const startDate = new Date('2024-04-08');
        const endDate = new Date('2024-06-14');
        const today = new Date();
        const totalDays = (endDate - startDate) / (1000 * 3600 * 24);
        let daysPassed = (today - startDate) / (1000 * 3600 * 24);

        daysPassed = Math.max(0, Math.min(daysPassed, totalDays));
        const progress = (daysPassed / totalDays) * 100;

        const daysRemaining = Math.ceil((endDate - today) / (1000 * 3600 * 24));

        const progressBar = document.getElementById('progressBar');
        const percentageDisplay = document.getElementById('percentage');
        const daysRemainingDisplay = document.getElementById('daysRemaining');

        progressBar.value = progress;
        percentageDisplay.textContent = `${progress.toFixed(2)}% Complete`;
        daysRemainingDisplay.textContent = `${daysRemaining} days remaining`;
    }

    setInterval(updateProgressBar, 86400000); // Update daily
    updateProgressBar(); // Initial update on page load
});
