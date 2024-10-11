document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action; // Get action from data attribute
            const row = this.closest('tr');
            const transactionNo = row.cells[2].textContent;

            if (action === 'view') {
                alert(`Viewing details for Transaction No: ${transactionNo}`);
            } else if (action === 'add') {
                alert(`Adding details for Transaction No: ${transactionNo}`);
                // Implement add functionality here
            } else if (action === 'cancel') {
                const confirmCancel = confirm(`Are you sure you want to cancel Transaction No: ${transactionNo}?`);
                if (confirmCancel) {
                    row.remove(); // Remove the row from the table
                    alert(`Transaction No: ${transactionNo} has been canceled.`);
                }
            }
        });
    });
});
