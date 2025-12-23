chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "AUTOFILL") {
    autoFill();
  }
});

function autoFill() {
  const userData = {
    name: "Shivam Kumar",
    email: "shivam@gmail.com",
    phone: "6205999656",
    skills: "JavaScript, React, Node.js, REST APIs"
  };

  const fields = document.querySelectorAll("input, textarea");

  fields.forEach(field => {
    const fieldIdentifier =
      (field.name + field.placeholder).toLowerCase();

    if (fieldIdentifier.includes("name")) {
      field.value = userData.name;
    }

    if (fieldIdentifier.includes("email")) {
      field.value = userData.email;
    }

    if (
      fieldIdentifier.includes("phone") ||
      fieldIdentifier.includes("mobile")
    ) {
      field.value = userData.phone;
    }

    if (
      fieldIdentifier.includes("skill") ||
      fieldIdentifier.includes("experience")
    ) {
      field.value = userData.skills;
    }

    // Trigger and React detect the changhe
    field.dispatchEvent(new Event("input", { bubbles: true }));
  });
}
