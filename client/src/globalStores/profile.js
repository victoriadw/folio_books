import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProfileStore = create(
  persist(
    (set, get) => ({
      user: null,
      loginError: null,
      registerError: null,
      registerUser: async (forename, surname, email, password) => {
        try {
          const newUser = { forename, surname, email, password };

          const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });

          console.log(response);

          if (response.status === 200) {
            set({
              user: newUser,
              signedIn: true,
              loginError: null,
              registerError: null,
            });
          } else {
            const message = await response.json();

            set({
              user: null,
              signedIn: false,
              loginError: null,
              registerError: message,
            });
          }
        } catch (error) {
          set({
            user: null,
            signedIn: false,
            loginError: null,
            registerError: error,
          });
        }
      },
      signInUser: async (email, password) => {
        try {
          const response = await fetch("http://localhost:8000/users");
          const users = await response.json();

          const foundUser = users.find(
            (user) => user.email === email && user.password === password
          );

          if (foundUser) {
            set({
              user: foundUser,
              signedIn: true,
              loginError: null,
              registerError: null,
            });
          } else {
            throw new Error(
              "Invalid email or password. Try registering instead."
            );
          }
        } catch (error) {
          set({
            user: null,
            signedIn: false,
            loginError: error,
            registerError: null,
          });
        }
      },
      addBookToBasket: (book) => {
        const user = get().user;
        const { basket } = user;
        const updatedBasket = [...basket, book];
        user.basket = updatedBasket;
        console.log({ user });

        set({ user });
      },
      signOutUser: () => {
        set({
          user: null,
          signedIn: false,
          loginError: null,
          registerError: null,
        });
      },
      clearErrors: () => set({ loginError: null, registerError: null }),
    }),
    {
      name: "profile-data",
    }
  )
);
