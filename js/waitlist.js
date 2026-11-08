// רשימת המתנה לכרטיסים
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function joinWaitlist(list, email) {
  const normalized = String(email).trim().toLowerCase();

  if (!EMAIL_PATTERN.test(normalized)) {
    return [...list];
  }
  if (list.includes(normalized)) {
    return [...list];
  }
  return [...list, normalized];
}

module.exports = { joinWaitlist };