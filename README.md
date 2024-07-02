# Hotel Booking Website: Roomify
live link: https://roomify-dexcoder.netlify.app/

## <a name="overview">🔋 Overview</a>
The hotel room booking website allows adding one room to the cart at a time, ensuring single-room purchases to simplify the booking process and prevent multiple bookings simultaneously.


## <a name="features">🔍 Features</a>
- Non-logged-in users cannot book a room and are redirected to the login page if they attempt to do so & can view basic room details but cannot post reviews.
- Custom 404 page with an exciting image or gif and a "Back to home" button to redirect users to the homepage & 
- Animation library Aos for smooth animations.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/deXcoder9/roomify-hotel.git
cd roomify-hotel
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE__APIKEY= firebaseapikey
VITE__AUTHDOMAIN=firebaseauthdomain
VITE__PROJECTID=firebaseprojectid
VITE__STORAGEBUCKET=firebasestoragebucket
VITE__MESSAGINGSENDERID=firebasemsid
VITE__APPID=firebaseappid
```

Replace the placeholder values with your actual EmailJS credentials. You can obtain these credentials by signing up on the [EmailJS website](https://www.emailjs.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.




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


- **Rooms Page**
  - Displays a list of available rooms with images.
  - Clicking on a room image redirects the user to the room details page.
  - Server-side filtering by price range to help users find rooms within their budget.
  - Displays the total review count for each room.
  - Users can post reviews for rooms after booking.


- **My Bookings Page**
  - Displays the list of rooms booked by the logged-in user.
  - Users can cancel bookings with a confirmation modal.
  - Option to post reviews from the bookings page.
  - "Update Date" button to change booking dates, with modifications reflected in the database and user notifications.



- **Packages**
  - Browser tab title and meta-data updates using Helmet.
  - Animation library Aos for smooth animations.
  - Map integration using libraries such as pigeon-maps or leaflet.
