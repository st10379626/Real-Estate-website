import { db, signInWebUser } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Wait for auth to be ready before setting up forms
signInWebUser().then(() => {
  setupForms();
});

function setupForms() {
  // === CONTACT FORMS ===
  const contactForms = document.querySelectorAll('.form-container form');
  contactForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = form.querySelector('input[placeholder="Name"]').value.trim();
      const email = form.querySelector('input[placeholder="Email"]').value.trim();
      const message = form.querySelector('textarea[placeholder="Message"]').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
        return;
      }

      try {
        await addDoc(collection(db, "contactMessages"), {
          name,
          email,
          message,
          timestamp: new Date()
        });
        alert("✅ Message sent successfully!");
        form.reset();
      } catch (error) {
        alert("❌ Error sending message: " + error.message);
        console.error("Error:", error);
      }
    });
  });

  // === SCHEDULE MEETING FORM ===
  const bookBtn = document.querySelector('.book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', async () => {
      const dateTimeInput = document.querySelector('.datetime-input').value;

      if (!dateTimeInput) {
        alert("Please select a date and time first.");
        return;
      }

      try {
        await addDoc(collection(db, "scheduledMeetings"), {
          meetingDate: dateTimeInput,
          timestamp: new Date()
        });
        alert("✅ Meeting scheduled successfully!");
        document.querySelector('.datetime-input').value = "";
      } catch (error) {
        alert("❌ Error scheduling meeting: " + error.message);
        console.error("Error:", error);
      }
    });
  }
}

