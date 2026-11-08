// TicketRush pricing
const TICKET_PRICE = 350; // ILS per ticket
const SERVICE_FEE = 12;   // ILS service fee per ticket (never discounted)
const MAX_TICKETS = 8;    // max tickets per order (regular customers)
const MEMBER_MAX_TICKETS = 6;        // max tickets per order (club members)
const MEMBER_DISCOUNT_PERCENT = 20;  // club member discount on ticket price
const STUDENT_DISCOUNT_PERCENT = 15; // student discount on ticket price

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // Discounts do not stack: take the larger one only
  const discountPercent = Math.max(
    isMember ? MEMBER_DISCOUNT_PERCENT : 0,
    isStudent ? STUDENT_DISCOUNT_PERCENT : 0
  );
  const ticketPrice = (TICKET_PRICE * (100 - discountPercent)) / 100;
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS,
    MEMBER_MAX_TICKETS, MEMBER_DISCOUNT_PERCENT, STUDENT_DISCOUNT_PERCENT,
    maxTickets, calcTotal
  };
}