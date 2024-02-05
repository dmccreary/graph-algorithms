# Using Generative AI to Create Datasets for Graph Algorithms

The best way to quickly understand graph algorithms is to
have high-quality datasets to help you visualize how
the graph algorithms work step-by-step.

This section demonstrates how to use generative AI to generate data sets.

## Sample Prompt

```linenums="0"
Generate a table of the 20 largest metro regions in the US.
Each row has a metro region.
Each row has the following columns:

1. Rank
2. Name
3. Population
5. Latitude
4. Longitude

Round all numbers to three significant places.
```

If you are happy with the results you can issue
the following prompt:

```linenums="0"
Return a downloadable JSON file of this table.
```

## US Cities Graph Network Demo

The following demo walks you through the process of
creating a sample data set of the top 20 metro regions
in the US.  This dataset is ideal for testing various
algorithms such as search, path and traveling salesperson.

[US Cities](./us-cities/index.md)