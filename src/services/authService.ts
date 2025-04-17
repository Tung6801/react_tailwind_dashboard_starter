import { rejects } from "assert";


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
      username: 'admin1',
      email: 'admin1@example.com',
      password: '123456',
    },
  ];
  export const authenticate = (username: string, password: string): Promise<User | null> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const savedAuth = localStorage.getItem('auth');
      if (savedAuth && JSON.parse(savedAuth).user) {
        return reject(new Error('Đã có tài khoản đăng nhập'));
      }
      
        const user = mockUsers.find(
          (u) => (u.username === username || u.email === username) && u.password === password
        );
        resolve(user || null);
      }, 500);
    });
  };
  export const checkUserExists = (usernameOrEmail: string):Promise <boolean> => {
    return Promise.resolve(
      mockUsers.some((u) => u.username === usernameOrEmail || u.email === usernameOrEmail)
    );
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