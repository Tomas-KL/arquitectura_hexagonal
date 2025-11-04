export const audit = {
  logAction: (userId, action, details) => {
    console.log(`User ${userId} realizó ${action}: ${JSON.stringify(details)}`);
  },
};