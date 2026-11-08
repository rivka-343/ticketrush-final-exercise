// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס (ללא הנחה)
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 4;  // מקסימום כרטיסים לחברת מועדון
const MEMBER_DISCOUNT_PERCENT = 20; // הנחה על מחיר הכרטיס בלבד

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  const ticketPrice = isMember
    ? (TICKET_PRICE * (100 - MEMBER_DISCOUNT_PERCENT)) / 100
    : TICKET_PRICE;
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS,
    MEMBER_MAX_TICKETS, MEMBER_DISCOUNT_PERCENT,
    maxTickets, calcTotal
  };
}