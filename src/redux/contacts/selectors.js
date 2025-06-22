import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName, selectFilterNumber } from "../filters/selectors";
import { normalizeNumber } from "../../helpers/normalizeNumber";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectIsOpenModal = (state) => state.contacts.isOpenModal;
export const selectIsEdit = (state) => state.contacts.isEdit;
export const selectContactId = (state) => state.contacts.contactId;

export const selectContactById = createSelector(
  [selectContacts, selectContactId],
  (contacts, id) => contacts.find((contact) => contact.id === id) || {}
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName, selectFilterNumber],
  (contacts, name, number) =>
    name
      ? contacts.filter((contact) => contact.name.toLowerCase().includes(name))
      : contacts || number
      ? contacts.filter((contact) =>
          normalizeNumber(contact.number).includes(normalizeNumber(number))
        )
      : contacts
);
