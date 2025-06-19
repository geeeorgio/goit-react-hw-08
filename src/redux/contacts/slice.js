import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  fetchContacts,
  updateContacts,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(updateContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map((contact) =>
          contact.id === payload.id ? payload : contact
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending,
          updateContacts.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected,
          updateContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = slice.reducer;
