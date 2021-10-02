/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      date
      month
      name
      time
      address
      city
      state
      contact
      memo
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      date
      month
      name
      time
      address
      city
      state
      contact
      memo
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      date
      month
      name
      time
      address
      city
      state
      contact
      memo
      image
      createdAt
      updatedAt
    }
  }
`;
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMonth = /* GraphQL */ `
  mutation CreateMonth(
    $input: CreateMonthInput!
    $condition: ModelMonthConditionInput
  ) {
    createMonth(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMonth = /* GraphQL */ `
  mutation UpdateMonth(
    $input: UpdateMonthInput!
    $condition: ModelMonthConditionInput
  ) {
    updateMonth(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMonth = /* GraphQL */ `
  mutation DeleteMonth(
    $input: DeleteMonthInput!
    $condition: ModelMonthConditionInput
  ) {
    deleteMonth(input: $input, condition: $condition) {
      id
      name
      events {
        id
        date
        month
        name
        time
        address
        city
        state
        contact
        memo
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
