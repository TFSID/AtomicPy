function insertHTML(idName, filePath) {
  
    function getHTMLFile(filePath) {
        return fetch(filePath)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch HTML file: " + response.statusText);
            }
            return response.text();
          })
          .catch((error) => {
            console.error("Error loading HTML file:", error);
          });
      }

  // Ensure idName is a string
  if (typeof idName !== "string") {
    console.error("idName must be a string.");
    return;
  }

  // HTML content to be inserted
  var newHTML = getHTMLFile(filePath);

  // Create a new div element
  var container = document.createElement("div");
  container.innerHTML = newHTML; // Set the inner HTML of the div

  // Get a reference to the original content div
  var originalContentDiv = document.getElementById(idName);

  if (!originalContentDiv) {
    console.error("Element with id", idName, "not found.");
    return;
  }

  // Insert the new content before the original content
  originalContentDiv.parentNode.insertBefore(
    container.firstChild,
    originalContentDiv
  );
}

// Example usage:
// Assuming you have an element with the id "originalContent" and you want to insert HTML from a file named "example.html"

