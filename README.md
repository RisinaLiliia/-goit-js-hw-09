# goit-js-hw-09

Use this layout to style your task markup
https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=3-969&p=f&t=aW6eJhjD97xUevGz-0


Task 1 - Image Gallery

Perform this task in the files 1-gallery.html and 1-gallery.js.

In the previous homework assignment, you created an image gallery yourself using event delegation and added a modal window to display the full-size version of the image via a CDN library.

Creating galleries is an everyday task for a developer, but writing them manually every time is too time-consuming. For this, there are libraries that implement all the logic of the gallery.

Make the same gallery, but using the SimpleLightbox library, which will completely handle the processing of clicks on images, opening and closing the modal window, as well as scrolling through images using the keyboard.

Watch the demo video of the gallery.

Pay attention to the following details:

You no longer need to manually set up event delegation, since the SimpleLightbox library automatically tracks clicks on gallery cards. There is no need to add event listeners for gallery items.
A separate BasicLightbox library for creating modal windows is no longer needed, as the functionality for opening a modal window is built into the SimpleLightbox library.
To install the libraries, you no longer need to add CDN links to index.html. Instead, we install the libraries via npm in the terminal.

Perform this task in the 1-gallery.html and 1-gallery.js files. Break it down into several subtasks:

Use the code from the previous homework and refactor it. You don't need to write everything from scratch. For example, creating gallery items will be the same. But the delegation and opening modal window code needs to be removed.

You need to change the gallery card layout a little, use this template.

<li class="gallery-item">
<a class="gallery-link" href="large-image.jpg">
<img
class="gallery-image"
src="small-image.jpg"
alt="Image description"
/>
</a>
</li>

Add the SimpleLightbox library as a dependency to the project using npm .

In order to connect the CSS code of the library to the project, you need to add one more import, in addition to the one described in the documentation.

// Described in the documentation
import SimpleLightbox from "simplelightbox";

// Additional style import
import "simplelightbox/dist/simple-lightbox.min.css";

The next step is to initialize the library after creating and adding gallery elements to ul.gallery. To do this, read the SimpleLightbox documentation - first of all, the "Usage" and "Markup" sections.

After that, look at the "Options" section in the documentation and add the display of captions to images from the alt attribute. Let the caption be at the bottom and appear 250 milliseconds after the modal window opens.

What the mentor will pay attention to when checking:

The live page displays a gallery of images from the images data array
The image gallery is styled according to the layout
The data for the gallery is created dynamically in JS
No custom listeners
The SimpleLightbox library is connected using npm
The library instance is initialized after adding the gallery elements to the DOM and outside of any functions
When clicking on a gallery element, a modal window of the connected library opens, which contains an enlarged version of the image that was clicked on. All basic library functionality works
After 250 milliseconds after opening the modal window, the contents of the alt attribute appear at the bottom, as a caption for the image

Task 2 - Feedback form

Perform this task in the 2-form.html and 2-form.js files.

Add the form markup to the HTML. Write a script in JS that will save the values ​​of the fields to local storage when the user types something.

<form class="feedback-form" autocomplete="off">
<label>
Email
<input type="email" name="email" autofocus />
</label>
<label>
Message
<textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>

Perform this task in the 2-form.html and 2-form.js files. Break it down into several subtasks:

Declare a formData object outside any functions with the email and message fields, which initially have empty strings as values: { email: "", message: "" }.
Use the delegate method to track changes to the form via the input event. Store the current data from the email and message fields in formData and write this object to local storage. Use the "feedback-form-state" key to store data in the repository.
When loading the page, check if there is data in the local repository. If so, use it to fill the form and the formData object. If not, leave the form fields empty.
Before submitting the form, make sure that both form fields are filled. If any of the fields (properties of the formData object) are empty, show a notification with the text "Fill please all fields". If all fields are filled, output the formData object with the current values ​​to the console, clear the local repository, the formData object, and the form fields.

What the mentor will pay attention to when checking:

The live page displays a form with two elements
