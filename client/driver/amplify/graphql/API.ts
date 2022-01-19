/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type HotelMastInput = {
  hotelID: string,
  hotelName: string,
};

export type HotelMast = {
  __typename: "HotelMast",
  hotelID: string,
  hotelName: string,
};

export type RecordMastInput = {
  cleanerID: string,
  cleaningRoomID: string,
  cleaningTime: number,
  createdAt: number,
  finishedAt: number,
  ifScored: boolean,
  recordHotelID: string,
  recordID: string,
  startAt: number,
};

export type RecordMast = {
  __typename: "RecordMast",
  cleanerID: string,
  cleaningRoomID: string,
  cleaningTime: number,
  createdAt: number,
  finishedAt: number,
  ifScored: boolean,
  recordHotelID: string,
  recordID: string,
  startAt: number,
};

export type RoomMastInput = {
  createdAt: number,
  roomHotelID: string,
  roomIcon?: S3ObjectInput | null,
  roomID: string,
  roomName: string,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
  url: string,
};

export type RoomMast = {
  __typename: "RoomMast",
  createdAt: number,
  roomHotelID: string,
  roomIcon?: S3Object | null,
  roomID: string,
  roomName: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
  url: string,
};

export type ScoreMastInput = {
  createdAt: number,
  recordID: string,
  score: number,
  scoreID: string,
  scorerUserID: string,
};

export type ScoreMast = {
  __typename: "ScoreMast",
  createdAt: number,
  recordID: string,
  score: number,
  scoreID: string,
  scorerUserID: string,
};

export type UserMastInput = {
  createdAt: number,
  email: string,
  name: string,
  role: string,
  updatedAt: number,
  userHotelID?: string | null,
  userIcon?: S3ObjectInput | null,
  userID: string,
};

export type UserMast = {
  __typename: "UserMast",
  createdAt: number,
  email: string,
  name: string,
  role: string,
  updatedAt: number,
  userHotelID?: string | null,
  userIcon?: S3Object | null,
  userID: string,
};

export type AddHotelMutationVariables = {
  input: HotelMastInput,
};

export type AddHotelMutation = {
  addHotel:  {
    __typename: "HotelMast",
    hotelID: string,
    hotelName: string,
  },
};

export type AddRecordMutationVariables = {
  input: RecordMastInput,
};

export type AddRecordMutation = {
  addRecord:  {
    __typename: "RecordMast",
    cleanerID: string,
    cleaningRoomID: string,
    cleaningTime: number,
    createdAt: number,
    finishedAt: number,
    ifScored: boolean,
    recordHotelID: string,
    recordID: string,
    startAt: number,
  },
};

export type AddRoomMutationVariables = {
  input: RoomMastInput,
};

export type AddRoomMutation = {
  addRoom:  {
    __typename: "RoomMast",
    createdAt: number,
    roomHotelID: string,
    roomIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    roomID: string,
    roomName: string,
  },
};

export type AddScoreMutationVariables = {
  input: ScoreMastInput,
};

export type AddScoreMutation = {
  addScore:  {
    __typename: "ScoreMast",
    createdAt: number,
    recordID: string,
    score: number,
    scoreID: string,
    scorerUserID: string,
  },
};

export type UpdateRecordMutationVariables = {
  input: RecordMastInput,
};

export type UpdateRecordMutation = {
  updateRecord:  {
    __typename: "RecordMast",
    cleanerID: string,
    cleaningRoomID: string,
    cleaningTime: number,
    createdAt: number,
    finishedAt: number,
    ifScored: boolean,
    recordHotelID: string,
    recordID: string,
    startAt: number,
  },
};

export type UpdateUserMastMutationVariables = {
  input: UserMastInput,
};

export type UpdateUserMastMutation = {
  updateUserMast:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    role: string,
    updatedAt: number,
    userHotelID?: string | null,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  },
};

export type FetchAllRecordsByHotelIDQueryVariables = {
  recordHotelID: string,
};

export type FetchAllRecordsByHotelIDQuery = {
  fetchAllRecordsByHotelID:  Array< {
    __typename: "RecordMast",
    cleanerID: string,
    cleaningRoomID: string,
    cleaningTime: number,
    createdAt: number,
    finishedAt: number,
    ifScored: boolean,
    recordHotelID: string,
    recordID: string,
    startAt: number,
  } >,
};

export type FetchAllUserByHotelIDQueryVariables = {
  userHotelID: string,
};

export type FetchAllUserByHotelIDQuery = {
  fetchAllUserByHotelID:  Array< {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    role: string,
    updatedAt: number,
    userHotelID?: string | null,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  } >,
};

export type FetchHotelByHotelIDQueryVariables = {
  hotelID: string,
};

export type FetchHotelByHotelIDQuery = {
  fetchHotelByHotelID?:  {
    __typename: "HotelMast",
    hotelID: string,
    hotelName: string,
  } | null,
};

export type FetchMyUserMastQuery = {
  fetchMyUserMast?:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    role: string,
    updatedAt: number,
    userHotelID?: string | null,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  } | null,
};

export type FetchRecordsByCleanerIDQueryVariables = {
  cleanerID: string,
};

export type FetchRecordsByCleanerIDQuery = {
  fetchRecordsByCleanerID:  Array< {
    __typename: "RecordMast",
    cleanerID: string,
    cleaningRoomID: string,
    cleaningTime: number,
    createdAt: number,
    finishedAt: number,
    ifScored: boolean,
    recordHotelID: string,
    recordID: string,
    startAt: number,
  } >,
};

export type FetchRecordsByRoomIDQueryVariables = {
  cleaningRoomID: string,
};

export type FetchRecordsByRoomIDQuery = {
  fetchRecordsByRoomID:  Array< {
    __typename: "RecordMast",
    cleanerID: string,
    cleaningRoomID: string,
    cleaningTime: number,
    createdAt: number,
    finishedAt: number,
    ifScored: boolean,
    recordHotelID: string,
    recordID: string,
    startAt: number,
  } >,
};

export type FetchRoomsByHotelIDQueryVariables = {
  roomHotelID: string,
};

export type FetchRoomsByHotelIDQuery = {
  fetchRoomsByHotelID:  Array< {
    __typename: "RoomMast",
    createdAt: number,
    roomHotelID: string,
    roomIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    roomID: string,
    roomName: string,
  } >,
};

export type FetchScoresByRecordIDQueryVariables = {
  recordID: string,
};

export type FetchScoresByRecordIDQuery = {
  fetchScoresByRecordID:  Array< {
    __typename: "ScoreMast",
    createdAt: number,
    recordID: string,
    score: number,
    scoreID: string,
    scorerUserID: string,
  } >,
};

export type FetchUserMastByUserIDQueryVariables = {
  userID: string,
};

export type FetchUserMastByUserIDQuery = {
  fetchUserMastByUserID?:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    role: string,
    updatedAt: number,
    userHotelID?: string | null,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  } | null,
};
