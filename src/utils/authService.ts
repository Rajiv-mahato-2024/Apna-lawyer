/**
 * Authentication service that uses localStorage to simulate a database
 * In a real application, this would communicate with a backend server
 */

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'consumer' | 'lawyer' | 'student' | 'other';
  createdAt: string;
}

// Key for localStorage
const USERS_STORAGE_KEY = 'apna_lawyer_users';
const CURRENT_USER_KEY = 'apna_lawyer_current_user';

/**
 * Get all users from the "database"
 */
export const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

/**
 * Save users to the "database"
 */
const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

/**
 * Register a new user
 */
export const registerUser = (userData: Omit<User, 'id' | 'createdAt'>): User | null => {
  try {
    const users = getUsers();

    // Check if email already exists
    const emailExists = users.some(user => user.email === userData.email);
    if (emailExists) {
      return null; // Email already registered
    }

    // Create new user
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    // Add to "database"
    users.push(newUser);
    saveUsers(users);

    // Return the new user without the password
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword as User;
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};

/**
 * Login a user
 */
export const loginUser = (email: string, password: string): Omit<User, 'password'> | null => {
  try {
    const users = getUsers();

    // Find user by email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      return null; // User not found or invalid credentials
    }

    // Save current user to localStorage (without password)
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));

    return userWithoutPassword;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

/**
 * Get the current logged-in user
 */
export const getCurrentUser = (): Omit<User, 'password'> | null => {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

/**
 * Logout the current user
 */
export const logoutUser = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * Check if user is logged in
 */
export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};
