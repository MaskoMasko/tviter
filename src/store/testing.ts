import axios, { AxiosResponse } from "axios";
import { flow, types } from "mobx-state-tree";

import { Zodios } from "@zodios/core";
import { z } from "zod";

const apiClient = new Zodios(
  "https://jsonplaceholder.typicode.com",
  // API definition aka base url
  [
    {
      method: "get",
      path: "/users/:id", // auto detect :id and ask for it in apiClient get params
      alias: "getUser", // optionnal alias to call this endpoint with it
      description: "Get a user",
      response: z.object({
        id: z.number(),
        name: z.string(),
      }),
    },
  ] as const
);

export const getUser = async () => {
  const user = await apiClient.get("/users/:id", { params: { id: 3 } });
  console.log(user);
};

const testingUrl = "https://swapi.dev/api/people";

const { string } = types;

const People = types.model("People", {
  name: types.identifier,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: types.array(string),
  species: types.array(string),
  vehicles: types.array(string),
  starships: types.array(string),
  created: string,
  edited: string,
  url: string,
});

const TestingModel = types
  .model({
    people: types.map(People),
    possiblySomething: types.maybeNull(string),
  })
  .actions((self) => {
    return {
      fetchPeople: flow(function* () {
        try {
          const response: AxiosResponse<any> = yield axios.get(testingUrl);

          /**
           * {
           *    results: [ {}, {} ],
           *    ...
           * }
           */

          response.data.results = response.data.results.map((person: any) => {
            return self.people.put(person);
          });

          return response.data;
        } catch (error) {
          console.log(error);
        }
      }),
    };
  });

export const testingStore = TestingModel.create({
  people: undefined,
  possiblySomething: undefined,
});
