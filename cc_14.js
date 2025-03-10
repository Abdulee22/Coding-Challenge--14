// Task 2: Adding Support Tickets Dynamically //
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement("div"); // Create a new div for the ticket
    ticket.setAttribute("class", "support-ticket"); // Set class for styling
    
ticket.innerHTML = `
    <h3 class="customer-name">${customerName}</h3>
    <p class="issue-description">${issueDescription}</p>
    <label class="priority-level">Priority: ${priorityLevel}</label>
    <button class="resolve-btn">Resolve</button>`; // Populate ticket content
    
const ticketContainer = document.getElementById("ticketContainer"); 
ticketContainer.appendChild(ticket); // Appended the ticket to the container
    
       
const resolveButton = ticket.querySelector(".resolve-btn"); // Event listener for resolve button
resolveButton.addEventListener("click", (event) => {
event.stopPropagation(); // Prevent event bubbling
ticketContainer.removeChild(ticket); });}// Remove the ticket

// Task 3: Converting NodeLists to Arrays for Bulk Updates //
function highlightHighPriorityTickets() {
const tickets = document.querySelectorAll(".priority-level");
const ticketsArray = Array.from(tickets); // Convert NodeList to an array
    
ticketsArray.forEach(ticket => {
if (ticket.innerText.includes("High")) { // Check if ticket has "High" priority
ticket.closest(".support-ticket").style.border = "2px solid green"; // Highlight with border
ticket.closest(".support-ticket").style.backgroundColor = "blue"; }});}// Change background color  

// Task 4: Implementing Ticket Resolution with Event Bubbling //
const ticketContainer = document.getElementById("ticketContainer"); // Assuming there's a ticketContainer div

ticketContainer.addEventListener("click", (event) => {
if (event.target.classList.contains("support-ticket")) {
console.log("Ticket clicked:", event.target.querySelector(".customer-name").innerText);}});// Attach event listener to the ticket container for event bubbling

// Task 5: Inline Editing for Support Tickets
function enableInlineEditing(ticket) {
const nameElement = ticket.querySelector(".customer-name");
const issueElement = ticket.querySelector(".issue-description");
const priorityElement = ticket.querySelector(".priority-level");
    
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.value = nameElement.innerText; // Pre-fill with current name
    
const issueInput = document.createElement("input");
issueInput.type = "text";
issueInput.value = issueElement.innerText; // Pre-fill with current issue description
    
const prioritySelect = document.createElement("select");
const priorityOptions = ["Low", "Medium", "High"];
 priorityOptions.forEach(priority => {
 const option = document.createElement("option");
option.value = priority;
option.innerText = priority;
if (priority === priorityElement.innerText.replace("Priority: ", "")) {
option.selected = true;} // Pre-select current priority
prioritySelect.appendChild(option);});
    
const saveButton = document.createElement("button");
saveButton.innerText = "Save";
 saveButton.classList.add("save-btn");
    
ticket.innerHTML = "";
 ticket.appendChild(nameInput);
ticket.appendChild(issueInput);
ticket.appendChild(prioritySelect);
ticket.appendChild(saveButton); // Inputs and save button
    
saveButton.addEventListener("click", () => {
nameElement.innerText = nameInput.value;
issueElement.innerText = issueInput.value;
 priorityElement.innerText = "Priority: " + prioritySelect.value; // Save updated ticket details
    
ticket.innerHTML = `
        <h3 class="customer-name">${nameInput.value}</h3>
        <p class="issue-description">${issueInput.value}</p>
        <label class="priority-level">Priority: ${prioritySelect.value}</label>
        <button class="resolve-btn">Resolve</button>`; // inner HTML
            
    const resolveButton = ticket.querySelector(".resolve-btn"); // Reattach resolve button event listener
    resolveButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event bubbling
    ticketContainer.removeChild(ticket);});});} // Remove the ticket
    
    // Sample case //
    addSupportTicket("Rock Lee", "Cannot access the account", "High");
    addSupportTicket("Gaara", "Page loading error", "Medium");
    