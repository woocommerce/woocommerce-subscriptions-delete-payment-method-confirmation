/**
 * Plugin Name: WooCommerce Subscriptions - Delete Payment Method Confirmation
 * Plugin URI: https://github.com/Prospress/woocommerce-subscriptions-delete-payment-method-confirmation
 * Description: Adds a confirmation dialog when deleting a payment method.
 * Author: Prospress Inc.
 * Author URI: http://prospress.com/
 * Version: 1.0
 *
 * Copyright 2017 Prospress, Inc.  (email : freedoms@prospress.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @package		WooCommerce Subscriptions
 * @author		Prospress Inc.
 * @since		1.0
 */

 jQuery(document).ready(function($) {
   $('.payment-method-actions a.delete').click(function(e) {
     var confirmDelete = confirm("Are you sure you want to delete this payment method? Any subscriptions using this payment method will have to be updated individually.")
     if (!confirmDelete) {
       e.preventDefault()
     }
   });
 })
