document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action; // Get action from data attribute
            const row = this.closest('tr');
            const transactionNo = row.cells[1].textContent;

            if (action === 'add') {
                alert(`Adding details for Transaction No: ${transactionNo}`);
                // Implement add functionality here
            } else if (action === 'pending') {
                alert(`Transferring Transaction No: ${transactionNo} to Pending`);
                // Implement transfer to pending functionality here
            } else if (action === 'decline') {
                const confirmDecline = confirm(`Are you sure you want to decline Transaction No: ${transactionNo}?`);
                if (confirmDecline) {
                    row.remove(); // Remove the row from the table
                    alert(`Transaction No: ${transactionNo} has been declined.`);
                }
            }
        });
    });
});
