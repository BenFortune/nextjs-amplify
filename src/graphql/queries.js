/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
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
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMonth = /* GraphQL */ `
  query GetMonth($id: ID!) {
    getMonth(id: $id) {
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
export const listMonths = /* GraphQL */ `
  query ListMonths(
    $filter: ModelMonthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMonths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
