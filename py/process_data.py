# %%
import pandas as pd

benchmark_to_filename = {"triage": "./data/eval_benchmark=triage.csv"}

df = pd.read_csv(benchmark_to_filename["triage"], index_col=0)
df["benchmark"] = "TRIAGE"

df = df.melt(
    id_vars=["ground_truth", "input_text", "benchmark"],
    value_vars=[col for col in df.columns if col.startswith("model_")],
    var_name="model",
    value_name="prediction",
)

df["model"] = df["model"].str.replace("model_", "")

df.head()

# %%
import itertools

benchmarks = df["benchmark"].unique()
models = df["model"].unique()

model_bench_items = list(itertools.product(models, benchmarks))

# %%
out = {
    "id": "1",
    "name": "Testing new prmopt",
    "createdByName": "Noah",
    "createdAt": "2024-03-01T02:23:53.528Z",
    "updatedAt": "2024-03-03T02:21:53.528Z",
    "status": "COMPLETE",
    "evalResults": [],
}

for item in model_bench_items:
    newEvalResult = {
        "model": item[0],
        "modelVersion": "TODO",
        "metric": item[1],
        "prompt": "TODO",
        "values": [],
    }
    dft = df[(df["model"] == item[0]) & (df["benchmark"] == item[1])].copy()
    for idx, row in dft.iterrows():
        if str(row["ground_truth"]).isdigit():
            is_correct = int(row["prediction"]) == int(row["ground_truth"])
            newEvalResult["values"].append(
                {
                    "input": row["input_text"],
                    "modelOutput": int(row["prediction"]),
                    "correctOutput": int(row["ground_truth"]),
                    "isCorrect": is_correct,
                }
            )
        else:
            raise ValueError(
                "Non-digit ground truth encountered. Manual check required."
            )

    out["evalResults"].append(newEvalResult)


import json
import os

# Ensure the 'out' directory exists
if not os.path.exists("./out"):
    os.makedirs("./out")

# Write the JSON data to a file in the 'out' directory
with open("./out/evaluations.json", "w") as file:
    json.dump(out, file, indent=4)

# %%
#  data: [
#       {
#         input:
#           "My computer won't turn on when I press the power button. The lights blink for a second and then nothing happens.",
#         output: "A: Escalate",
#         source: "upload",
#       },

benchmark = "TRIAGE"
dft = df[df["benchmark"] == benchmark].drop_duplicates(subset="input_text")


benchmark_ref_data = []
for idx, row in dft.iterrows():
    benchmark_ref_data.append(
        {"input": row["input_text"], "output": row["prediction"], "source": "upload"}
    )

benchmark_ref_data

# Write the JSON data to a file in the 'out' directory
with open("./out/{}_ref_data.json".format(benchmark), "w") as file:
    json.dump(benchmark_ref_data, file, indent=4)
