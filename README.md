# User Registration Form - Angular Forms Exercise

## Objective

The goal of this exercise is to create a **User Registration Form** using Angular's **Reactive Forms**. The form should collect user details, validate the inputs, and display the submitted data upon successful submission. This exercise covers all components of Angular Forms, including form controls, validation, dynamic forms, custom validators, and form submission handling.

## Requirements

### Form Structure

1. Use **Reactive Forms** to create the form model.
2. The form should include the following fields:
   - **Username** (Text input)
   - **Email** (Text input)
   - **Password** (Password input)
   - **Confirm Password** (Password input)
   - **Age** (Number input)
   - **Gender** (Radio buttons with options: Male, Female, Other)
   - **Interests** (Dynamic checkboxes created using **FormArray**)
   - **Profile Picture** (File input using Angular's reactive form handling)
3. Add a **Submit** button at the end of the form.

### Form Validation

1. **Username**:
   - Required and must be at least 3 characters long.
2. **Email**:
   - Required and must follow a valid email pattern.
3. **Password**:
   - Required and must be at least 6 characters long.
4. **Confirm Password**:
   - Must match the Password field.
5. **Age**:
   - Must be a number and greater than or equal to 18.
6. **Gender**:
   - Required (Radio buttons).
7. **Interests**:
   - At least 2 interests should be selected from a list of checkboxes.
8. **Profile Picture**:
   - Optional but should only accept image files (`.jpg`, `.png`).

### Custom Validation

1. Add a **custom validator** for the **Password** and **Confirm Password** fields to ensure they match.
2. Add an **asynchronous custom validator** for the **Username** field to check for username availability (simulate this with `setTimeout` or an observable).

### Form Submission

1. On submission, display the user’s input below the form in a neat, readable format.
2. Ensure that form data is only displayed if all fields pass validation.
3. If the form has validation errors, show appropriate error messages next to each field.

### Dynamic Interests Section

1. Use **FormArray** to handle dynamic interest checkboxes.
2. Provide at least 5 checkboxes (e.g., Sports, Music, Technology, Movies, Books).
3. Allow users to **add** or **remove** interests dynamically.

### Additional Features

1. Add a **Reset** button to clear the form fields.
2. Make the form responsive using basic CSS or a CSS framework like **Bootstrap**.

## Bonus

- Display a **loading spinner** during form submission to simulate an API request.
- Add form touch states and display a message if the user tries to submit an incomplete form.

## How to Get Started

1. Clone this repository and navigate to the project directory.
2. Run `npm install` to install the necessary dependencies.
3. Use `ng serve` to start the development server.
4. Implement the form by following the instructions above.

## License

This project is licensed under the MIT License.
