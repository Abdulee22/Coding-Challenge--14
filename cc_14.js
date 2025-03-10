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
    
