import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../service/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/contacts", contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/contacts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  "contacts/updateContacts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`/contacts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
