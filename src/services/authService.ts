

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
  }
  const mockUsers: User[] = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      password: '123456', 
    },
    {
      id: 2,
      username: 'user1',
      email: 'user1@example.com',
      password: '123456',
    },
  ];
  export const authenticate = (username: string, password: string): User | null => {
    const user = mockUsers.find(
      (u) => (u.username === username || u.email === username) && u.password === password
    );
    return user || null;
  };
  export const checkUserExists = (username: string): boolean => {
    return mockUsers.some((u) => u.username === username || u.email === username);
  };
  export const registerUser = (userData: Omit<User, 'id'>): Promise <User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          ...userData,
          id: mockUsers.length + 1,
        };
        mockUsers.push(newUser);
        resolve(newUser);
      }, 500);
    });
  };