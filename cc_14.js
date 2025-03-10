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
