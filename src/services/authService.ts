
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
      username: 'user',
      email: 'user@example.com',
      password: '123456',
    },
  ];
  export const authenticate = (username: string, password: string): Promise<User | null> => {
    
    return new Promise((resolve,reject) => {
      setTimeout(() => {
          const user = mockUsers.find(
            (u) => (u.username === username || u.email === username) && u.password === password
          );
          if (!user) {
            reject(new Error('Incorrect account or password'));
            return;
          }
          
      resolve(user);
    },500);
    });
        }
      
  export const checkUserExists = (usernameOrEmail: string):Promise <boolean> => {
    return Promise.resolve(
      mockUsers.some((u) => u.username === usernameOrEmail || u.email === usernameOrEmail)
    );
  };
  export const registerUser = (userData: Omit<User, 'id'>): Promise <User> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        try{
          const exists = mockUsers.some(
            u => u.username === userData.username || u.email === userData.email
          );
          
          if (exists) {
            reject(new Error('Username hoặc email đã tồn tại'));
            return;
          }
          const newUser = {
            ...userData,
            id: mockUsers.length + 1,
          };
          mockUsers.push(newUser);
          resolve(newUser);
        } catch (error) {
        reject(error);
        }
        }, 500);
    });
  };