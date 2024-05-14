# Hotel Booking Website: Roomify
live link: https://roomify-dexcoder.netlify.app/


## Features

- **Homepage Design**
  - Visually engaging homepage featuring a banner with images or videos of hotel rooms.
  - Includes a map displaying the hotel's location.
  - Newsletter signup section to encourage users to subscribe for updates, deals, and exclusive offers.
  - Highlights a selection of featured rooms with images, descriptions, and a "Book Now" button for quick access.
  - User reviews section to showcase feedback from previous guests.

- **User Authentication**
  - Users can create an account with email and password.
  - Integration with Google authentication via Firebase for easy login.

- **Navigation Bar**
  - Links to "Rooms" and "My Bookings" pages for easy navigation.
  - "My Bookings" page is accessible only to authenticated users.
  - Optional "About Us" and "Contact Us" pages for additional information.

- **Rooms Page**
  - Displays a list of available rooms with images.
  - Clicking on a room image redirects the user to the room details page.
  - Server-side filtering by price range to help users find rooms within their budget.
  - Displays the total review count for each room.
  - Users can post reviews for rooms after booking.

- **Room Details Page**
  - Detailed room description including price per night, room size, and availability.
  - Showcases room images and special offers (if available).
  - "Book Now" button to book the room, ensuring the room becomes unavailable upon booking.
  - Reviews section for user feedback, with a message displayed if no reviews are available.
  - Date picker for users to select the booking date (single day).
  - Booking summary modal with a confirm button to finalize the booking.

- **My Bookings Page**
  - Displays the list of rooms booked by the logged-in user.
  - Users can cancel bookings with a confirmation modal.
  - Option to post reviews from the bookings page.
  - "Update Date" button to change booking dates, with modifications reflected in the database and user notifications.

- **Review System**
  - Users can post reviews for rooms they have booked.
  - Reviews include a username, rating (1-5), comment, and timestamp.
  - Username is non-editable and taken from the logged-in user.
  - Reviews are displayed on the room details page for other users.

- **Access Control**
  - Non-logged-in users cannot book a room and are redirected to the login page if they attempt to do so.
  - Non-logged-in users can view basic room details but cannot post reviews.

- **404 Page**
  - Custom 404 page with an exciting image or gif and a "Back to home" button to redirect users to the homepage.

- **Packages**
  - Browser tab title and meta-data updates using Helmet.
  - Animation library Aos for smooth animations.
  - Map integration using libraries such as pigeon-maps or leaflet.
