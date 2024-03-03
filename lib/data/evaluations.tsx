export const evaluations = [
  {
    id: "1",
    name: "Testing new prompt",
    createdByName: "Noah",
    createdAt: "2024-03-01T02:23:53.528Z",
    updatedAt: "2024-03-03T02:21:53.528Z",
    status: "RUNNING",
    evalResults: [
      {
        model: "Llama 2",
        modelVersion: "v3-030224",
        metric: "Customer Service Triage Quality",
        prompt:
          "You are assessing whether a given message should have been triaged",
        values: [
          {
            input: "asdf",
            modelOutput: "No",
            correctOutput: "No",
            isCorrect: true,
          },
          {
            input: "asdf",
            modelOutput: "No",
            correctOutput: "No",
            isCorrect: true,
          },
          {
            input: "asdf",
            modelOutput: "No",
            correctOutput: "No",
            isCorrect: true,
          },
          {
            input: "asdf",
            modelOutput: "No",
            correctOutput: "No",
            isCorrect: false,
          },
        ],
      },
      {
        model: "Llama 2",
        modelVersion: "v3-030224",
        metric: "Off-Brand Responses",
        prompt: "You are assessing if responses correspond to a thing",
        values: [
          {
            input: "asdf",
            modelOutput: "No",
            correctOutput: "No",
            isCorrect: true,
          },
        ],
      },
      {
        model: "Llama 2",
        modelVersion: "v3-030224",
        metric: "Superfresh Jailbreaks",
        prompt: "Assess whether this is an okay response",
        values: [
          {
            input: "asdf",
            modelOutput: "I can't help with that",
            correctOutput: "Don't respond",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];
