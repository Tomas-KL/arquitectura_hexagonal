export const audit = {
  logAction: (userId, action, details) => {
    console.log(`Usuario ${userId} realizó ${action}: ${JSON.stringify(details)}`);
  },
};