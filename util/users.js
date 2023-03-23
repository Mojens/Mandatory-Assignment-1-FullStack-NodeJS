let lastUserId = 0;
export const userList = [
    { UUID: getNextId(), username: 'myusername', email: 'myemail@example.com', password: 'mypassword' },
    { UUID: getNextId(), username: 'myusername2', email: 'myemail2@example.com', password: 'mypassword2' },
    { UUID: getNextId(), username: 'myusername3', email: 'myemail3@example.com', password: 'mypassword3' },
    { UUID: getNextId(), username: 'admin123', email: 'test@mail.com', password: 'test123' }
];

export function getNextId() {
    lastUserId++;
    return lastUserId;
  }