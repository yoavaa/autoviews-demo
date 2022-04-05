import { CoreSchemaMetaSchema } from "@autoviews/core";

const userSchema: CoreSchemaMetaSchema = {
  $id: "userSchema",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "First Name"
    },
    lastName: {
      type: "string",
      title: "Last Name"
    },
    age: {
      type: "number",
      title: "Age"
    },
    active: {
      type: "boolean",
      title: "Is User Active"
    }
  },
  required: ["firstName", "lastName", "age"]
};

const carSchema: CoreSchemaMetaSchema = {
  type: "object",
  properties: {
    model: {
      type: "string",
      title: "Model name"
    },
    speed: {
      type: "number",
      maximum: 210,
      minimum: 60,
      title: "Max Speed"
    }
  }
};

const cocktailSchema: CoreSchemaMetaSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Cocktail name"
    },
    isStrong: {
      type: "boolean",
      title: "Is a strong one?"
    }
  }
};

export const usersSchema: CoreSchemaMetaSchema = {
  type: "array",
  title: "Users",
  items: userSchema
};

export const carsSchema: CoreSchemaMetaSchema = {
  type: "array",
  title: "Cars",
  items: carSchema
};

export const cocktailsSchema: CoreSchemaMetaSchema = {
  type: "array",
  title: "Coktails",
  items: cocktailSchema
};
