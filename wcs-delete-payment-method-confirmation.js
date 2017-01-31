jQuery(document).ready(function($) {
  $('.payment-method-actions a.delete').click(function(e) {
    var confirmDelete = confirm("Are you sure you want to delete this payment method? Any subscriptions using this payment method will require manual payment unless they are updated individually.")
    if (!confirmDelete) {
      e.preventDefault()
    }
  });
})
