
      
        
        
    



//MODAL_FORMS




    // Function to open modal
    function openModal(modalId) {
        // Open the modal
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    
        // Disable interaction for the entire page except the modal
        document.body.classList.add('non-interactive');
    }

// Function to close modal
function closeModal(modalId) {
// Close the modal
const modal = document.getElementById(modalId);
modal.style.display = 'none';

// Restore interaction for the entire page
document.body.classList.remove('non-interactive');
}

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        var leaveModal = document.getElementById('leaveFormModal');
        var mrrModal = document.getElementById('mrrFormModal');
        if (event.target == leaveModal || event.target == mrrModal) {
            closeModal(leaveModal.id); // Close modal
            closeModal(mrrModal.id);   // Close modal
        }
    }





// LOADER

    // Wait for the window to load, then start the transition
    window.addEventListener('load', function() {
        // Simulate a loading delay (for demonstration; you can adjust as needed)
        setTimeout(function() {
            // Add the "loaded" class to the body to trigger the fade-in of the content
            document.body.classList.add('loaded');
        }, 500); // 3-second loader duration
    });

