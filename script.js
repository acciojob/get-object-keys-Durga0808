//your JS code here. If required.
// Create the student object
let student = {
  name: "John"
};

// Add a method to the Object prototype
Object.prototype.getKeys = function() {
  // Get all keys of the object using Object.keys()
  return Object.keys(this);
};

// Test the getKeys method
console.log(student.getKeys()); // Output: ['name']
