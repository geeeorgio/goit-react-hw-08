import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  fetchContacts,
  updateContacts,
} from "./operations";
import { userLogout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isOpenModal: false,
  isEdit: false,
  contactId: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setIsOpenModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },
    setIsEdit: (state, { payload }) => {
      state.isEdit = payload;
    },
    setContactId: (state, { payload }) => {
      state.contactId = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(updateContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.map((contact) =>
          contact.id === payload.id ? payload : contact
        );
        state.error = null;
        state.isLoading = false;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.items = [];
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

export const { setIsOpenModal, setIsEdit, setContactId } = slice.actions;
export const contactsReducer = slice.reducer;
