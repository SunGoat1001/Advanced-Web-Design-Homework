function showDeleteModal(onConfirm, onCancel) {
    const modal = document.getElementById('confirmDeleteModal');
    modal.style.display = 'flex';
    document.getElementById('confirmDeleteBtn').onclick = function () {
        modal.style.display = 'none';
        if (onConfirm) onConfirm();
    };
    document.getElementById('cancelDeleteBtn').onclick = function () {
        modal.style.display = 'none';
        if (onCancel) onCancel();
    };
}
